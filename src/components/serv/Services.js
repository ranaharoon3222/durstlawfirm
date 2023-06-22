import React from 'react';
import style from './serv.module.css';
const Services = () => {
  return (
    <>
      <div className={style.servicessec}>
        <div className='wrapper'>
          <h1>Services</h1>
          <div className={style.servbox}>
            <button className={style.btnbox}>
              <p>Commercial Litigation</p>
              <i className='fa-solid fa-arrow-right'></i>
            </button>

            <button className={style.btnbox}>
              <p>Transportation Accidents</p>
              <i className='fa-solid fa-arrow-right'></i>
            </button>

            <button className={style.btnbox}>
              <p>Personal Injury</p>
              <i className='fa-solid fa-arrow-right'></i>
            </button>

            <button className={style.btnbox}>
              <p>Ohio Local Counsel</p>
              <i className='fa-solid fa-arrow-right'></i>
            </button>

            <button className={style.btnbox}>
              <p>Appellate Law</p>
              <i className='fa-solid fa-arrow-right'></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
