import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { getData, getCountpage } from '../../firebase/firebase.utils';
import Reviews from '../../components/Reviews/Reviews';
import Grid from '@material-ui/core/Grid';
import Formreview from '../../components/FormReview/FormReview';
import Pagination from '@material-ui/lab/Pagination';
import { connect } from 'react-redux';
import {
  getReviews,
  getCountReviews,
  changeCurrentPage,
} from '../../redux/common/actions';

const ReviewsPage = ({
  getReviews,
  getCountReviews,
  countPages,
  page,
  changeCurrentPage,
}) => {
  const classes = useStyles();

  const handleChange = (event, value) => {
    changeCurrentPage(value);
    getReviews(getData(value));
  };
  useEffect(() => {
    getReviews(getData(page));
    getCountReviews(getCountpage());
  }, [getReviews, page, getCountReviews]);

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
            padding: '20px 0',
          }}
        >
          <Grid item xs={12} sm={10} md={8} lg={6} style={{ heigth: '100vh' }}>
            <Reviews />
          </Grid>
          <Grid
            item
            style={{
              margin: '16px 0',
              width: 'auto',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Pagination
              count={countPages}
              page={page}
              color='secondary'
              classes={{
                ul: classes.ul,
              }}
              onChange={handleChange}
            />
          </Grid>
          <Grid
            item
            style={{
              width: '550px',
              marginRight: 'auto',
              marginLeft: 'auto',
              postition: 'relative',
            }}
          >
            <Formreview />
          </Grid>
        </Grid>
        <div
          style={{
            width: 'auto',
            marginRight: 'auto',
            marginLeft: 'auto',
            postition: 'relative',
          }}
        ></div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  reviews: state.common.reviews,
  countPages: state.common.countPages,
  page: state.common.currentPage,
});
const mapDispatchToProps = (dispatch) => ({
  getReviews: (reviews) => dispatch(getReviews(reviews)),
  getCountReviews: (count) => dispatch(getCountReviews(count)),
  changeCurrentPage: (page) => dispatch(changeCurrentPage(page)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsPage);
