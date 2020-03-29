import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ image, name, sale_price, quantity }) => (
  <div className="cart-item">
    <img src={image} alt="item" />
    <div className="item-details">
      <span className="price">
        {quantity} x ${sale_price}
      </span>
    </div>
  </div>
);

export default CartItem;
