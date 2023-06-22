import React from 'react'
import style from './good.module.css'
const GoodSign = () => {
  return (
    <>
      <div className="container">
        <div className={style.goodIcon}>
          <div className={style.meFlex}>
            <img src="./images/logo3.svg" alt="" />
            <h1>
              Once you hire us to represent you, you can expect that we will:
            </h1>
          </div>
          <div className={style.checkbox}>
            <div className={style.checkIcon}>
              <i className="fa fa-check-circle-o" aria-hidden="true"></i>
              <p>
                Jump into action immediately, even in the middle of the night if
                necessary
              </p>
            </div>
            <div className={style.checkIcon}>
              <i className="fa fa-check-circle-o" aria-hidden="true"></i>
              <p>Meet you at your home or in the hospital</p>
            </div>
            <div className={style.checkIcon}>
              <i className="fa fa-check-circle-o" aria-hidden="true"></i>
              <p>
                Visit the scene of the accident with a qualified investigator
              </p>
            </div>
            <div className={style.checkIcon}>
              <i className="fa fa-check-circle-o" aria-hidden="true"></i>
              <p>Act fast to preserve the vehicles involved</p>
            </div>
            <div className={style.checkIcon}>
              <i className="fa fa-check-circle-o" aria-hidden="true"></i>
              <p>
                Take steps to prevent the trucking company from destroying
                crucial evidence
              </p>
            </div>
            <div className={style.checkIcon}>
              <i className="fa fa-check-circle-o" aria-hidden="true"></i>
              <p>Conduct a robust investigation</p>
            </div>
            <div className={style.checkIcon}>
              <i className="fa fa-check-circle-o" aria-hidden="true"></i>
              <p>Hire the necessary experts</p>
            </div>
            <div className={style.checkIcon}>
              <i className="fa fa-check-circle-o" aria-hidden="true"></i>
              <p>
                Handle all communications with the insurance companies involved
              </p>
            </div>
            <div className={style.checkIcon}>
              <i className="fa fa-check-circle-o" aria-hidden="true"></i>
              <p>Address the medical bills you receive in the mail</p>
            </div>
            <div className={style.checkIcon}>
              <i className="fa fa-check-circle-o" aria-hidden="true"></i>
              <p>
                Make sure your case is set up so you receive the max
                compensation available under the law
              </p>
            </div>
          </div>
        </div>
        <div className={style.line3}>
          <img src="./images/line-image.svg" alt="" />
        </div>
      </div>
    </>
  );
}

export default GoodSign
