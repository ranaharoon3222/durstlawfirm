import React from 'react';

const Faq = ({ title, children }) => {
  return (
    <div className='my-5 transition-all hs-accordion hs-accordion-active:bg-gray-100 rounded-xl '>
      <button className='inline-flex items-center justify-between w-full p-5 font-semibold text-left text-gray-800 transition bg-gray-100 rounded-md hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:pb-0 group gap-x-3 md:text-lg hover:text-gray-500 '>
        <div>{title} </div>
        <svg
          className='block w-4 h-4 text-gray-600 hs-accordion-active:hidden group-hover:text-gray-500 dark:text-gray-400'
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
          className='hidden w-4 h-4 text-gray-600 hs-accordion-active:block group-hover:text-gray-500 dark:text-gray-400'
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
      <div className='hidden w-full px-5 pb-5 overflow-hidden transition-all hs-accordion-content'>
        {children}
      </div>
    </div>
  );
};

export default Faq;
