import React from 'react';
import style from './resource.module.css';
const Resources = () => {
  return (
    <>
      <div className={style.resourcesec}>
        <div className='wrapper'>
          <h1 className={style.restext}>Resources</h1>
          <div className='pure-g'>
            <div className='pure-u-1 pure-u-md-12-24'>
              <div className={style.fedbox}>
                <h2>Federal</h2>
                <div className={style.fddbox2}>
                  <div className={style.fedbox3}>
                    <i className='fa-regular fa-file-pdf'></i>
                    <h3>Southern District of Ohio Local Rules</h3>
                  </div>
                  <div className={style.fedbox3}>
                    <i className='fa-regular fa-file-pdf'></i>
                    <h3>Northern District of Ohio Local Rules</h3>
                  </div>
                  <div className={style.fedbox3}>
                    <i className='fa-regular fa-file-pdf'></i>
                    <h3>Sixth Circuit Court of Appeals Local Rules </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='pure-u-1 pure-u-md-12-24'>
              <div className={style.fedbox}>
                <h2>Ohio State</h2>
                <div className={style.fddbox2}>
                  <div className={style.fedbox3}>
                    <i className='fa-regular fa-file-pdf'></i>
                    <h3>Ohio Rules of Civil Procedure</h3>
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

export default Resources;
