import React from 'react';
import style from './brand.module.css';
const Brands = () => {
  return (
    <>
      <div className={style.brandsec}>
        <div className='wrapper'>
          <div className={style.box1}>
            <div className={style.img1}>
              <img src='/images/brand1.png' alt='' />
            </div>
            <div className={style.img2}>
              <img src='/images/brand2.png' alt='' />
            </div>
          </div>
          <div className='pure-g'>
            <div className='pure-u-1 pure-u-md-12-24'>
              <div className={style.box1}>
                <div className={style.img3}>
                  <img src='/images/brand3.png' alt='' />
                </div>
                <div className={style.img4}>
                  <img src='/images/brand4.png' alt='' />
                </div>
              </div>
            </div>
            <div className='pure-u-1 pure-u-md-12-24'>
              <div className={style.box1}>
                <div className={style.img5}>
                  <img src='/images/brand5.png' alt='' />
                </div>
                <div className={style.img6}>
                  <img src='/images/brand6.png' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
