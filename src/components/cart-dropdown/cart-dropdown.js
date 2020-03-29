import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item";
import "./cart-dropdown.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem, id) => (
        <CartItem
          key={id}
          image={cartItem.image}
          name={cartItem.name}
          sale_price={cartItem.sale_price}
          quantity={cartItem.quantity}
        />
      ))}
    </div>
    <button className="checkout-btn">Перейти в корзину</button>
  </div>
);
const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
});
export default connect(mapStateToProps)(CartDropdown);
