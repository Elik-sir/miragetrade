import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";
import "./cart-icon.scss";

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={() => toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" color="white" />
    <span className="item-count">0</span>
  </div>
);

export default CartIcon;
