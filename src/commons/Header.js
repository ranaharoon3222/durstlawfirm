import React from 'react';
import Link from 'next/link';

const Header = () => {
  const menuLinks = [
    {
      name: 'Practice Areas',
      link: '/',
      sub: [
        {
          name: 'Commercial Litigation',
          link: '/commercial-litigation/',
        },
        {
          name: 'Transportation Accidents',
          link: '/transportation/',
        },
        {
          name: 'Personal Injury',
          link: '/personal-injury/',
        },
        {
          name: 'Ohio Local Counsel Services',
          link: '/ohio-local-counsel-services/',
        },
        {
          name: 'Appeals',
          link: '/appeals/',
        },
      ],
    },
    {
      name: 'Team',
      link: '/team/',
      sub: [
        {
          name: 'Alex J Durst',
          link: '/alex-j-durst/',
        },
        {
          name: 'Logan J Durst',
          link: '/logan-f-kline/',
        },
      ],
    },
    {
      name: 'Results',
      link: '/results/',
    },
    {
      name: 'Testimonials',
      link: '/testimonials/',
    },
    {
      name: 'Blog',
      link: '/blog/',
    },
    {
      name: 'Contact',
      link: '/contact/',
    },
  ];

  return (
    <header className='flex bg-white flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full md:bg-transparent absolute top-4  left-0 text-sm py-3 sm:py-0'>
      <nav
        className='relative wrapper mx-auto  sm:flex sm:items-center sm:justify-between  '
        aria-label='Global'
      >
        <div className='flex items-center justify-between'>
          <Link
            className='flex-none text-xl font-semibold dark:text-white'
            href='/'
            aria-label='Brand'
          >
            <img
              className='w-full md:max-w-[190px] max-w-[130px] '
              src='https://durstlawfirm.com/wp-content/uploads/2022/06/durst-main.svg'
            />
          </Link>
          <div className='sm:hidden'>
            <button
              type='button'
              className='hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm '
              data-hs-collapse='#navbar-collapse-with-animation'
              aria-controls='navbar-collapse-with-animation'
              aria-label='Toggle navigation'
            >
              <svg
                className='hs-collapse-open:hidden w-4 h-4'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path
                  fillRule='evenodd'
                  d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
                />
              </svg>
              <svg
                className='hs-collapse-open:block hidden w-4 h-4'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
              </svg>
            </button>
          </div>
        </div>
        <div
          id='navbar-collapse-with-animation'
          className='hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block'
        >
          <div className='flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-center sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7'>
            {menuLinks.map((item, i) => {
              return (
                <div key={item.link + i} className='md:px-4 first-of-type:pl-0'>
                  {item?.sub?.length ? (
                    <div className='hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4'>
                      <Link
                        href={item.link}
                        className='flex items-center w-full text-base text-[#000] hover:text-gray-400 font-medium  '
                      >
                        {item.name}

                        <svg
                          className='ml-2 w-2.5 h-2.5 text-gray-600'
                          width='16'
                          height='16'
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                          ></path>
                        </svg>
                      </Link>

                      <div className='hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2  before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5'>
                        {item.sub.map((sub, i) => {
                          return (
                            <Link
                              key={item.link + i}
                              className='flex items-center  gap-x-3.5 py-2 md:px-3 rounded-md  text-black hover:bg-gray-100   '
                              href={sub.link}
                            >
                              {sub.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.link}
                      className='flex items-center text-base w-full text-black hover:text-gray-400 font-medium  '
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              );
            })}

            <Link
              className='pm-btn  flex items-center gap-x-2 mt-6 md:mt-0 md:absolute right-0 top-1/2  -translate-y-1/2  '
              href='#'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='fill-white'
              >
                <path d='M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z' />
              </svg>
              (513) 621-4999
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
