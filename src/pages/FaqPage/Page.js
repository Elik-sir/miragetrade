import React from 'react';
import { useStyles } from './styles';
import FaqItem from '../../components/Faq-item/Faq-item';
import Fade from 'react-reveal/Fade';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Grid from '@material-ui/core/Grid';

const Quastions = [
  {
    id: 1,
    quastion: 'Почему бот долго не отвечает?',
    answer: 'Тут должен быть ответ,но его пока нет',
  },
  {
    id: 2,
    quastion: 'Почему нет предметов в магазине?',
    answer: 'Тут должен быть ответ,но его пока нет',
  },
  {
    id: 3,
    quastion: 'В чём ваша выгода?',
    answer: 'Тут должен быть ответ,но его пока нет',
  },
  {
    id: 4,
    quastion: 'Что делать, если вещи не пришли?',
    answer: 'Тут должен быть ответ,но его пока нет',
  },
];

const FaqPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.FaqPage}>
      <div className={classes.title}>
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
          <TransitionGroup {...{ appear: true, enter: true, exit: true }}>
            <Fade collapse bottom duration={2500}>
              <Grid item xs={12} sm={10} md={8} lg={6}>
                <h1>Список часто задаваемых вопросов</h1>
                {Quastions.map((quastion) => (
                  <div className={classes.fade}>
                    <FaqItem
                      quastion={quastion.quastion}
                      answer={quastion.answer}
                      id={quastion.id}
                    />
                  </div>
                ))}
              </Grid>
            </Fade>
          </TransitionGroup>
        </Grid>
      </div>
    </div>
  );
};

export default FaqPage;
