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
    answer:
      'Каждому боту поступает более 10 заказов в минуту, он просто очень нагружен, но как только он освободится он сразу же ответит!',
  },
  {
    id: 2,
    quastion: 'Почему нет предметов в магазине?',
    answer: 'Ошибка от сервера',
  },
  {
    id: 3,
    quastion: 'В чём ваша выгода?',
    answer:
      'Мы покупаем предметы за реальные деньги и продаём дешевле, чем в Steam, но с небольшой надбавкой от стоимости за которую купили',
  },
  {
    id: 4,
    quastion: 'Что делать, если вещи не пришли?',
    answer: 'Написать в службу поддержки, она 100% поможет',
  },
];
//Страница FAQ
const FaqPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.FaqPage}>
      <div className={classes.title}>
        <TransitionGroup {...{ appear: true, enter: true, exit: true }}>
          <Fade collapse bottom duration={2500} style={{ width: '100%' }}>
            <Grid
              container
              direction='column'
              justify='center'
              alignItems='center'
            >
              <Grid item xs={12} sm={8} md={6} lg={4}>
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
            </Grid>
          </Fade>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default FaqPage;
