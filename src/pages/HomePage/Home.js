import React from 'react';
import Picture from './picture';
import Fade from 'react-reveal/Fade';
import Features from '../../components/Features/Features';
import { useStyles } from './styles';
const HomePage = () => {
  const classes = useStyles();
  return (
    <div className='HomePage'>
      <Picture />
      <h1 className={classes.title} color='secondary'>
        ПОЧЕМУ ИМЕННО МЫ ?
      </h1>
      <Fade collapse bottom duration={2000}>
        <Features />
        <div style={{ height: '60px', textAlign: 'center', color: 'white' }}>
          <span>© MIRAGETRADE 2020 </span>
          <p>Количество поситителей - 20</p>
        </div>
      </Fade>
    </div>
  );
};
export default HomePage;
