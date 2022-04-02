import React, { VFC } from 'react';
import { CSSTransition } from 'react-transition-group';

import Confetti from "react-confetti";

import SummaryContext, { initialSummaryState } from '../../store/context/summary';

import Button from '../button';

import FailIcon from './fail.svg';
import SuccessIcon from './success.svg';

import './summary.scss';

const Summary: VFC = () => {
  const { data: {
    isShow,
    isSuccess,
    title,
    subtitle
  }, setData: setSummaryData } = SummaryContext.useContext();

  const onClose = () => setSummaryData(initialSummaryState);

  return (
    <CSSTransition
      in={isShow}
      timeout={300}
      classNames='summary'
      mountOnEnter
      unmountOnExit
    >
      {state => (
        <div className="summary">
          <div className="summary__overlay"></div>
            <div className="summary__content">
              {isSuccess && (
                <Confetti
                  recycle
                  gravity={0.2}
                  run={true}
                  numberOfPieces={400}
                  colors={['#FFF000', '#0000FF']}
                />
              )}
              <div className="summary__status">
                <img src={isSuccess ? SuccessIcon : FailIcon} alt="status" />
              </div>
              <div className="summary__text">
                <h4 className="summary__title">{title}</h4>

                <p className="summary__subtitle">{subtitle}</p>
              </div>

              <div className="summary__footer">
                <Button view='primary' fullWidth onClick={onClose}>
                  Close
                </Button>
              </div>
            </div>
        </div>
      )}
    </CSSTransition>

  )
};

export default Summary;
