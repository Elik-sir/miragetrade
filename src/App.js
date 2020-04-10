import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import HomePage from './pages/HomePage/Home';
import SignIn from './pages/SignIn/Page';
import ShopPage from './pages/Shop/shop';
import CheckoutPage from './pages/checkout/CheckoutPage';
import FaqPage from './pages/FaqPage/Page';
import ReviewsPage from './pages/Reviews/Page';
import HeaderContainer from './components/header/Header.container';
import { setCurrentUser } from './redux/user/actions';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { selectCurrentUser } from './redux/user/user.selectors';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#d32f2f', light: '#ff6659', dark: '#9a0007' },
    secondary: { main: '#f44336', light: '#ff7961', dark: '#ba000d' },
  },
});
const App = ({ setCurrentUser, currentUser }) => {
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

    unsubscribeFromAuth();
  }, [setCurrentUser]);

  return (
    <MuiThemeProvider theme={theme}>
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
          <Route exact path='/faq' component={FaqPage} />
          <Route exact path='/reviews' component={ReviewsPage} />
        </Switch>
      </div>
    </MuiThemeProvider>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
