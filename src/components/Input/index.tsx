import React, { useRef, useState } from 'react';
import { ErrorMessage } from '../ErrorMessage';

type InputProps = {
  wrapClassName?: string;
  className?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  errors?: string[];
  label?: string;
  suffix?: React.ReactNode;
  shape?: 'rounded' | 'circle';
  variant?: 'outline' | 'fill';
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({
  wrapClassName,
  className,
  name,
  placeholder,
  type = 'text',
  errors,
  label,
  suffix,
  shape,
  variant,
  defaultValue,
  onChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(defaultValue || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  const wrapClasses = [
    ' rounded-full shadow-sm w-full',
    wrapClassName,
  ].join(' ');
  const inputClasses = [
    variant === 'outline' ? 'border border-gray-300' : '',
    variant === 'fill' ? 'bg-white' : '',
    shape === 'rounded' ? 'rounded-md' : '',
    shape === 'circle' ? 'rounded-full' : '',
    className,
  ].join(' ');

  return (
    <div className={wrapClasses}>
      {label && <label htmlFor={name}>{label}</label>}
      <div className='relative rounded-full shadow-sm w-full'>
        <input
          ref={inputRef}
          id={name}
          name={name}
          className={`focus:outline-none ${inputClasses}`}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={handleChange}
        />
        {suffix && (
          <span className='absolute inset-y-0 right-7 flex items-center pointer-events-none'>
            {suffix}
          </span>
        )}
      </div>
      {errors && errors.length > 0 && (
        <ErrorMessage errors={errors} className='mt-2' />
      )}
    </div>
  );
};

export default Input;
