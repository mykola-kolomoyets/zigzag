import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import LogoMini from './logo-mini.svg';

import './navbar.scss';

const Navigation: FC = () => {
  const { t } = useTranslation();
  return (
    <section className='navbar'>
      <div className="navbar__logo">
        <img src={LogoMini} alt="ZigZag" />
      </div>
      <nav className='navbar__links'>
        <Link className='navbar__link' to='/main'>{t('menu.main.title')}</Link>
        <Link className='navbar__link' to='/profile'>{t('menu.profile.title')}</Link>
        <Link className='navbar__link' to='/login'>{t('menu.logout.title')}</Link>
      </nav>
    </section>
  );
};

export default Navigation;