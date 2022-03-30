import React, { VFC } from 'react'
import { Link } from 'react-router-dom';

import Logo from '../logo';

import LogoMini from './logo-mini.svg';

import './navbar.scss';

const Navigation: VFC = () => {
  return (
    <section className='navbar'>
      <div className="navbar__logo">
        <img src={LogoMini} alt="ZigZag" />
      </div>
      <nav className='navbar__links'>
        <Link className='navbar__link' to='/main'>Main</Link>
        <Link className='navbar__link' to='/profile'>Profile</Link>
        <Link className='navbar__link' to='/login'>Logout</Link>
      </nav>
    </section>
  );
};

export default Navigation;