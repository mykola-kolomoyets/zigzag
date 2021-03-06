import React, { ComponentProps } from 'react';
import classNames from 'classnames';

import './radio.scss';

export type RadioProps = {
  name?: string;
  items: { value: string | number; label: string }[];
  value?: string | number | null;
  label?: string;
  className?: string;
  inputProps?: ComponentProps<'input'>;
};

const Radio = ({
  items,
  label,
  inputProps,
  className,
  value
}: RadioProps) => {
  const classes = classNames('radio', className, {
  });

  const radioContainerClasses = (itemValue: string) => classNames('radio__container text', {
    // eslint-disable-next-line eqeqeq
    radio__container_active: value == itemValue,
    radio__container_disabled: inputProps?.disabled
  });

  return (
    <div className={classes}>
      {label && <label className="radio__label label">{label}</label>}
      <div className="radio__inputs-wrapper">
        {items.map(({ label: itemLabel, value: itemValue }, index) => (
          <label
            key={index}
            className={radioContainerClasses(itemValue.toString())}
          >
            {itemLabel}
            <input
              {...inputProps}
              className="radio__input"
              type="radio"
              // eslint-disable-next-line eqeqeq
              checked={value == itemValue}
              value={itemValue}
            />
            <span
              className={classNames('radio__checkmark', {
                radio__checkmark_disabled: inputProps?.disabled
              })}
            ></span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Radio;
