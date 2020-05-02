import React, { useEffect } from 'react';
import Picture from './picture';
import Fade from 'react-reveal/Fade';
import Features from '../../components/Features/Features';
import { getCountUsers } from '../../firebase/firebase.utils';
import { useStyles } from './styles';
//Страница главная
const HomePage = () => {
  const [countUser, setCountUser] = React.useState();
  useEffect(() => {
    getCountUsers().then((data) => setCountUser(data));
  }, [setCountUser]);
  const classes = useStyles(); //use hook styles
  return (
    <div className='HomePage'>
      <Picture />
      {/* Picture component */}
      <h1 className={classes.title} color='secondary'>
        ПОЧЕМУ ИМЕННО МЫ ?
      </h1>
      <Fade collapse bottom duration={1700}>
        {/*Animation */}
        <Features />
        {/*Features component */}
        <div className={classes.wrapperFooter}>
          <span>© MIRAGETRADE 2020 </span>
          <p>Количество пользователей - {countUser}</p>
        </div>
      </Fade>
    </div>
  );
};
export default HomePage;
