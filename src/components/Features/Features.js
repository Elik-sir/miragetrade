import React from 'react';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { ReactComponent as Weapon1 } from './Path 9.svg';
import { ReactComponent as Weapon2 } from './Path 8.svg';
import { ReactComponent as Weapon3 } from './Path 10.svg';
import { useStyles } from './styles';
//Достойнства на странице Главная
const Features = ({ history }) => {
  const classes = useStyles();
  return (
    <div style={{ width: '100%', padding: '0' }}>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item lg={4} md={4} xs={12} sm={4}>
          <div className={classes.menuItem}>
            <div
              className={classes.backgroundImage}
              style={{
                backgroundImage:
                  'url(https://www.zastavki.com/pictures/originals/2015/Games_Weapons_from_the_game_Counter-Strike_Global_Offensive_098697_.jpg)',
              }}
            />
            <div className={classes.content}>
              <div>
                <Weapon1 />
              </div>

              <div>
                <span className={classes.subtitle}>Быстро</span>
                <p>Наши боты отвечают за кратчайшее время 2-3 минут</p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item lg={4} md={4} xs={12} sm={4}>
          <div className={classes.menuItem}>
            <div
              className={classes.backgroundImage}
              style={{
                backgroundImage:
                  'url(https://i.pinimg.com/originals/17/19/9d/17199d6ee954fa0e547079db1a2d1899.jpg)',
              }}
            />
            <div className={classes.content}>
              <div>
                <Weapon2 />
              </div>
              <div>
                <span className={classes.subtitle}>Выгодно</span>
                <p>
                  За продажу/покупку скина не берём большой процент как в Steam
                </p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item lg={4} md={4} xs={12} sm={4}>
          <div className={classes.menuItem}>
            <div
              className={classes.backgroundImage}
              style={{
                backgroundImage:
                  'url(https://wallpaperscave.ru/images/original/18/01-26/games-counter-strike-global-offensive-15255.jpg)',
              }}
            />
            <div className={classes.content}>
              <div>
                <Weapon3 />
              </div>
              <div>
                <span className={classes.subtitle}>Большой выбор</span>
                <p>
                  У каждого бота более 600 предметов в инвентаре, которые можно
                  обменять
                </p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={12} sm={12} lg={12}>
          <div
            className={(classes.large, classes.menuItem)}
            onClick={() => history.push('/shop')}
          >
            <div
              className={classes.backgroundImage}
              style={{
                backgroundImage:
                  'url(https://i.playground.ru/p/d_fqtv63kC3g7dX1gfjKKA.jpeg)',
              }}
            />
            <div className={classes.content}>
              <h1 className={classes.title}>Перейти</h1>
              <span className={classes.subtitle}>В магазин</span>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default withRouter(Features);
