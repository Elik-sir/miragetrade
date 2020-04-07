import React from "react";
import { connect } from "react-redux";
import "./checkout-item.styles.scss";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/actions";
import {
  DeleteOutline,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@material-ui/icons";
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, image, sale_price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={image} alt="item" />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          <KeyboardArrowLeft />
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          <KeyboardArrowRight />
        </div>
      </div>
      <span className="price">{sale_price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        <DeleteOutline />
      </div>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
