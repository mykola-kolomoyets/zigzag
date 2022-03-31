import React, { Fragment, lazy, Suspense, useEffect } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Loading from './components/loading';

import AppContext from './store/context/app';
import Auth from './views/auth';

const Register = lazy(() => import('./views/register'));
const Profile = lazy(() => import('./views/profile'));
const Login = lazy(() => import('./views/login'));
const Main = lazy(() => import('./views/main'));

const App = () => {
  const { data: { token } } = AppContext.useContext();

  useEffect(() => {
    if (token) localStorage.setItem('AuthToken', token);
  }, [token]);

  window.addEventListener('beforeunload', (event) => {
    localStorage.removeItem('AuthToken');
  });

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading isLoading />}>
        <Routes>
          <Route path='/main' element={
            <Auth>
              <Main />
            </Auth>
          } />

          <Route path='/profile' element={
            <Auth>
              <Profile />
            </Auth>
          } />

          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />

          <Route path='/' element={<Navigate replace to={localStorage.getItem('AuthToken') ? '/login' : '/main'} />} />

          <Route path='*' element={<h1>Page not Found!!</h1>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
