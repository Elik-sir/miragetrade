import React from 'react';
import { useStyles } from './styles';
import FaqItem from '../../components/Faq-item/Faq-item';
import Fade from 'react-reveal/Fade';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Grid from '@material-ui/core/Grid';
const Quastions = [
  { id: 1, quastion: 'Почему бот долго не отвечает?' },
  { id: 2, quastion: 'Почему не загружаются предметы в магазине?' },
  { id: 3, quastion: 'В чём ваша выгодна?' },
  { id: 4, quastion: 'Что делать, если вещи не пришли?' },
];

const FaqPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.FaqPage}>
      <div className={classes.title}>
        <h1>Список часто задаваемых вопросов</h1>
        <Grid
          container
          direction='column'
          justify='center'
          alignItems='center'
          style={{
            margin: 0,
            width: '100%',
            padding: '20px',
            paddingLeft: '0',
            paddingRight: '0',
          }}
        >
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <TransitionGroup {...{ appear: true, enter: true, exit: true }}>
              {Quastions.map((quastion) => (
                <Fade key={quastion.id} collapse bottom>
                  <div className={classes.fade}>
                    <FaqItem quastion={quastion.quastion} />
                  </div>
                </Fade>
              ))}
            </TransitionGroup>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default FaqPage;
