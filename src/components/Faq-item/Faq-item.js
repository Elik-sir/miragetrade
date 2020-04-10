import React from 'react';
import { ArrowRightAlt } from '@material-ui/icons';
const FaqItem = ({ quastion }) => (
  <div
    style={{
      display: 'flex',
      width: '610px',
      justifyContent: 'space-between',
      border: '1px solid white',
      borderRadius: '6px',
      padding: '16px',
      alignItems: 'center',
    }}
  >
    <div className='quastion' style={{ width: '70%', textAlign: 'left' }}>
      {quastion}
    </div>
    <div style={{ width: '5%', cursor: 'pointer' }}>
      <ArrowRightAlt />
    </div>
  </div>
);
export default FaqItem;
