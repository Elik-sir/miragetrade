import React from 'react';
import { connect } from 'react-redux';
import { getData, addReview } from '../../firebase/firebase.utils';
import { getReviews, changeCurrentPage } from '../../redux/common/actions';
import Rating from '@material-ui/lab/Rating';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useStyles } from './styles';
//Форма отправки отзыва
const Formreview = ({ user, changeCurrentPage, getReviews }) => {
  const [value, setValue] = React.useState(2);
  const [comment, setComment] = React.useState('');
  const classes = useStyles();
  const handleChange = (e) => setComment(e.target.value);
  return user ? (
    <div className={classes.wrapperForm}>
      <div className={classes.wrapperAvatar}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src={user.photoURL} />
          <div style={{ marginLeft: '16px' }}>
            <span>{user.displayName}</span>
          </div>
        </div>
        <div className={classes.root}>
          <Rating
            name='hover-feedback'
            value={value}
            precision={0.5}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            classes={{ iconEmpty: classes.iconEmpty }}
          />
        </div>
      </div>
      <div style={{ margin: '16px 0', width: '100%' }}>
        <TextField
          id='outlined-multiline-static'
          label='Комментарий'
          multiline
          rows='4'
          variant='outlined'
          value={comment}
          className={classes.textField}
          onChange={handleChange}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '16px',
        }}
        onClick={async () => {
          await addReview('reviews', {
            value,
            comment,
            createdAt: new Date(),
            photoURL: user.photoURL,
            displayName: user.displayName,
            id: 0,
          });
          setComment('');
          await getReviews(getData(1));
          changeCurrentPage(1);
        }}
      >
        <Button variant='contained' color='secondary'>
          ОТПРАВИТЬ
        </Button>
      </div>
    </div>
  ) : (
    <h1>Авторизуйтесь, чтобы оставить отзыв</h1>
  );
};
const mapStateToProps = (state) => ({
  user: state.user.currentUser,
  reviews: state.common.reviews,
});
const mapDispatchToProps = (dispatch) => ({
  getReviews: (reviews) => dispatch(getReviews(reviews)),
  changeCurrentPage: (page) => dispatch(changeCurrentPage(page)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Formreview);
