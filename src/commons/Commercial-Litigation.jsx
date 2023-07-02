import React from 'react';
import Button from './Button';
import ArrowDown from '@/icons/arrow-down';
import Phone from '@/icons/phone';
import Link from 'next/link';

const CommercialLitigation = () => {
  const features = [
    {
      title: 'Partnership and Joint Venture Dispute Litigation',
    },
    {
      title: 'Financial Services Litigation',
    },
    {
      title: 'E-Commerce Litigation',
    },
    {
      title: 'Noncompete Litigation',
    },
    {
      title: 'Trade Secret Litigation',
    },
    {
      title: 'Uniform Commercial Code (UCC) Litigation',
    },
    {
      title: 'Employment Defense Litigation',
      href: '#',
    },
    {
      title: 'Real Estate Litigation',
    },
    {
      title: 'Corporate Governance Litigation',
    },
    {
      title: 'Appeals',
      href: '#',
    },
  ];

  return (
    <section className='relative'>
      <div
        className='pt-32 pb-32 bg-center bg-cover md:pt-40 '
        style={{
          backgroundImage:
            'linear-gradient(64deg,#fff 31%,hsla(0,0%,100%,.55) 80%),url(./images/Commercialbg.jpg) ',
        }}
      >
        <div className='container'>
          <div className='grid gap-10 md:grid-cols-2'>
            <div className=''>
              <h4 className='italic font-semibold text-primary'>
                Ohio Commercial Litigaton Lawyer
              </h4>
              <h1 className='text-[2rem] font-medium md:leading-[4.5vw]  md:text-[3.5vw] md:my-8'>
                Commercial Litigation
              </h1>
              <p>
                We litigate complex commercial disputes in state courts, federal
                courts, and arbitral fora in Ohio.
              </p>
              <p className='pt-4'>
                Our attorneys routinely represent corporate clients in
                high-dollar-value breach of contract actions, closely-held
                business disputes and business torts.
              </p>

              <div className='flex flex-wrap justify-center mt-10 md:justify-normal md:flex-nowrap '>
                <Button
                  text='Call Us '
                  className='mb-4 md:mr-6 '
                  variant='outline'
                  color={'red'}
                >
                  <Phone fill='red' />
                </Button>
                <Button
                  text='Send A Message'
                  variant='outline'
                  color={'black'}
                  className='mb-4 '
                >
                  <ArrowDown fill='black' />
                </Button>
              </div>
            </div>

            <div>
              <h3 className='font-semibold'>
                Additional areas of focus include:
              </h3>
              <ul className='mt-4 shadow-md md:pl-16 md:py-14 bg-white/70 listing p-7'>
                {features.map((item) => (
                  <li
                    key={item.title}
                    className={`md:mb-5 mb-1 md:text-xl font-semibold font-lato ${
                      item.href
                        ? 'text-primary underline inline-block italic'
                        : ''
                    }`}
                  >
                    <Link href={item.href ? item.href : '#'}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=''></div>
      <div className='bt_divider'></div>
    </section>
  );
};

export default CommercialLitigation;
