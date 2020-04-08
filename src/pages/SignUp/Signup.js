import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/user/actions';

import { useStyles } from './styles';
const Signup = ({ setCurrentUser }) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayname] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const changeEmail = (e) => setEmail(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);
  const changeName = (e) => setDisplayname(e.target.value);

  const changeСonfirmpassword = (e) => setConfirmpassword(e.target.value);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmpassword) {
      alert('Не совпадают пароли');
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      );
      const photoURL =
        'https://sun9-51.userapi.com/c855620/v855620855/197c3/hiqkleeoI8I.jpg';
      await createUserProfileDocument(user, { displayName, photoURL });
    } catch (error) {}
  };

  return (
    <div className={classes.background}>
      <form className={classes.container} onSubmit={handleSubmit}>
        <h2 style={{ color: 'white' }}>Регистрация</h2>
        <TextField
          label='Имя'
          className={classes.textField}
          type='text'
          margin='normal'
          variant='outlined'
          value={displayName}
          onChange={changeName}
        />

        <TextField
          id='login-input'
          label='Email'
          className={classes.textField}
          type='text'
          name='Email'
          autoComplete='email'
          margin='normal'
          variant='outlined'
          value={email}
          onChange={changeEmail}
        />
        <TextField
          id='password-input'
          label='Пароль'
          className={classes.textField}
          type='password'
          name='password'
          autoComplete='password'
          margin='normal'
          variant='outlined'
          value={password}
          onChange={changePassword}
        />
        <TextField
          id='confirmpassword-input'
          label='Подтвердите пароль'
          className={classes.textField}
          type='password'
          name='password'
          autoComplete='password'
          margin='normal'
          variant='outlined'
          value={confirmpassword}
          onChange={changeСonfirmpassword}
        />
        <div className={classes.buttonsWrapper}></div>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          onClick={handleSubmit}
        >
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(Signup);
