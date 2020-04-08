import React from 'react';
import { useStyles } from './styles';
import ReviewItem from '../../components/Review-item/Review-item';
import Fade from 'react-reveal/Fade';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Grid from '@material-ui/core/Grid';
import Formreview from '../../components/FormReview/FormReview';
import Pagination from '@material-ui/lab/Pagination';
const Reviews = [
  {
    id: 1,
    avatar:
      'https://sun9-51.userapi.com/c855620/v855620855/197c3/hiqkleeoI8I.jpg',
    comment: 'Почему бот долго не отвечает?',
  },
  {
    id: 2,
    avatar:
      'https://sun9-51.userapi.com/c855620/v855620855/197c3/hiqkleeoI8I.jpg',
    comment: 'Почему бот долго не отвечает?',
  },
  {
    id: 3,
    avatar:
      'https://sun9-51.userapi.com/c855620/v855620855/197c3/hiqkleeoI8I.jpg',
    comment: 'Почему бот долго не отвечает?',
  },
  {
    id: 4,
    avatar:
      'https://sun9-51.userapi.com/c855620/v855620855/197c3/hiqkleeoI8I.jpg',
    comment: 'Почему бот долго не отвечает?',
  },
];

const ReviewsPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.ReviewPage}>
      <div className={classes.title}>
        <h1>Отзывы</h1>
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
          <TransitionGroup {...{ appear: true, enter: true }}>
            <Grid item xs={12} sm={10} md={8} lg={6}>
              {Reviews.map((review) => (
                <Fade key={review.id} collapse bottom>
                  <div className={classes.fade}>
                    <ReviewItem
                      avatar={review.avatar}
                      comment={review.comment}
                    />
                  </div>
                </Fade>
              ))}
            </Grid>

            <Grid
              item
              style={{
                margin: '16px 0',
                width: '350px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <Fade collapse bottom>
                <Pagination
                  count={10}
                  color='secondary'
                  classes={{
                    ul: classes.ul,
                  }}
                />
              </Fade>
            </Grid>
            <Grid item>
              <Fade collapse bottom>
                <Formreview />
              </Fade>
            </Grid>
          </TransitionGroup>
        </Grid>
      </div>
    </div>
  );
};

export default ReviewsPage;
