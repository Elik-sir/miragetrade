import React from 'react';
import { connect } from 'react-redux';
import { filterItems } from '../../redux/shop/actions';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import { useStyles } from './styles';
const Filters = ({ filter }) => {
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
    <div style={{ width: '95%' }}>
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
              width: '240px',
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
              <MenuItem value={'Pistol'}>Пистолеты</MenuItem>
              <MenuItem value={'Rifle'}>Винтовки</MenuItem>
              <MenuItem value={'Shotgun'}>Тяжёлое</MenuItem>
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
              <MenuItem value={'Pistol'}>Не много поношенное</MenuItem>
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
            <div style={{ display: 'inline-block' }}>
              <Button
                variant='contained'
                color='secondary'
                onClick={() => {
                  filter('');
                  setType('');
                  setQuality('');
                }}
                style={{ marginRight: '8px' }}
              >
                <span style={{ fontSize: '14px' }}>Сбросить</span>
              </Button>
              <Button
                variant='contained'
                color='primary'
                onClick={() => filter(type)}
              >
                <span style={{ fontSize: '14px' }}>Применить</span>
              </Button>
            </div>
          </div>
        </Menu>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  filter: (filter) => dispatch(filterItems(filter)),
});
export default connect(null, mapDispatchToProps)(Filters);
