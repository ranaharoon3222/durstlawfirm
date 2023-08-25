import React from 'react';
import Link from 'next/link';

const Button = ({
  variant = 'primary-btn',
  link = 'tel:513-621-4999',
  text,
  children,
  className,
  color = 'red',
}) => {
  const checkVariant = () => {
    if (variant === 'primary') {
      return 'primary-btn';
    } else if (variant === 'primary-bg') {
      return 'primary-btn-bg';
    } else {
      return 'primary-btn-outline';
    }
  };

  const checkColor = () => {
    if (color === 'black') {
      return 'border-secondry  text-secondry hover:bg-secondry hover:text-white';
    } else if (color === 'red') {
      return 'border-primary  text-primary hover:bg-primary hover:text-white';
    } else {
      return '';
    }
  };

  return (
    <Link
      href={link}
      className={`group h-[57px] flex items-center justify-center ${checkVariant()} ${checkColor()} ${className} `}
    >
      {children}
      <span> {text} </span>
    </Link>
  );
};

export default Button;
