import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles({
  iconEmpty: { color: '#666363' },
});
const ReviewItem = ({ photoURL, comment, displayName, value, createdAt }) => {
  const classes = useStyles();
  return (
    <div
      style={{
        width: '550px',
        border: '2px solid #666363',
        borderRadius: '6px',
        padding: '16px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
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
      <div
        style={{
          textAlign: 'left',
          marginTop: '8px',
          width: '70%',
          marginBottom: '0',
          wordWrap: 'break-word',
        }}
      >
        <p>{comment}</p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginRight: '5px',
          color: '#666363',
        }}
      >
        <span>{createdAt}</span>
      </div>
    </div>
  );
};

export default ReviewItem;
