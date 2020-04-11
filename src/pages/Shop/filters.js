import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import { useStyles } from './styles';
const Filters = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState('');
  const [quality, setQuality] = React.useState('');
  const [cost, setCost] = React.useState('');

  const changeType = (event) => {
    setType(event.target.value);
  };
  const changeQuality = (event) => {
    setQuality(event.target.value);
  };
  const changeCost = (event) => {
    setCost(event.target.value);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };
  const [value, setValue] = React.useState([150, 400]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const valuetext = (value) => {
    return `${value}$`;
  };
  const classes = useStyles();
  return (
    <div style={{ width: '98%' }}>
      <div style={{ textAlign: 'left' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <h1 style={{ color: 'white', display: 'inline-block' }}>
              СПИСОК СКИНОВ
            </h1>
          </div>

          <div>
            <Button
              variant='contained'
              color='secondary'
              onClick={handleClick}
              style={{ marginLeft: '20px' }}
            >
              <span style={{ fontSize: '20px' }}>Фильтры</span>
            </Button>
          </div>
        </div>

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
          classes={{ paper: classes.filterMenu }}
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
              className={classes.textField}
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
              className={classes.textField}
            >
              <MenuItem value={'SMG'}>Только с завода</MenuItem>
              <MenuItem value={'Pistols'}>Не много поношенное</MenuItem>
              <MenuItem value={'Heavy'}>После полевых</MenuItem>
            </TextField>

            <TextField
              id='standard-select-currency'
              select
              label='Сортировать цену'
              value={cost}
              onChange={changeCost}
              className={classes.textField}
            >
              <MenuItem value={'SMG'}>По возрастанию</MenuItem>
              <MenuItem value={'Pistols'}>По убыванию</MenuItem>
            </TextField>
            <p style={{ marginBottom: '0', marginTop: '-10px' }}>Цена $</p>
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay='auto'
              aria-labelledby='range-slider'
              getAriaValueText={valuetext}
              max={1000}
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
