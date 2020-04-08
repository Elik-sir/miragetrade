import React from 'react';
import Picture from './picture';
import Directory from '../../components/directory/directory';
import { useStyles } from './styles';
const HomePage = () => {
  const classes = useStyles();
  return (
    <div className='HomePage'>
      <Picture />
      <h1 className={classes.title}>ПОЧЕМУ ИМЕННО МЫ ?</h1>
      <Directory />
    </div>
  );
};

export default HomePage;
