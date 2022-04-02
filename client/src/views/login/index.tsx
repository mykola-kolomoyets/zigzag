import React, { ChangeEvent, FormEvent, useEffect, useState, VFC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AuthService from '../../api/services/auth';

import AppContext from '../../store/context/app';

import Button from '../../components/button';
import Input from '../../components/input';

import Logo from '../../components/logo';

import './login.scss';
import SummaryContext from '../../store/context/summary';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../components/lang-switcher';
import StatsContext from '../../store/context/stats';

const Login: VFC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [loginError, setLoginError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const { data: { isLoading }, setData: setAppData } = AppContext.useContext();
  const { setData: setSummaryData } = SummaryContext.useContext();
  const { setData: setStatsData } = StatsContext.useContext();

  const navigate = useNavigate();
  const { t } = useTranslation();

  const onLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
    setLoginError('');
  }
  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordError('');
  }

  const onSubmit = (event: FormEvent) => {
    if (event) event.preventDefault();

    if (!login) return setLoginError(t('pages.login.inputs.login.placeholder'));
    if (!password) return setPasswordError(t('pages.login.inputs.password.placeholder'));

    setAppData({ isLoading: true });

    AuthService.login({
      email: login,
      password: password
    })
      .then(res => {
        const { token, user, stats } = res.data;

        setAppData({ user, token });
          setStatsData({ ...stats });

        localStorage.setItem('userId', user._id!);
        localStorage.setItem('AuthToken', token);
      })
      .then(() => navigate('/main'))
      .catch(err => {
        console.log(err.response.message);

        setPassword('');
        setLogin('');

        setSummaryData({
          isShow: true,
          isSuccess: false,
          title: t('popup.fail.title') as string,
          subtitle: err.response.data.message
        });
      })
      .finally(() => setAppData({ isLoading: false }));
  }

  useEffect(() => {
    localStorage.removeItem('userId');
    localStorage.removeItem('AuthToken');
  }, []);

  return (
    <section className="login__container container">
      <section className="login__content">
        <Logo />

        <h2 className='login__title'>{t('pages.login.title')}</h2>

        <section className='login__register'>
          <span>{t('pages.login.subtitle.text')}&nbsp;</span>
          <Link className='login__register--link' to='/register'>{t('pages.login.subtitle.link')}</Link>
        </section>


        <form onSubmit={onSubmit} className='login__form'>
          <LanguageSwitcher />

          <section className='login__inputs'>
            <Input
              name='email'
              placeholder={t('pages.login.inputs.login.placeholder')}
              value={login}
              onChange={onLoginChange}
              errorMessage={loginError}
            />
            <Input
              name='password'
              placeholder={t('pages.login.inputs.password.placeholder')}
              value={password}
              onChange={onPasswordChange}
              errorMessage={passwordError}
            />
          </section>

          <section>
            <Button view='primary' fullWidth type='submit' disabled={isLoading}>
              {t('pages.login.inputs.submit')}
            </Button>
          </section>

        </form>

      </section>
    </section>
  )
};

export default Login;