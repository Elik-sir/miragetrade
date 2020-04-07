import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter, Link } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/actions";
import CartItem from "../cart-item/cart-item";
import "./cart-dropdown.scss";

const CartDropdown = ({ cartItems, history, toggle }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
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
        <span className="empty-message">Корзина пустая</span>
      )}
    </div>
    <Link
      to="/checkout"
      className="checkout-btn"
      onClick={() => {
        history.push("/checkout");
        toggle();
      }}
    >
      Перейти в корзину
    </Link>
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggleCartHidden()),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown),
);
