import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {
  toggleDialogWindowPay,
  toggleDialogDelete,
} from '../../redux/common/actions';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import Button from '@material-ui/core/Button';
import WindowPay from './windowPay';
import ConfirmDelete from './confirmDelete';
import { useStyles } from './styles';
//Страница Корзина
const CheckoutPage = ({
  cartItems,
  total,
  toggleDialog,
  toggleDialogDelete,
  user,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.checkoutPage}>
      {cartItems.length ? (
        <>
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
            <div onClick={toggleDialogDelete}>
              <span style={{ fontSize: '12px', cursor: 'pointer' }}>
                Очистить корзину
              </span>
            </div>

            <div>
              <span>ИТОГО: ${total.toFixed(2)}</span>
            </div>
          </div>
          <div>
            {user ? (
              <Button
                variant='contained'
                color='primary'
                classes={{ root: classes.btnBay }}
                onClick={() => toggleDialog()}
              >
                КУПИТЬ
              </Button>
            ) : (
              <div>
                <h1>Для совершения покупки нужно авторизоваться</h1>
                <Button variant='contained' color='primary'>
                  <Link
                    to='/signin'
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                      fontSize: '24px',
                    }}
                  >
                    Авторизоваться
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <h1>Корзина пустая</h1>
          <Button variant='contained' color='primary'>
            <Link
              to='/shop'
              style={{
                textDecoration: 'none',
                color: 'white',
                fontSize: '24px',
              }}
            >
              в МАГАЗИН
            </Link>
          </Button>
        </>
      )}
      <WindowPay />
      <ConfirmDelete />
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  user: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  toggleDialog: () => dispatch(toggleDialogWindowPay()),
  toggleDialogDelete: () => dispatch(toggleDialogDelete()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
