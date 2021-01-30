import React from 'react';

import './style.scss';

const Loader = ({ className = '' }) => (
  <div className='loading'>
    <div className={`spinner flex fac fjc ${className}`}>
      <div className='bounce1' />
      <div className='bounce2' />
      <div className='bounce3' />
    </div>
  </div>
);

export default Loader;