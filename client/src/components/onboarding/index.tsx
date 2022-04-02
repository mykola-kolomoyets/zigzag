import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { CSSTransition } from 'react-transition-group';

import Button from '../button';

import Tutorial from './onboarding.jpg';

import './onboarding.scss';

type OnboardingProps = {
  isShow: boolean;
  onClose: () => void;
}
const Onboarding: FC<OnboardingProps> = ({ isShow, onClose }) => {
  const { t } = useTranslation();
  return (
    <CSSTransition
      in={isShow}
      timeout={300}
      classNames='onboarding'
      mountOnEnter
      unmountOnExit
    >
      {state => (
        <div className="onboarding">
          <div className="onboarding__overlay"></div>
            <div className="onboarding__content">
              <div className="onboarding__text">
                <h4 className="onboarding__title">{t('pages.onboarding.title')}</h4>

                <p className="onboarding__subtitle">{t('pages.onboarding.subtitle')}</p>
              </div>

              <img src={Tutorial} alt="tutorial" />

              <div className="onboarding__footer">
                <Button view='primary' fullWidth onClick={onClose}>
                  {t('button.close')}
                </Button>
              </div>
            </div>
        </div>
      )}
    </CSSTransition>

  )
};

export default Onboarding;
