import React from 'react'
import style from './foot.module.css'
const UpperFoot = () => {
  return (
    <>
      <div className={style.backPic}>
        <div className={style.logo}>
          <img src="./images/logo_11zon.jpg" alt="" />
        </div>
        <div className="container">
          <div className={style.Hgrod}>
            <div className={style.text}>
              <h1>
                Contact The Durst Law Firm <span> Today.</span>
              </h1>
            </div>
            <div className={style.btn1}>
              <button className={style.Practise}>
                {}
                <i className="fa fa-caret-down i aria-hidden=true"></i> practice
                Areas{}
              </button>
              <button className={style.call}>
                {}
                <i className="fa fa-phone i aria-hidden=true"></i> Call Us Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpperFoot
  