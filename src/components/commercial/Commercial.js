import React from 'react';
import style from './commercial.module.css';
const Commercial = () => {
  return (
    <>
      <div className={style.commercialsec}>
        <div className='wrapper'>
          <div className='pure-g'>
            <div className='pure-u-1 pure-u-md-12-24'>
              <div className={style.litigation}>
                <h4>Ohio Commercial Litigaton Lawyer</h4>
                <h1>Commercial Litigation</h1>
                <p>
                  We litigate complex commercial disputes in state courts,
                  federal courts, and arbitral fora in Ohio.
                </p>
                <p>
                  Our attorneys routinely represent corporate clients in
                  high-dollar-value breach of contract actions, closely-held
                  business disputes and business torts.
                </p>
                <div className={style.commercialbtns}>
                  <button className={style.btn1}>
                    <i className='fa-solid fa-phone'></i>
                    <h3>Call Us</h3>
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
              <div className={style.additional}>
                <h2>Additional areas of focus include:</h2>
                <div className={style.areabox}>
                  <div className={style.areaboxtext}>
                    <ul>
                      <li>Partnership and Joint Venture Dispute Litigation</li>
                      <li>Financial Services Litigation</li>
                      <li>E-Commerce Litigation</li>
                      <li>Noncompete Litigation</li>
                      <li>Trade Secret Litigation</li>
                      <li>Uniform Commercial Code (UCC) Litigation</li>
                      <li className={style.app}>
                        Employment Defense Litigation
                      </li>
                      <li>Real Estate Litigation</li>
                      <li>Corporate Governance Litigation</li>
                      <li className={style.app}>Appeals</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Commercial;
