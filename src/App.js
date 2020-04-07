import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import HomePage from './pages/HomePage/Home';
import SignIn from './pages/SignIn/Page';
import Signup from './pages/SignUp/Signup';
import ShopPage from './pages/Shop/shop';
import CheckoutPage from './pages/checkout/CheckoutPage';
import HeaderContainer from './components/header/Header.container';
import { getItems } from './redux/shop/actions';
import { setCurrentUser } from './redux/user/actions';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { selectCurrentUser } from './redux/user/user.selectors';
import './App.css';

const App = ({ getItems, setCurrentUser, currentUser }) => {
  useEffect(() => {
    const unsubscribeFromAuth = () =>
      auth.onAuthStateChanged(async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot((snapShot) => {
            setCurrentUser({ id: snapShot.id, ...snapShot.data() });
          });
        } else {
          setCurrentUser(userAuth);
        }
      });
    getItems();
    unsubscribeFromAuth();
  }, [getItems, setCurrentUser]);

  return (
    <div className='App'>
      <HeaderContainer />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/signin'
          render={() => (currentUser ? <Redirect to='/' /> : <SignIn />)}
        />
        <Route
          exact
          path='/signup'
          render={() => (currentUser ? <Redirect to='/' /> : <Signup />)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  getItems: () => dispatch(getItems()),
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
