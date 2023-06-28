import React from 'react';
import style from './practise.module.css';
import Button from '@/commons/Button';
import ArrowDown from '@/icons/arrow-down';
import Phone from '@/icons/phone';
const Practise = () => {
  return (
    <>
      <section className='relative'>
        <div className={`${style.backimg} pt-20`}>
          <div className='container'>
            <div className={style.parentbox}>
              <div className={style.innerText}>
                <h3>Cincinnati, Ohio Law Firm</h3>
                <h1>High Stakes Litigation. High Performance.</h1>
                <p>
                  The lawyers at The Durst Law Firm are devoted to the art and
                  craft of trial lawyering.
                </p>
                <p>
                  Corporate clients from all over the United States (and
                  attorneys in need of local counsel) entrust us with complex
                  commercial and employment matters that must be litigated or
                  arbitrated in Ohio. People who have suffered life-altering
                  injuries or lost a family member hire us in the most serious
                  of transportation accident, products liability and other
                  catastrophic injury matters – often newsworthy cases that most
                  firms are unequipped to handle.
                </p>
                <p>
                  We pursue every case relentlessly, using our battle-tested
                  skills to craft imaginative solutions in and out of the
                  courtroom. Few boutique litigation firms can match our record.
                </p>

                <div className='flex flex-wrap justify-center mt-10 md:justify-normal md:flex-nowrap '>
                  <Button
                    text='Practice Areas'
                    variant='outline'
                    color={'black'}
                    className='mb-4 md:mr-6 '
                  >
                    <ArrowDown fill='black' />
                  </Button>

                  <Button
                    text='Call Us Today'
                    className='mb-4 '
                    variant='outline'
                    color={'red'}
                  >
                    <Phone fill='red' />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.nullimg}></div>
        <div className='bt_divider'></div>
      </section>
    </>
  );
};

export default Practise;
