import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import './picture.css';
const Picture = () => (
  <div className='Picture'>
    <Grid container direction='row' justify='center' alignItems='center'>
      <Grid item>
        <div className='Offer'>
          <h1 className='OfferText'>
            Продаём скины дешевле, чем на
            <br />
            Торговой площадке
          </h1>

          <Link to='/shop' className='offer-btn' style={{ fontSize: '40px' }}>
            МАГАЗИН
          </Link>
        </div>
      </Grid>
    </Grid>
  </div>
);

export default Picture;
