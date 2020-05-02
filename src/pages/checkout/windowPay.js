import React from 'react';
import { connect } from 'react-redux';
import { addOrder } from '../../firebase/firebase.utils';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { toggleDialogWindowPay, setAlert } from '../../redux/common/actions';
import { clearCart } from '../../redux/cart/actions';
import validator from 'validator';
//Окно оплаты
const WindowPay = ({
  open,
  toggleDialog,
  clearCart,
  setAlert,
  user,
  items,
}) => {
  const [account, setAccount] = React.useState('');
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => toggleDialog()}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Оплата</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Введите свой QIWI кошелёк для выставления счёта
          </DialogContentText>
          <TextField
            autoComplete='off'
            margin='dense'
            onChange={(e) => setAccount(e.target.value)}
            id='name'
            label='номер телефона'
            type='phone'
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => toggleDialog()} color='primary'>
            Отмена
          </Button>
          <Button
            onClick={() => {
              if (validator.isMobilePhone(account)) {
                addOrder('orders', {
                  userid: user.id,
                  items,
                  account,
                  createdAt: new Date(),
                });
                setAlert({
                  open: true,
                  message: 'Заказ оформлен',
                  severity: 'success',
                });
                clearCart();
                toggleDialog();
              } else
                setAlert({
                  open: true,
                  message: 'Неверный формат номера',
                  severity: 'error',
                });
            }}
            color='primary'
          >
            Оплатить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
const mapStateToProps = (state) => ({
  open: state.common.toggleWindowPay,
  user: state.user.currentUser,
  items: state.cart.cartItems,
});
const mapDispatchToProps = (dispatch) => ({
  toggleDialog: () => dispatch(toggleDialogWindowPay()),
  clearCart: () => dispatch(clearCart()),
  setAlert: (alert) => dispatch(setAlert(alert)),
});
export default connect(mapStateToProps, mapDispatchToProps)(WindowPay);
