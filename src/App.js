import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import HomePage from './pages/HomePage/Home';
import SignInContainer from './pages/SignIn/Container';
import ShopPage from './pages/Shop/Page';
import CheckoutPage from './pages/checkout/CheckoutPage';
import OrdersPage from './pages/Orders/Page';
import FaqPage from './pages/FaqPage/Page';
import ReviewsPage from './pages/Reviews/Page';
import HeaderContainer from './components/header/Header.container';
import { setCurrentUser } from './redux/user/actions';
import { setAlert } from './redux/common/actions';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectAlert } from './redux/common/common.select';
import './App.css';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
const Alert = (props) => {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
};
//Создание общей цветой темы сайта
const theme = createMuiTheme({
  palette: {
    primary: { main: '#d32f2f', light: '#ff6659', dark: '#9a0007' },
    secondary: { main: '#f44336', light: '#ff7961', dark: '#ba000d' },
  },
});
//Корневой компонент, который собирает в себе все остальные
const App = ({ setCurrentUser, currentUser, alert, hideAlert }) => {
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
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    hideAlert({ open: false, text: '' });
  };
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
            render={() =>
              currentUser ? <Redirect to='/' /> : <SignInContainer />
            }
          />
          <Route exact path='/faq' component={FaqPage} />
          <Route exact path='/reviews' component={ReviewsPage} />
          <Route exact path='/orders' component={OrdersPage} />
        </Switch>
      </div>
      <Snackbar
        open={alert.open}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        key={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={alert.severity}>
          {alert.message}
        </Alert>
      </Snackbar>
    </MuiThemeProvider>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  alert: selectAlert,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  hideAlert: (alert) => dispatch(setAlert(alert)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
