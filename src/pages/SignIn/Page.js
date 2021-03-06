import React from 'react';
import { useStyles } from './styles';
import AuthorizationForm from '../../components/AuthorizationForm/AuthorizationForm';

//Страница входа
const SignIn = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <AuthorizationForm />
    </div>
  );
};

export default SignIn;
