import React from 'react';

const ArrowDown = ({ fill = 'red', className }) => {
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
      clipRule='evenodd'
      fillRule='evenodd'
      strokeLinejoin='round'
      strokeMiterlimit={2}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      className={`max-w-[30px] ${checkFIll()} ${className}  -rotate-90`}
    >
      <path d='M16.843 10.211A.75.75 0 0016.251 9H7.75a.75.75 0 00-.591 1.212l4.258 5.498a.746.746 0 001.183-.001l4.243-5.498z' />
    </svg>
  );
};

export default ArrowDown;
