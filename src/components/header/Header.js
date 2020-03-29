import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { toggleCartHidden } from "../../redux/cart/actions";
import CartIcon from "../cart-icon/cart-icon";
import "./Header.styles.css";
import { auth } from "../../firebase/firebase.utils";
const Header = ({ currentUser, toggleCartHidden, hidden }) => (
  <div className="header">
    <div className="logo">
      <Link to="/">MIRAGETRADE</Link>
    </div>
    <div className="signin">
      {currentUser ? (
        <div style={{ cursor: "pointer" }} className="logout">
          <div onClick={() => auth.signOut()}>ВЫЙТИ</div>
          <div onClick={() => toggleCartHidden()}>
            {<CartIcon color="white" />}
          </div>
        </div>
      ) : (
        <Link to="/signin">ВОЙТИ</Link>
      )}
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);
const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden,
});
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
