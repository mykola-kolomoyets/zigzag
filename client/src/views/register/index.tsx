import React, { ChangeEvent, FormEvent, useRef, useState, VFC } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import AuthService from '../../api/services/auth';

import AppContext from '../../store/context/app';

import Input from './../../components/input';
import Button from './../../components/button';
import Logo from '../../components/logo';

import './register.scss';

const Register: VFC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const { data: { isLoading }, setData: setAppData } = AppContext.useContext();

  const navigate = useNavigate();

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

    if (!name) return setNameError('Enter your nickname');
    if (!email) return setEmailError('Enter your email');
    if (!password) return setPasswordError('Enter your password');

    setAppData({ isLoading: true });

    AuthService.register({
      name: name!,
      email: email!,
      password: password!
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

        <h2 className='register__title'>Register</h2>

        <section className='register__login'>
            Not registered?&nbsp;
            <Link className='register__login--link' to='/login'>Login</Link>
        </section>

        <form onSubmit={onSubmit} className='register__form'>
          <section className='register__inputs'>
            <Input
              name='name'
              placeholder='Enter name'
              value={name}
              onChange={onNameChange}
              errorMessage={nameError}
            />

            <Input
              name='email'
              placeholder='Enter email'
              value={email}
              onChange={onEmailChange}
              errorMessage={emailError}
            />

            <Input
              name='password'
              placeholder='Enter password'
              value={password}
              onChange={onPasswordChange}
              errorMessage={passwordError}
            />
          </section>

          <Button disabled={isLoading}>
            Register
          </Button>
        </form>

      </section>
    </section>
  )
};

export default Register;
