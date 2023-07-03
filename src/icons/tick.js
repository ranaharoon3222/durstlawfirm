import React from 'react';

const Tick = ({ fill = 'red' }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`max-w-[35px] min-w-[35px]    w-full `}
    >
      <g id='SVGRepo_bgCarrier' strokeWidth={0} />
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <g id='SVGRepo_iconCarrier'>
        <path
          d='M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z'
          stroke='#292D32'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='stroke-primary'
        />
        <path
          d='M7.75 12L10.58 14.83L16.25 9.17004'
          stroke='#292D32'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='stroke-primary'
        />
      </g>
    </svg>
  );
};

export default Tick;
