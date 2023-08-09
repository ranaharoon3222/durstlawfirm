import React from 'react';
import Button from '@/commons/Button';
import BigButton from '@/commons/BigButton';
import ArrowDown from '@/icons/arrow-down';
import Phone from '@/icons/phone';
import Link from 'next/link';
import PlainArrow from '@/icons/plain-arrow';

const InjuryBanner = () => {
  const features = [
    {
      title: 'Amputations',
    },
    {
      title: 'Automobile Accident',
    },
    {
      title: 'Brain Injury',
    },
    {
      title: 'Parking Gate Injury',
    },
    {
      title: 'Distracted Driving Accident',
    },
    {
      title: 'Rideshare Accident',
      disabled: true,
    },
  ];

  const features2 = [
    {
      title: 'Dog Bite Injury',
      disabled: true,
    },
    {
      title: 'Gas Explosion Injury',
      disabled: true,
    },
    {
      title: 'Electrocution Injury',
      disabled: true,
    },
    {
      title: 'Paralysis',
      disabled: true,
    },
    {
      title: 'Premises Liability',
      disabled: true,
    },
    {
      title: 'Wrongful Death',
      disabled: true,
    },
  ];

  return (
    <section className='relative'>
      <div
        className='pt-32 text-center bg-center bg-cover md:pb-32 md:pt-40 md:text-left '
        style={{
          backgroundImage:
            'linear-gradient(64deg,#ffffff 31%,rgba(255,255,255,0.45) 80%),url(/images/inj.jpg)',
        }}
      >
        <div className='container'>
          <div className='grid gap-10 md:grid-cols-2'>
            <div className=''>
              <h4 className='italic font-semibold text-primary'>
                Cincinnati Ohio Personal Injury Lawyer
              </h4>
              <h1 className='text-[2rem] font-medium md:leading-[4.5vw]  md:text-[3.5vw] md:my-8'>
                Personal Injury Law
              </h1>
              <p className=''>
                Personal injury law refers to the legal remedies and defenses
                involved in civil lawsuits brought as a result of the negligence
                or wrongdoing of another person, company, government agency, or
                other entity.
              </p>

              <p className='mt-5'>
                If you are here because you or a family member have been injured
                in some kind of accident, call us as soon as possible. The
                sooner we speak with you, the better.
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
                  text='Call Us Today '
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
              <h2 className='font-semibold'>
                What kind of injury have you sustained?
              </h2>

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
                  {features2.map((item) => (
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

export default InjuryBanner;
