import React from 'react';
import { connect } from 'react-redux';
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/actions';
import {
  DeleteOutline,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from '@material-ui/icons';
import { useStyles } from './styles';
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, image, sale_price, quantity } = cartItem;
  const classes = useStyles();
  return (
    <div className={classes.checkoutItem}>
      <div className={classes.imageContainer}>
        <img src={image} alt='item' className={classes.img} />
      </div>
      <span className={classes.name}>{name}</span>
      <div className={classes.quantity}>
        <div className={classes.arrow} onClick={() => removeItem(cartItem)}>
          <KeyboardArrowLeft />
        </div>
        <span className={classes.value}>{quantity}</span>
        <div className={classes.arrow} onClick={() => addItem(cartItem)}>
          <KeyboardArrowRight />
        </div>
      </div>
      <span className={classes.price}>${sale_price}</span>
      <span className={classes.price}>
        ${(sale_price * quantity).toFixed(2)}
      </span>
      <div className={classes.removeButton} onClick={() => clearItem(cartItem)}>
        <DeleteOutline />
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
