import React from 'react';
import Picture from './picture';
import Directory from '../../components/directory/directory';

const HomePage = () => (
  <div className='HomePage'>
    <Picture />
    <h1 style={{ color: 'red', marginBottom: '100px' }}>ПОЧЕМУ ИМЕННО МЫ ?</h1>
    <Directory />
  </div>
);

export default HomePage;
