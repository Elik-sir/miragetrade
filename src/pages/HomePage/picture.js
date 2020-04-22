import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import './picture.css';
const Picture = () => {
  const classes = useStyles();
  return (
    <div className={classes.Picture}>
      <div className='Offer'>
        <h1
          className='OfferText'
          style={{ position: 'realative', marginTop: '200px', zIndex: '1' }}
        >
          Продаём скины дешевле, чем на
          <br />
          Торговой площадке
        </h1>
      </div>
      <div className={classes.wrapperFAQ}>
        <div className={classes.FAQ}>
          <div className={classes.ItemFAQ}>
            <Link to='/reviews' className={classes.link}>
              ОТЗЫВЫ
            </Link>
          </div>
          <div className={classes.ItemFAQ}>
            <Link to='/faq' className={classes.link}>
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Picture;
