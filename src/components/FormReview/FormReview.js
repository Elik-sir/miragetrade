import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    width: '200',
    display: 'flex',
    alignItems: 'center',
  },
  textField: {
    width: '100%',
    backgroundColor: '#414040',
    color: 'white',
    '& > label': {
      color: 'white',
    },
  },
  input: {
    borderColor: '#80deea',
  },
});

const Formreview = () => {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  return (
    <div
      style={{
        width: '550px',
        border: '1px solid white',
        borderRadius: '6px',
        padding: '16px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div
          style={{ display: 'flex', alignItems: 'center', marginLeft: '8px' }}
        >
          <Avatar src='https://sun9-51.userapi.com/c855620/v855620855/197c3/hiqkleeoI8I.jpg' />
          <div style={{ marginLeft: '11px' }}>
            <span>Никнэйм</span>
          </div>
        </div>
        <div className={classes.root}>
          <Rating
            name='hover-feedback'
            value={value}
            precision={0.5}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            classes={{
              icon: { color: 'red' },
            }}
          />
        </div>
      </div>
      <div style={{ margin: '15px 5px' }}>
        <TextField
          id='outlined-multiline-static'
          label='Комментарий'
          multiline
          rows='4'
          variant='outlined'
          classes={{
            root: classes.textField,
            input: classes.input,
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '10px',
        }}
      >
        <Button variant='contained' color='secondary'>
          ОТПРАВИТЬ
        </Button>
      </div>
    </div>
  );
};
export default Formreview;
