import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';
import { useStyles } from './styles';
// Иконка корзины
const CartIcon = ({ quantity }) => {
  const classes = useStyles();
  return (
    <div className={classes.cartIcon}>
      <ShoppingIcon className={classes.shoppingIcon} color='white' />
      <span className={classes.itemCount}>{quantity}</span>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  quantity: selectCartItemsCount,
});
export default connect(mapStateToProps)(CartIcon);
