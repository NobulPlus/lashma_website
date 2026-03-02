import React from 'react';
import { cn } from '../../../utils/cn';

const cardVariants = {
  default: 'bg-white border border-gray-200',
  elevated: 'bg-white shadow-lg',
  outlined: 'bg-white border-2 border-gray-300',
};

const cardPadding = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

const Card = ({
  variant = 'default',
  padding = 'md',
  children,
  hover = false,
  className,
  ...props
}) => {
  const classes = cn(
    'rounded-lg transition-all duration-300',
    cardVariants[variant],
    cardPadding[padding],
    hover && 'hover:shadow-xl hover:scale-[1.02] cursor-pointer',
    className
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;