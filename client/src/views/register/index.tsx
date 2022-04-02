import React, { ChangeEvent, FormEvent, useState, VFC } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import AuthService from '../../api/services/auth';

import AppContext from '../../store/context/app';

import Input from './../../components/input';
import Button from './../../components/button';
import Logo from '../../components/logo';

import './register.scss';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../components/lang-switcher';

const Register: VFC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const { data: { isLoading, language }, setData: setAppData } = AppContext.useContext();

  const navigate = useNavigate();
  const { t } = useTranslation();

  const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setNameError('');
  }

  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailError('');
  }

  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordError('');
  }

  const onSubmit = (event: FormEvent) => {
    if (event) event.preventDefault();

    if (!name) return setNameError(t('pages.register.inputs.name.placeholder'));
    if (!email) return setEmailError(t('pages.register.inputs.email.placeholder'));
    if (!password) return setPasswordError(t('pages.register.inputs.password.placeholder'));

    setAppData({ isLoading: true });

    AuthService.register({
      name: name!,
      email: email!,
      password: password!,
      language
    })
      .then(res => {
        const { token, user } = res.data;

        setAppData({
          user,
          token
        });
      })
      .then(() => navigate('/login'))
      .catch(err => {
        console.log(err);

      })
      .finally(() => setAppData({ isLoading: false }));
  }
  return (
    <section className="register__container container">
      <section className="register__content">
        <Logo />

        <h2 className='register__title'>{t('pages.register.title')}</h2>

        <section className='register__login'>
          {t('pages.register.subtitle.text')}&nbsp;
          <Link className='register__login--link' to='/login'>{t('pages.register.subtitle.link')}</Link>
        </section>

        <form onSubmit={onSubmit} className='register__form'>
          <LanguageSwitcher />

          <section className='register__inputs'>
            <Input
              name='name'
              placeholder={t('pages.register.inputs.name.placeholder')}
              value={name}
              onChange={onNameChange}
              errorMessage={nameError}
            />

            <Input
              name='email'
              placeholder={t('pages.register.inputs.email.placeholder')}
              value={email}
              onChange={onEmailChange}
              errorMessage={emailError}
            />

            <Input
              name='password'
              placeholder={t('pages.register.inputs.password.placeholder')}
              value={password}
              onChange={onPasswordChange}
              errorMessage={passwordError}
            />
          </section>

          <Button view='primary' fullWidth disabled={isLoading}>
            {t('pages.register.inputs.submit')}
          </Button>
        </form>

      </section>
    </section>
  )
};

export default Register;
