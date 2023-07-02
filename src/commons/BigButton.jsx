import React from 'react';
import Link from 'next/link';

const BigButton = ({
  variant = 'primary',
  link = '#',
  text,
  children,
  className,
  color = '',
}) => {
  const checkVariant = () => {
    if (variant === 'primary') {
      return 'big-btn';
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
      className={`group min-h-[60px]  items-center justify-center ${checkVariant()} ${checkColor()} ${className} `}
    >
      <span> {text} </span>
      {children}
    </Link>
  );
};

export default BigButton;
