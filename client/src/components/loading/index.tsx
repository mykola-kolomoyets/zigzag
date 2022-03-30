import React, { FC  } from 'react'
import AppContext from '../../store/context/app';

import Transition from 'react-transition-group/Transition';
import { CSSTransition, SwitchTransition } from 'react-transition-group';


import Logo from '../logo';

import './loading.scss';

const duration = 300;

type LoadingProps = {
  isLoading?: boolean;
}
const Loading: FC<LoadingProps> = ({ isLoading }) => {
  const { data: { isLoading: isAppLoading } } = AppContext.useContext();

  // if (!isLoading && !isAppLoading) return null;

  // if (isLoading || isAppLoading) {
    return (
      <CSSTransition
      in={isLoading || isAppLoading}
      timeout={duration}
      classNames='loading'
      mountOnEnter
      unmountOnExit
      >
          {state => (
            <div className="loading">
              <div className="loading__overlay">
                <Logo />
              </div>
            </div>
          )}
      </CSSTransition>
    )
  // }
};

export default Loading;