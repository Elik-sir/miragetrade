import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CartDropdown from '../cart-dropdown/cart-dropdown';

import CartIcon from '../cart-icon/cart-icon';

import Avatar from '@material-ui/core/Avatar';
import './Header.styles.css';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser, toggleCartHidden, hidden }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='header'>
      <div
        className='logo'
        onClick={() => {
          if (!hidden) toggleCartHidden();
        }}
      >
        <Link to='/'>MIRAGETRADE</Link>
      </div>
      <div className='signin'>
        <div style={{ width: 'auto' }}>
          <Link to='/shop'>МАГАЗИН</Link>
        </div>
        <div onClick={() => toggleCartHidden()}>
          {<CartIcon color='white' />}
        </div>
        {currentUser ? (
          <div style={{ cursor: 'pointer' }} className='logout'>
            <Button
              aria-controls='simple-menu'
              aria-haspopup='true'
              onClick={handleClick}
            >
              <Avatar alt='avatar' src={currentUser.photoURL} />
            </Button>
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
              id='simple-menu'
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={() => setOpen(false)}>Профиль</MenuItem>
              <MenuItem onClick={() => auth.signOut()}>Выйти</MenuItem>
            </Menu>
          </div>
        ) : (
          <Link to='/signin'>ВОЙТИ</Link>
        )}
      </div>

      {hidden ? null : <CartDropdown />}
    </div>
  );
};

export default Header;
