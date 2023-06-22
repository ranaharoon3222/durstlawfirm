import React from 'react';
import style from './local.module.css';
const Local = () => {
  return (
    <>
      <div className={style.commercialsec}>
        <div className='wrapper'>
          <div className='pure-g'>
            <div className='pure-u-1 pure-u-md-12-24'>
              <div className={style.litigation}>
                <h4>Assisting Attorneys Nationwide with:</h4>
                <h1>Ohio Local Counsel Services</h1>
                <p>
                  The Durst Law Firm frequently serves as local counsel in
                  tribunals across the state of Ohio. We are the ideal Ohio
                  local counsel for commercial litigation and other civil cases.
                </p>
                <p>
                  If your client is faced with litigation or arbitration in
                  Ohio, contact The Durst Law Firm to discuss working together
                  as local counsel. References available upon request.
                </p>
                <div className={style.commercialbtns}>
                  <button className={style.btn1}>
                    <i className='fa-solid fa-phone'></i>
                    <h3>Call Us Today</h3>
                  </button>
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
                    <h3>Send A Message </h3>
                  </button>
                </div>
              </div>
            </div>
            <div className='pure-u-1 pure-u-md-12-24'>
              <div className={style.loaclimg}>
                <img src='/images/localimg.svg' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Local;
