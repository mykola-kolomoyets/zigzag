import React, { ChangeEvent, FormEvent, useEffect, useState, VFC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AuthService from '../../api/services/auth';

import AppContext from '../../store/context/app';

import Button from '../../components/button';
import Input from '../../components/input';

import Logo from '../../components/logo';

import './login.scss';
import SummaryContext from '../../store/context/summary';

const Login: VFC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [loginError, setLoginError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const { data: { isLoading }, setData: setAppData } = AppContext.useContext();
  const { setData: setSummaryData } = SummaryContext.useContext();

  const navigate = useNavigate();

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

    if (!login) return setLoginError('Enter email or nickname');
    if (!password) return setPasswordError('Enter password');

    setAppData({ isLoading: true });

    AuthService.login({
      email: login,
      password: password
    })
    .then(res => {
      const { token, user } = res.data;

      setAppData({ user, token });

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
        title: "Something went wrong!",
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

        <h2 className='login__title'>Hello Again!</h2>

        <section className='login__register'>
          <span>Not registered?&nbsp;</span>
          <Link className='login__register--link' to='/register'>Register</Link>
        </section>

        <form onSubmit={onSubmit} className='login__form'>
          <section className='login__inputs'>
            <Input
              name='email'
              placeholder='Enter login or email'
              value={login}
              onChange={onLoginChange}
              errorMessage={loginError}
            />
            <Input
              name='password'
              placeholder='Enter password'
              value={password}
              onChange={onPasswordChange}
              errorMessage={passwordError}
            />
          </section>

          <section>
            <Button disabled={isLoading}>
              Login
            </Button>
          </section>

        </form>

      </section>
    </section>
  )
};

export default Login;