import React from 'react';

const Phone = ({ fill = 'red', className }) => {
  const checkFIll = () => {
    if (fill === 'red') {
      return 'group-hover:fill-white fill-primary';
    } else if (fill === 'black') {
      return 'group-hover:fill-white fill-black';
    } else {
      return 'group-hover:fill-white fill-white';
    }
  };

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      className={` ${className} ${checkFIll()}`}
    >
      <path d='M20 22.621l-3.521-6.795a618.8 618.8 0 01-2.064 1.011c-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026L8.396 0 6.29 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z' />
    </svg>
  );
};

export default Phone;
