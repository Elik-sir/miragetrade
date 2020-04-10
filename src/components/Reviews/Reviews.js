import React from 'react';
import { connect } from 'react-redux';
import { useStyles } from './styles';
import ReviewItem from '../Review-item/Review-item';

import { format } from 'date-fns';
import Fade from 'react-reveal/Fade';
import TransitionGroup from 'react-transition-group/TransitionGroup';
const Reviews = ({ reviews }) => {
  const classes = useStyles();

  return (
    <div className={classes.Reviews}>
      <TransitionGroup {...{ appear: true, enter: true, exit: true }}>
        {reviews.map((review, id) => (
          <Fade key={review.id} collapse bottom>
            <div className={classes.fade}>
              <ReviewItem
                key={id}
                photoURL={review.photoURL}
                comment={review.comment}
                displayName={review.displayName}
                value={review.value}
                createdAt={format(
                  new Date(review.createdAt.seconds * 1000),
                  'dd.MM.yyyy',
                )}
              />
            </div>
          </Fade>
        ))}
      </TransitionGroup>
    </div>
  );
};
const mapStateToProps = (state) => ({
  reviews: state.common.reviews,
});

export default connect(mapStateToProps)(Reviews);
