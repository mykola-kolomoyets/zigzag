import React, { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from 'react';

import './button.scss';

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  onClick,
  ...props
}, ref) => {
  return (
    <button
      className='button'
      onClick={onClick}
      ref={ref}
      {...props}
    >
      { children }
    </button>
  )
});

export default Button;