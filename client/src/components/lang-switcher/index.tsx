import i18next from 'i18next';
import React, { useEffect, useState, FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next';
import LangService from '../../api/services/lang';

import AppContext from '../../store/context/app';

import Button from '../button';

import './lang-switcher.scss';

const menuItems = [
  {
    label: '🇺🇦',
    value: 'uk'
  },
  {
    label: '🇬🇧',
    value: 'en'
  }
];

type LanguageSwitcherProps = {
  sendToServer?: boolean,
  onChangeCallback?: (lang: string) => void;
};

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ sendToServer, onChangeCallback }) => {
  const { data: { user: { id }, language }, setData: setAppData } = AppContext.useContext();

  const { t, i18n } = useTranslation();

  const onLanguageChange = useCallback(() => (lang: string) => {
    if (onChangeCallback) onChangeCallback(lang);

    i18n.changeLanguage(lang);

    setAppData({ language: lang });

    if (sendToServer) {
      LangService.updateLang(id! || localStorage.getItem('userId')!, lang)
        .then(res => {
          setAppData({ language: res.data.language || 'en' });
        });
    }
  }, [id])();

  const getLanguage = () => i18next.language || window.localStorage.i18nextLng;

  useEffect(() => {
    const lang = getLanguage();
    const menuItem = menuItems.find(el => el.value === lang) || menuItems[1];

    setAppData({ language: menuItem.value });
  }, [language]);

  return (
    <section className='lang'>
      <h5 className='lang__title'>{t('lang.title')}</h5>
      { menuItems.map(item => (
        <Button key={item.value} isActive={item.value === language} view='ghost' type='button' onClick={() => onLanguageChange(item.value)}>
          {item.label}
        </Button>
      )) }
    </section>
  )
};

export default LanguageSwitcher;