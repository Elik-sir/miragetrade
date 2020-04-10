import React from 'react';
import { useStyles } from './styles';
const CartItem = ({ image, sale_price, quantity }) => {
  const classes = useStyles();
  return (
    <div className={classes.cartItem}>
      <img src={image} alt='item' className={classes.img} />
      <div className={classes.itemDetails}>
        <span className={classes.price}>
          {quantity} x ${sale_price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
