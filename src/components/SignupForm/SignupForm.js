import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../redux/common/actions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { useStyles } from './styles';
//Форма регистрации
const SignupForm = ({ setAlert }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [name, setName] = useState('');
  const changeEmail = (e) => setEmail(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);
  const changeName = (e) => setName(e.target.value);
  const changeСonfirmpassword = (e) => setConfirmpassword(e.target.value);

  const classes = useStyles();
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmpassword) {
      setAlert({
        open: true,
        message: 'Пароли не совпадают',
        severity: 'error',
      });
      return;
    }
    if (name.length === 0) {
      setAlert({
        open: true,
        message: 'Заполните поле Name',
        severity: 'error',
      });
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      );

      await createUserProfileDocument(user, {
        displayName: name,
        photoURL: '',
      });
    } catch (error) {
      if (error.message === 'The email address is badly formatted.')
        setAlert({
          open: true,
          message: 'Email не верного формата!',
          severity: 'error',
        });
      else if (
        error.message === 'The password must be 6 characters long or more.' ||
        error.message === 'Password should be at least 6 characters'
      )
        setAlert({
          open: true,
          message: 'Пароль должен содержать 6 или более символов',
          severity: 'error',
        });
      else
        setAlert({
          open: true,
          message: 'Пользователь с данным email уже зарегистрирован ',
          severity: 'error',
        });
    }
  };
  return (
    <>
      <TextField
        id='name-input'
        label='Name'
        fullWidth
        className={classes.textField}
        value={name}
        onChange={changeName}
        autoComplete='email'
      />
      <TextField
        id='login-input'
        label='Email'
        fullWidth
        className={classes.textField}
        value={email}
        onChange={changeEmail}
        autoComplete='email'
      />
      <TextField
        id='password-inupt'
        type='password'
        label='Пароль'
        autoComplete='password'
        fullWidth
        className={classes.textField}
        value={password}
        onChange={changePassword}
      />
      <TextField
        id='confirmpassword-inupt'
        type='password'
        label='Подтвердите пароль'
        autoComplete='password'
        fullWidth
        className={classes.textField}
        value={confirmpassword}
        onChange={changeСonfirmpassword}
      />
      <Button
        variant='contained'
        color='secondary'
        classes={{ root: classes.btn }}
        onClick={handleSubmit}
      >
        Зарегистрироваться
      </Button>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setAlert: (alert) => dispatch(setAlert(alert)),
});
export default connect(null, mapDispatchToProps)(SignupForm);
