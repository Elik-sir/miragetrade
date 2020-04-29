import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Avatar from '@material-ui/core/Avatar';
import { useStyles } from './styles';
const ReviewItem = ({ photoURL, comment, displayName, value, createdAt }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapperItem}>
      <div className={classes.wrapperHeaderItem}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src={photoURL} />
          <div style={{ marginLeft: '10px' }}>
            <span>{displayName}</span>
          </div>
        </div>
        <div>
          <Rating
            name='raiting'
            value={value}
            readOnly
            classes={{ iconEmpty: classes.iconEmpty }}
          />
        </div>
      </div>
      <div className={classes.wrapperComment}>
        <p>{comment}</p>
      </div>
      <div className={classes.wrapperDate}>
        <span>{createdAt}</span>
      </div>
    </div>
  );
};

export default ReviewItem;
