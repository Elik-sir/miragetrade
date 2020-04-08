import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { ReactComponent as Logo } from '../../assets/MIRAGETRADE.svg';
import CartIcon from '../cart-icon/cart-icon';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import './Header.styles.css';
import { auth } from '../../firebase/firebase.utils';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
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
    {...props}
  />
));

const Header = ({ currentUser, toggleCartHidden, hidden }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    if (currentUser) setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(null);
  };

  return (
    <div className='header' style={{ height: '10vh', margin: '0' }}>
      <div
        className='logo'
        onClick={() => {
          if (!hidden) toggleCartHidden();
        }}
        style={{ padding: '24px' }}
      >
        <Link to='/'>
          <Logo />
        </Link>
      </div>
      <div className='signin'>
        <div style={{ width: 'auto' }}>
          <Button>
            <Link to='/shop' style={{ fontSize: '20px', fontWeight: 'normal' }}>
              МАГАЗИН
            </Link>
          </Button>
        </div>
        <div style={{ cursor: 'pointer' }} className='logout'>
          <Button
            aria-controls='customized-menu'
            aria-haspopup='false'
            onClick={handleClick}
          >
            {currentUser ? (
              <Avatar alt='avatar' src={currentUser.photoURL} />
            ) : (
              <Link
                to='/signin'
                style={{ fontSize: '20px', fontWeight: 'normal' }}
              >
                ВОЙТИ
              </Link>
            )}
          </Button>

          <StyledMenu
            id='customized-menu'
            anchorEl={anchorEl}
            open={open}
            keepMounted
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Профиль</MenuItem>
            <MenuItem onClick={() => auth.signOut()}>Выйти</MenuItem>
          </StyledMenu>
        </div>
        <div onClick={() => toggleCartHidden()}>
          {<CartIcon color='white' />}
        </div>
      </div>

      {hidden ? null : <CartDropdown />}
    </div>
  );
};

export default Header;
