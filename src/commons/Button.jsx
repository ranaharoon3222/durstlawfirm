import React from 'react';
import Link from 'next/link';

const Button = ({
  variant = 'primary-btn',
  link = '#',
  text,
  children,
  className,
  color = 'red',
}) => {
  const checkVariant =
    variant === 'primary' ? 'primary-btn' : 'primary-btn-outline';

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
      className={`group ${checkVariant} ${checkColor()} ${className} `}
    >
      {children}
      <span> {text} </span>
    </Link>
  );
};

export default Button;
