import { memo } from "react";
import { Navigate } from "react-router-dom";
import AppContext from './../store/context/app';

const Auth = ({ children }: any) => {
  const { data: { user: { id }, token } } = AppContext.useContext();

  const userId = id || localStorage.getItem('userId');
  const authToken = token || localStorage.getItem('AuthToken');

  if (!userId && !authToken) return <Navigate replace to='/login'/>;

  return children;
};

export default memo(Auth);