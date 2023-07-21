import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const menus = [
    {
      title: 'Quick Links',
      links: [
        {
          name: 'Transportation Accidents',
          link: '#',
        },
        {
          name: 'Personal Injury',
          link: '#',
        },
        {
          name: 'Commercial Litigation',
          link: '#',
        },
        {
          name: 'Ohio Local Counsel',
          link: '#',
        },
      ],
    },
    {
      title: 'Company Links',
      links: [
        {
          name: 'Attorneys',
          link: '#',
        },
        {
          name: 'Contact',
          link: '#',
        },
        {
          name: 'Appeals',
          link: '#',
        },
        {
          name: 'Blog',
          link: '#',
        },
      ],
    },
  ];
  return (
    <>
      <footer className='text-white bg-secondry'>
        <div className='max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24'>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
            <div>
              <div className='flex justify-center sm:justify-start'>
                <img src='./images/footer-logo.svg' className='max-w-[190px]' />
              </div>
              <div className='text-left'>
                <ul className='mt-3 space-y-4 text-sm'>
                  <li>
                    <a
                      className='flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end'
                      href='/'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-8 h-8 text-white shrink-0'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth='2'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                        />
                      </svg>

                      <span className='flex-1 ml-3 text-lg not-italic'>
                        office@durstlawfirm.com
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      className='flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end'
                      href='/'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-8 h-8 text-white shrink-0'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth='2'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                        />
                      </svg>

                      <span className='flex-1 ml-3 text-lg not-italic'>
                        (513) 621-4999
                      </span>
                    </a>
                  </li>

                  <li className='flex items-center justify-center gap-1.5'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-8 h-8 text-white shrink-0'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>

                    <address className='flex-1 ml-3 text-lg not-italic '>
                      600 Vine St., Suite 1920 Cincinnati, OH 45202
                    </address>
                  </li>
                </ul>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-8 md:grid-cols-2 '>
              {menus.map((item) => (
                <div className='text-left ' key={item.title}>
                  <h2 className='text-xl font-medium text-white'>
                    {item.title}
                  </h2>

                  <ul className='mt-8 space-y-4 text-sm'>
                    {item.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          className='pb-1 text-lg transition border-b hover:text-primary hover:border-primary'
                          href={link.link}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div>
              <h2 className='text-xl font-medium text-white'>
                Legal Disclaimer
              </h2>

              <p className='text-sm leading-6 mt-9'>
                The choice of a lawyer is an important decision and should not
                be based solely upon advertisements. The information you obtain
                from this site is not, nor is it intended to be, legal advice.
                We invite you to contact us. However, we cannot and do not
                represent you until our client intake process is completed.
                Please do not send us confidential information until such time
                as an attorney-client relationship has been established.
              </p>
            </div>
          </div>

          <div className='pt-6 mt-12 border-t border-gray-100'>
            <div className='text-center sm:flex sm:justify-between sm:text-left'>
              <p className='text-sm '>
                <span className='block sm:inline'>Site By </span>

                <a className='inline-block underline transition ' href='/'>
                  Legal Back Office
                </a>
              </p>

              <p className='mt-4 text-sm sm:order-first sm:mt-0'>
                &copy; The Durst Law Firm 2023 – All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;