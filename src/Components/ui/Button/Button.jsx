import React from 'react';
import { cn } from '../../../utils/cn';

const buttonVariants = {
  primary: 'bg-orange-600 hover:bg-orange-700 text-white shadow-md hover:shadow-lg',
  secondary: 'bg-gray-600 hover:bg-gray-700 text-white shadow-md hover:shadow-lg',
  outline: 'border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent',
  ghost: 'text-orange-600 hover:bg-orange-50 bg-transparent',
};

const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  disabled = false,
  loading = false,
  icon,
  fullWidth = false,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const classes = cn(
    baseClasses,
    buttonVariants[variant],
    buttonSizes[size],
    fullWidth && 'w-full',
    className
  );

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {icon && !loading && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;