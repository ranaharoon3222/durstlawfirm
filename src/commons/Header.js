import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const menuLinks = [
    {
      name: 'Practice Areas',
      link: '/',
      sub: [
        {
          name: 'Litigation',
          link: '/commercial-litigation',
        },
        // {
        //   name: 'Transportation Accidents',
        //   link: '/transportation/',
        // },
        // {
        //   name: 'Personal Injury',
        //   link: '/personal-injury/',
        // },
        {
          name: 'Ohio Local Counsel Services',
          link: '/ohio-local-counsel-services',
        },
        {
          name: 'Appeals',
          link: '/appeals',
        },
      ],
    },
    {
      name: 'Team',
      link: '/team/',
      sub: [
        {
          name: 'Alex J Durst',
          link: '/team/alex-j-durst',
        },
        {
          name: 'Paul R. Kerridge',
          link: '/team/paul-kerridge',
        },
        {
          name: 'Edward A. Khatskin',
          link: '/team/edward-a-khatskin',
        },
      ],
    },
    {
      name: 'Results',
      link: '/results',
    },
    {
      name: 'Offices',
      link: '/offices',
    },
    {
      name: 'Careers ',
      link: '/careers',
    },
    // {
    //   name: 'Testimonials',
    //   link: '/testimonials/',
    // },
    {
      name: 'Blog',
      link: '/blog',
    },
  ];

  const router = useRouter();
  const currentRoute = router.asPath;

  const [open, setOpen] = useState('');
  const [btn, setBtn] = useState('');

  const handleItemClick = (e) => {
    if (open === 'hidden') {
      setOpen('');
    } else {
      setOpen('hidden');
      setBtn('');
    }
  };

  return (
    <header className='fixed top-0 left-0 z-50 flex flex-wrap w-full py-3 text-sm bg-white md:absolute md:justify-start md:flex-nowrap md:bg-transparent md:top-4 md:py-0'>
      <nav
        className='relative mx-auto wrapper md:flex md:items-center md:justify-between '
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
          <div className='md:hidden'>
            <button
              type='button'
              className='inline-flex items-center justify-center gap-2 p-2 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hs-collapse-toggle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 '
              data-hs-collapse='#navbar-collapse-with-animation'
              aria-controls='navbar-collapse-with-animation'
              aria-label='Toggle navigation'
            >
              <svg
                className='w-4 h-4 '
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
              {/* <svg
                className={`hidden w-4 h-4 hs-collapse-open:block ${open}`}
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
              </svg> */}
            </button>
          </div>
        </div>
        <div
          id='navbar-collapse-with-animation'
          className={`hidden overflow-hidden transition-all duration-300 hs-collapse basis-full grow md:block ${open}`}
        >
          <div className='flex flex-col mt-5 gap-y-4 gap-x-0 md:flex-row md:items-center md:justify-center md:gap-y-0 md:gap-x-2 md:mt-0 md:pl-7'>
            {menuLinks.map((item, i) => {
              return (
                <div key={item.link + i} className='md:px-4 first-of-type:pl-0'>
                  {item?.sub?.length ? (
                    <div className='  hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:[--trigger:hover] md:py-4'>
                      <div className='flex'>
                        <Link
                          href={item.link}
                          className={`flex items-center w-full md:text-[1vw]  text-[#000] hover:text-gray-400 font-medium  `}
                          onClick={handleItemClick}
                        >
                          {item.name}
                        </Link>
                        <div className='flex items-center justify-center w-8 md:w-auto '>
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
                        </div>
                      </div>

                      <div
                        className={`hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-54 hidden z-10 bg-white md:shadow-md  p-2  before:absolute top-full  before:-top-5 before:left-0 before:w-full before:h-5 ${open} border-t-[3px] border-primary`}
                      >
                        {item.sub.map((sub, i) => {
                          return (
                            <Link
                              key={item.link + i}
                              className={`flex items-center font-medium   gap-x-3.5 py-2 md:px-3 rounded-md md:text-[1vw]  text-black hover:bg-gray-100 ${
                                currentRoute == sub.link
                                  ? 'text-primary'
                                  : 'text-black'
                              } `}
                              href={sub.link}
                              onClick={handleItemClick}
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
                      className={`flex items-center w-full md:text-[1vw] font-medium  hover:text-gray-400 ${
                        currentRoute == item.link
                          ? 'text-primary'
                          : 'text-black'
                      }`}
                      onClick={handleItemClick}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              );
            })}

            <Link
              className='right-0 flex items-center mt-6 -translate-y-1/2 pm-btn gap-x-2 md:mt-0 md:absolute top-1/2 '
              href='tel:513-621-4999'
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
