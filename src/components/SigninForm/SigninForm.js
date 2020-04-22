import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { ReactComponent as Google } from '../../assets/google.svg';
import { useStyles } from './styles';
const SigninForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmail = (e) => setEmail(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);
  const classes = useStyles();
  const onSignInSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
    } catch (error) {
      alert(error);
    }
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
        id='password-inupt'
        type='password'
        label='Пароль'
        autoComplete='password'
        fullWidth
        className={classes.textField}
        value={password}
        onChange={changePassword}
      />
      <div>
        <Button
          variant='contained'
          color='secondary'
          classes={{ root: classes.btn }}
          onClick={onSignInSubmit}
        >
          ВОЙТИ
        </Button>
        <div
          style={{
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '8px',
            marginLeft: '8px',
            cursor: 'pointer',
          }}
          onClick={() => signInWithGoogle()}
        >
          <div>
            <span>Войти через Google</span>
          </div>
          <div style={{ marginLeft: '8px' }}>
            <Google />
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninForm;
