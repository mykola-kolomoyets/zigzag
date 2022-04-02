import classnames from 'classnames';
import React, { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from 'react';

import './button.scss';

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  fullWidth?: boolean;
  view: 'primary' | 'secondary' | 'ghost',
  isActive?: boolean;
};
const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  onClick,
  fullWidth,
  isActive,
  ...props
}, ref) => {
  return (
    <button
      className={classnames('button', {
        'button__disabled': props.disabled,
        'button__inline': !fullWidth,
        'button__secondary': props.view === 'secondary',
        'button__ghost': props.view === 'ghost',
        'button__active': isActive
      })}
      onClick={onClick}
      ref={ref}
      {...props}
    >
      { children }
    </button>
  )
});

export default Button;