import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "./pages/HomePage/Home";
import SignIn from "./pages/SignIn/Page";
import ShopPage from "./pages/Shop/shop";
import Header from "./components/header/Header";
import { getItems } from "./redux/shop/actions";
import { setCurrentUser } from "./redux/user/actions";
import { auth } from "./firebase/firebase.utils";
import "./App.css";
import { Unsubscribe } from "@material-ui/icons";

const App = ({ allItems, setCurrentUser, currentUser }) => {
  fetch("http://localhost:8080/")
    .then(response => response.json())
    .then(data => {
      allItems(data);
      console.log(data);
    });
  let unsubscribeFromAuth = null;
  unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    setCurrentUser(user);
  });
  console.log(currentUser);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignIn />)}
        />
      </Switch>
      {<ShopPage />}
    </div>
  );
};

const mapStateToProps = state => ({
  items: state.currentItem,
  currentUser: state.user.currentUser,
});
const mapDispatchToProps = dispatch => ({
  allItems: items => dispatch(getItems(items)),
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
