import React from 'react';

import Button from '@/commons/Button';
import Box from '@/commons/Box';

const PreFooter = () => {
  return (
    <div className='my-10'>
      <div className='container'>
        <div className='grid items-center gap-10 md:grid-cols-2'>
          <div className='grid items-center gap-10 md:grid-cols-2 place-content-center'>
            <div>
              <Box
                title='“The Absolute Best”'
                name='- Gaby M'
                icon='/images/icons.png'
              >
                <p>
                  I hired Alex Durst to represent me in a truck accident case
                  that was very serious and traumatic. The truck company fought
                  the case hard and tried to blame ME for the accident. Durst
                  was not going to let that happen.
                </p>
                <p className='pt-5'>
                  In the end, I got a GREAT settlement. It's a huge relief...
                </p>
              </Box>
              <Box title='$1,000,000' icon='/images/icon2.png'>
                <p>Settlement</p>
                <p className='pt-5 '>
                  Personal injury case where landlord negligence led to a woman
                  and child being forced to jump from 3rd floor apartment
                  building during a fire.
                </p>
                <p className='pt-5 '>
                  The client ultimately recovered successfully.
                </p>
              </Box>
            </div>
            <div>
              <Box
                title='“Aggressive and tough. Proven winner.”'
                name='- Anne'
                icon='/images/icons.png'
              >
                <p>
                  Alex proved to be a very tough lawyer - he didn’t take the
                  easy, quick money, but rather took the time and went through
                  the necessary steps to really set the case up right.
                </p>
              </Box>
              <Box title='$480,000' icon='/images/icon2.png'>
                <p>Settlement</p>
                <p className='pt-5 '>
                  Personal injury settlement for mother and son who were injured
                  in a head-on car accident.
                </p>
              </Box>
            </div>
          </div>

          <div className=''>
            <div className=''>
              <h1 className='text-[2rem] md:text-[3vw] leading-[1.2em] mb-9 font-semibold'>
                Our reputation is built on a long track record of{' '}
                <span className='text-primary'>positive outcomes.</span>
              </h1>
            </div>
            <div className=''>
              <p>
                The attorneys at the Durst Law Firm work hard to ensure that
                their clients receive the representation they need to achieve
                the outcome that they deserve.
              </p>
              <p className='mt-5'>
                But don't just take our word for it. Hear it directly from our
                clients themselves.
              </p>
            </div>

            <div className='flex flex-wrap md:flex-nowrap mt-7'>
              <div className='mr-5'>
                <Button
                  variant='primary-bg'
                  text='More Testimonials'
                  className='inline-block w-auto px-5 mb-5 text-center '
                />
              </div>

              <Button
                variant='primary-bg'
                text='More Results'
                className='inline-block w-auto px-5 text-center'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
