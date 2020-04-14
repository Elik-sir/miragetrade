import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { ReactComponent as Logo } from '../../assets/MIRAGETRADE.svg';
import CartIcon from '../cart-icon/cart-icon';
import Avatar from '@material-ui/core/Avatar';
import './Header.styles.css';
import { auth } from '../../firebase/firebase.utils';
import { useStyles } from './styles';
import UserProfile from '../UserProfile/UserProfile';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Header = ({ currentUser, toggleCartHidden, hidden, toggleDialog }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const matches = useMediaQuery('(min-width:600px)');
  const props = { matches: matches };
  const classes = useStyles(props);
  const handleClick = (event) => {
    if (currentUser) setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.header} style={{}}>
      <div
        className='logo'
        onClick={() => {
          if (!hidden) toggleCartHidden();
        }}
        style={{ padding: '24px' }}
      >
        <Link to='/' className={classes.link}>
          <Logo width={matches ? '350px' : '150px'} />
        </Link>
      </div>
      <div className='signin'>
        <div
          style={{
            width: 'auto',
          }}
        >
          <Button
            onClick={() => {
              if (!hidden) toggleCartHidden();
            }}
          >
            <Link to='/shop' className={classes.link}>
              МАГАЗИН
            </Link>
          </Button>
        </div>
        <div className={classes.logout}>
          <Button
            aria-controls='customized-menu'
            aria-haspopup='false'
            onClick={(e) => {
              handleClick(e);
              if (!hidden) toggleCartHidden();
            }}
          >
            {currentUser ? (
              <>
                <Avatar alt='avatar' src={currentUser.photoURL} />
              </>
            ) : (
              <Link to='/signin' className={classes.link}>
                ВОЙТИ
              </Link>
            )}
          </Button>

          <Menu
            id='customized-menu'
            anchorEl={anchorEl}
            elevation={0}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            open={Boolean(anchorEl)}
            keepMounted
            onClose={handleClose}
          >
            <MenuItem
              onClick={(e) => {
                handleClose(e);
                toggleDialog();
              }}
            >
              Профиль
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                auth.signOut();
                handleClose(e);
              }}
            >
              Выйти
            </MenuItem>
          </Menu>
        </div>
        <div onClick={() => toggleCartHidden()}>
          {<CartIcon color='white' />}
        </div>
      </div>

      {hidden ? null : <CartDropdown />}
      {currentUser ? <UserProfile /> : null}
    </div>
  );
};

export default Header;
