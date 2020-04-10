import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { useStyles } from './styles';
const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayname] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const changeEmail = (e) => setEmail(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);
  const changeName = (e) => setDisplayname(e.target.value);
  const changeСonfirmpassword = (e) => setConfirmpassword(e.target.value);
  const classes = useStyles();
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
      await createUserProfileDocument(user, { displayName, photoURL: '' });
    } catch (error) {}
  };
  return (
    <>
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
        id='name-inupt'
        type='text'
        label='NickName'
        fullWidth
        className={classes.textField}
        value={displayName}
        onChange={changeName}
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

export default SignupForm;
