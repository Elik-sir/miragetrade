import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";
import "./cart-icon.scss";

const CartIcon = ({ quantity }) => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" color="white" />
    <span className="item-count">{quantity}</span>
  </div>
);
const mapStateToProps = createStructuredSelector({
  quantity: selectCartItemsCount,
});
export default connect(mapStateToProps)(CartIcon);
