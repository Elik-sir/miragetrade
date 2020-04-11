import { connect } from 'react-redux';
import Header from './Header';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { toggleCartHidden } from '../../redux/cart/actions';
import { toggleUserProfile } from '../../redux/common/actions';
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
  toggleUserProfile: () => dispatch(toggleUserProfile()),
});
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderContainer;
