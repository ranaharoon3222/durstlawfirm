import React from 'react';
import style from './client.module.css';
const Clients = () => {
  return (
    <>
      <div className={style.clientsec}>
        <div className='wrapper'>
          <div className={style.clienttext}>
            <h1>Clients We Represent:</h1>
            <div className={style.line}></div>
          </div>
          <div className='pure-g'>
            <div className='pure-u-1 pure-u-md-8-24'>
              <div className={style.clientrepresent}>
                <ul>
                  <li>Merchant cash advance (MCA) companies</li>
                  <li>E-Commerce companies</li>
                  <li>Financial institutions</li>
                  <li>Investment funds</li>
                </ul>
              </div>
            </div>
            <div className='pure-u-1 pure-u-md-8-24'>
              <div className={style.clientrepresent}>
                <ul className={style.space}>
                  <li>Pharmaceutical companies</li>
                  <li>Oil & Gas companies</li>
                  <li>Construction companies</li>
                  <li>Restaurants</li>
                  <li>Employers</li>
                </ul>
              </div>
            </div>
            <div className='pure-u-1 pure-u-md-8-24'>
              <div className={style.clientrepresent}>
                <ul className={style.space}>
                  <li>Real estate companies</li>
                  <li>Public and private corporations</li>
                  <li>
                    Executives, Investors and High Net-Worth Businesspeople
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
