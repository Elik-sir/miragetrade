import React from 'react';
import { connect } from 'react-redux';

import Rating from '@material-ui/lab/Rating';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addReview, getData } from '../../firebase/firebase.utils';
import { getReviews } from '../../redux/common/actions';
import { useStyles } from './styles';

const Formreview = ({ user }) => {
  const [value, setValue] = React.useState(2);
  const [comment, setComment] = React.useState('');
  const classes = useStyles();
  const handleChange = (e) => setComment(e.target.value);
  return (
    user && (
      <div
        style={{
          width: '550px',
          border: '1px solid white',
          borderRadius: '6px',
          padding: '16px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
            classes={{
              root: classes.textField,
            }}
            onChange={handleChange}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '16px',
          }}
          onClick={() => {
            addReview('reviews', {
              value,
              comment,
              createdAt: new Date(),
              photoURL: user.photoURL,
              displayName: user.displayName,
              id: 0,
            });
            getReviews(getData(1));
            setComment('');
          }}
        >
          <Button variant='contained' color='secondary'>
            ОТПРАВИТЬ
          </Button>
        </div>
      </div>
    )
  );
};
const mapStateToProps = (store) => ({
  user: store.user.currentUser,
  reviews: store.common.reviews,
});
export default connect(mapStateToProps)(Formreview);
