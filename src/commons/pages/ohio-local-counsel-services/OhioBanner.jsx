import React from 'react';
import Button from '@/commons/Button';
import BigButton from '@/commons/BigButton';
import ArrowDown from '@/icons/arrow-down';
import Phone from '@/icons/phone';
import Paragraph from '@/commons/Paragraph';
import Img from '@/commons/Image';

const OhioBanner = () => {
  return (
    <section className='relative'>
      <div
        className='pt-32 text-center bg-center bg-cover md:pb-32 md:pt-40 md:text-left '
        style={{
          backgroundImage:
            'linear-gradient(64deg,#ffffff 31%,rgba(255,255,255,0.45) 80%),url(/images/localbg.jpg)',
        }}
      >
        <div className='container'>
          <div className='grid gap-10 md:grid-cols-2'>
            <div className=''>
              <h4 className='italic font-semibold text-primary'>
                Assisting Attorneys Nationwide with:
              </h4>
              <h1 className='text-[2rem] font-medium md:leading-[4.5vw]  md:text-[3.5vw] md:my-8'>
                Ohio Local Counsel Services
              </h1>
              <Paragraph>
                The Durst Law Firm frequently serves as local counsel in
                tribunals across the state of Ohio. We are the ideal Ohio local
                counsel for commercial litigation and other civil cases.
              </Paragraph>

              <Paragraph>
                If your client is faced with litigation or arbitration in Ohio,
                contact The Durst Law Firm to discuss working together as local
                counsel. References available upon request.
              </Paragraph>

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
              <Img
                src='/images/localimg.svg'
                className='max-w-[550px] mx-auto'
              />
            </div>
          </div>
        </div>
      </div>
      <div className=''></div>
      <div className='bt_divider gray'></div>
    </section>
  );
};

export default OhioBanner;
