import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import { toggleDialogWindowPay } from '../../redux/common/actions';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import Button from '@material-ui/core/Button';
import WindowPay from './windowPay';
import { useStyles } from './styles';
const CheckoutPage = ({ cartItems, total, toggleDialog }) => {
  const classes = useStyles();
  return (
    <div className={classes.checkoutPage}>
      <div className={classes.checkoutHeader}>
        <div className={classes.headerBlock}>
          <span>Предмет</span>
        </div>
        <div className={classes.headerBlock}>
          <span>Название</span>
        </div>
        <div className={classes.headerBlock}>
          <span>Количество</span>
        </div>
        <div className={classes.headerBlock}>
          <span>Цена</span>
        </div>
        <div className={classes.headerBlock}>
          <span>Подытог</span>
        </div>
        <div className={classes.headerBlock}>
          <span>Удалить</span>
        </div>
      </div>
      {cartItems.map((cartItem, id) => (
        <CheckoutItem key={id} cartItem={cartItem} />
      ))}
      <div className={classes.total}>
        <div>
          <span>ИТОГО: ${total.toFixed(2)}</span>
        </div>
      </div>
      <div>
        {cartItems.length ? (
          <Button
            variant='contained'
            color='primary'
            classes={{ root: classes.btnBay }}
            onClick={() => toggleDialog()}
          >
            КУПИТЬ
          </Button>
        ) : null}
      </div>
      <WindowPay />
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
const mapDispatchToProps = (dispatch) => ({
  toggleDialog: () => dispatch(toggleDialogWindowPay()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
