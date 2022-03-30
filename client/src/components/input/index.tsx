import React, { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react';

import './input.scss';

type AdditionalInputProps = {
  errorMessage: string;
}

type InputProps =
  AdditionalInputProps &
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
const Input = forwardRef<HTMLInputElement, InputProps>(({
  name,
  placeholder,
  errorMessage,
  ...props
}, ref) => {
  return (
    <div className='input__container'>
      <label htmlFor={name} >
        <p>{placeholder}</p>
        <input
          className='input__field'
          type="text"
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
        { errorMessage ? (
          <span className='input__error'>{ errorMessage }</span>
        ) : null }
      </label>
    </div>
  )
})

export default Input;