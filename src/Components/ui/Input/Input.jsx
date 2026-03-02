import React, { forwardRef } from 'react';
import { cn } from '../../../utils/cn';

const Input = forwardRef(({
  type = 'text',
  label,
  placeholder,
  error,
  required = false,
  disabled = false,
  icon,
  className,
  ...props
}, ref) => {
  const inputClasses = cn(
    'w-full px-3 py-2 border rounded-lg transition-colors duration-200',
    'focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent',
    error 
      ? 'border-red-500 focus:ring-red-500' 
      : 'border-gray-300 hover:border-gray-400',
    disabled && 'bg-gray-100 cursor-not-allowed opacity-60',
    icon && 'pl-10',
    className
  );

  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-400">{icon}</span>
          </div>
        )}
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className={inputClasses}
          {...props}
        />
      </div>
      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;