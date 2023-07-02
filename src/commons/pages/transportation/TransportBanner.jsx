import React from 'react';
import Button from '@/commons/Button';
import BigButton from '@/commons/BigButton';
import ArrowDown from '@/icons/arrow-down';
import Phone from '@/icons/phone';
import Link from 'next/link';
import PlainArrow from '@/icons/plain-arrow';

const TransportBanner = () => {
  const features = [
    {
      title: 'Trucking Accident',
    },
    {
      title: 'Automobile Accident',
    },
    {
      title: 'Texting While Driving',
    },
    {
      title: 'Drunk Driving Accident',
    },
    {
      title: 'Distracted Driving Accident',
    },
    {
      title: 'Rideshare Accident',
      disabled: true,
    },
  ];

  return (
    <section className='relative'>
      <div
        className='pt-32 pb-32 text-center bg-center bg-cover md:pt-40 md:text-left '
        style={{
          backgroundImage:
            'linear-gradient(64deg, #ffffff 31%, rgba(255, 255, 255, 0) 80% ),url(./images/herobg.jpg)',
        }}
      >
        <div className='container'>
          <div className='grid gap-10 md:grid-cols-2'>
            <div className=''>
              <h4 className='italic font-semibold text-primary'>
                Ohio Transportation Injury Lawyer
              </h4>
              <h1 className='text-[2rem] font-medium md:leading-[4.5vw]  md:text-[3.5vw] md:my-8'>
                Transportation Accidents
              </h1>
              <p className='text-base'>
                The attorneys at the Durst Law Firm have experience handling
                complex transportation accident cases. We have been chosen to
                represent victims of two of the largest transportation disasters
                in recent history:
              </p>

              <div className='mt-8'>
                <BigButton
                  variant='primary'
                  text='Amtrak train derailment crash in Mendon, Missouri'
                >
                  <PlainArrow />
                </BigButton>

                <BigButton
                  variant='primary'
                  text='Bus, FedEx truck, and two UPS truck Accident - Westmoreland County, PA'
                  className='mt-5'
                >
                  <PlainArrow />
                </BigButton>
              </div>

              <p className='mt-5'>
                If you or a family member has been injured in a transportation
                accident such as a trucking accident, train crash, plane crash,
                Uber accident or Lyft accident, let us help you. Call us as soon
                as possible. We prefer to get started immediately after the
                accident, before evidence is tampered with. We will come to you
                at your home or in the hospital.
              </p>

              <p className='mt-5'>
                We are available <span className='text-primary'>24/7 </span> .
                You can even call or text Alex on his personal cellphone at{' '}
                <a href='#' className='block italic font-semibold text-primary'>
                  (513) 620-4529.
                </a>
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
                What kind of accident have you been in?
              </h3>

              <div className='grid gap-8 md:grid-cols-2'>
                <div className='mt-5 md:mt-16'>
                  {features.map((item) => (
                    <BigButton
                      key={item.title}
                      variant='primary'
                      text={item.title}
                      className='mb-5 !w-full'
                    >
                      <PlainArrow />
                    </BigButton>
                  ))}
                </div>

                <div className='mt-5 md:mt-16'>
                  {features.map((item) => (
                    <BigButton
                      key={item.title}
                      variant='primary'
                      text={item.title}
                      className={`mb-5 !w-full ${
                        item.disabled && 'opacity-50 pointer-events-none'
                      }`}
                    >
                      <PlainArrow />
                    </BigButton>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=''></div>
      <div className='bt_divider'></div>
    </section>
  );
};

export default TransportBanner;
