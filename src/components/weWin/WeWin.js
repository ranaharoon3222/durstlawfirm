import React from 'react';
import style from './win.module.css';
const WeWin = () => {
  return (
    <>
      <div className={style.wewinsec}>
        <div className='wrapper'>
          <div className='pure-g'>
            <div className='pure-u-1 pure-u-md-12-24'>
              <div className={style.wintext}>
                <h1>Why We Win</h1>
                <h2>Clear & Compelling Storylines</h2>
                <p>
                  We distill complex commercial disputes into clear and
                  compelling storylines, tailoring our presentation to the
                  audience, whether it be a jury, judge, or arbitrator. These
                  skills are crucial in commercial litigation matters.
                </p>
                <button className={style.btn2}>
                  <svg
                    clipRule='evenodd'
                    fillRule='evenodd'
                    strokeLinejoin='round'
                    strokeMiterlimit='2'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z' />
                  </svg>
                  <h3>Meet the Team </h3>
                </button>
              </div>
            </div>
            <div className='pure-u-1 pure-u-md-12-24'>
              <div className={style.winimg}>
                <img src='/images/wewin.jpg' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeWin;
