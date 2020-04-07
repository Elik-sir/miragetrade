import React from 'react';
import { connect } from 'react-redux';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './shop.css';
const Filters = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState('');
  const [quality, setQuality] = React.useState('');
  const [cost, setCost] = React.useState('');
  const [mincost, setMincost] = React.useState('');
  const [maxcost, setMaxcost] = React.useState('');
  const changeType = (event) => {
    setType(event.target.value);
  };
  const changeQuality = (event) => {
    setQuality(event.target.value);
  };
  const changeCost = (event) => {
    setCost(event.target.value);
  };
  const changeMincost = (event) => {
    setMincost(event.target.value);
  };
  const changeMaxcost = (event) => {
    setMaxcost(event.target.value);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div>
        <h1 style={{ color: 'white', display: 'inline-block' }}>
          СПИСОК СКИНОВ
        </h1>
        <Button
          variant='contained'
          color='secondary'
          onClick={handleClick}
          style={{ marginLeft: '20px' }}
        >
          <span style={{ fontSize: '20px' }}>Фильтры</span>
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
          <div
            style={{
              width: '200px',
              paddingLeft: '10px',
              textAlign: 'center',
              paddingRight: '10px',
            }}
          >
            <TextField
              id='standard-select-currency'
              select
              label='Тип'
              value={type}
              onChange={changeType}
              style={{ width: '180px', marginBottom: '9px' }}
            >
              <MenuItem value={'SMG'}>Пистолет-пулемёты</MenuItem>
              <MenuItem value={'Pistols'}>Пистолеты</MenuItem>
              <MenuItem value={'Heavy'}>тяжёлое</MenuItem>
            </TextField>
            <TextField
              id='standard-select-currency'
              select
              label='Качество'
              value={quality}
              onChange={changeQuality}
              style={{ width: '180px', marginBottom: '9px' }}
            >
              <MenuItem value={'SMG'}>Только с завода</MenuItem>
              <MenuItem value={'Pistols'}>Не много поношенное</MenuItem>
              <MenuItem value={'Heavy'}>После полевых</MenuItem>
            </TextField>

            <TextField
              id='standard-select-currency'
              select
              label='Цена'
              value={cost}
              onChange={changeCost}
              style={{ width: '180px', marginBottom: '9px' }}
            >
              <MenuItem value={'SMG'}>По возрастанию</MenuItem>
              <MenuItem value={'Pistols'}>По убыванию</MenuItem>
            </TextField>
            <p style={{ marginBottom: '0' }}>Цена</p>
            <TextField
              id='standard-select-currency'
              label='от'
              value={mincost}
              onChange={changeMincost}
              style={{
                width: '60px',
                marginBottom: '9px',
                marginRight: '15px',
              }}
            />
            <TextField
              id='standard-select-currency'
              label='до'
              value={maxcost}
              onChange={changeMaxcost}
              style={{ width: '60px', marginBottom: '9px' }}
            />
            <Button variant='contained' color='secondary'>
              <span style={{ fontSize: '20px' }}>Применить</span>
            </Button>
          </div>
        </Menu>
      </div>
    </div>
  );
};
export default Filters;
