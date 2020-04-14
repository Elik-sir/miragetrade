import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { toggleDialogWindowPay } from '../../redux/common/actions';
const WindowPay = ({ open, toggleDialog }) => {
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
            id='name'
            label='номер счёта'
            type='text'
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => toggleDialog()} color='primary'>
            Отмена
          </Button>
          <Button onClick={() => toggleDialog()} color='primary'>
            Оплатить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
const mapStateToProps = (state) => ({
  open: state.common.toggleWindowPay,
});
const mapDispatchToProps = (dispatch) => ({
  toggleDialog: () => dispatch(toggleDialogWindowPay()),
});
export default connect(mapStateToProps, mapDispatchToProps)(WindowPay);
