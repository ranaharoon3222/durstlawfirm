import React from 'react';

const Faq = ({ title, children }) => {
  return (
    <div className='hs-accordion transition-all my-5 hs-accordion-active:bg-gray-100 rounded-xl  '>
      <button className='hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:pb-0 bg-gray-100 p-5 rounded-md group inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 '>
        {title}
        <svg
          className='hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400'
          width={16}
          height={16}
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
          />
        </svg>
        <svg
          className='hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400'
          width={16}
          height={16}
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
          />
        </svg>
      </button>
      <div className='hs-accordion-content pb-5 px-5 w-full transition-all overflow-hidden   hidden'>
        {children}
      </div>
    </div>
  );
};

export default Faq;
