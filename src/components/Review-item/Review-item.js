import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Avatar from '@material-ui/core/Avatar';
const ReviewItem = ({ avatar, comment }) => (
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
        <Avatar src={avatar} />
        <div style={{ marginLeft: '10px' }}>
          {' '}
          <span>Имя</span>
        </div>
      </div>
      <div>
        {' '}
        <Rating name='raiting' value={4} readOnly />
      </div>
    </div>
    <p style={{ textAlign: 'left', marginTop: '8px' }}>{comment}</p>
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        marginRight: '5px',
        color: '#666363',
      }}
    >
      <span>01.01.2020</span>
    </div>
  </div>
);

export default ReviewItem;
