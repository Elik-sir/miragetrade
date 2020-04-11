import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter, Link } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/actions';
import Button from '@material-ui/core/Button';
import CartItem from '../cart-item/cart-item';
import { useStyles } from './styles';

const CartDropdown = ({ cartItems, history, toggle }) => {
  const classes = useStyles();
  return (
    <div className={classes.cartDropdown}>
      <div className={classes.cartItems}>
        {cartItems.length ? (
          cartItems.map((cartItem, id) => (
            <CartItem
              key={id}
              image={cartItem.image}
              name={cartItem.name}
              sale_price={cartItem.sale_price}
              quantity={cartItem.quantity}
            />
          ))
        ) : (
          <span className={classes.emptyMessage}>Корзина пустая</span>
        )}
      </div>
      <Button
        variant='contained'
        color='secondary'
        classes={{ root: classes.checkoutbtn }}
      >
        <Link
          to='/checkout'
          onClick={() => {
            history.push('/checkout');
            toggle();
          }}
          className={classes.link}
        >
          Перейти в корзину
        </Link>
      </Button>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleCartHidden()),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown),
);
