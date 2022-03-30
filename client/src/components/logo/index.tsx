import React, { VFC } from 'react'

import ZigZagLogo from './logo.jpg';

import './logo.scss';

const Logo: VFC = () => (
  <div className='logo__container'>
    <img src={ZigZagLogo} alt="ZigZag game logo" />
  </div>
);

export default Logo;