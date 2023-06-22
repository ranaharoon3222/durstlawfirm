import React from 'react'
import style from './four.module.css'
const FourBox = () => {
  return (
    <div>
      <div className="container">
        <div className={style.mid}>
          <h1>Practice Areas</h1>
          <p>The Durst Law Firm serves clients in the following areas.</p>
        </div>
        <div className={style.boxes}>
          <div className={style.box1}>
            <h3>Commercial Litigation</h3>
            <h4>Click for more</h4>
          </div>
          <div className={style.box2}>
            <h3>Transportation Accidents</h3>
            <h4>Click for more</h4>
          </div>
          <div className={style.box3}>
            <h3>Personal Injury Cases</h3>
            <h4>Click for more</h4>
          </div>
          <div className={style.box4}>
            <h3>Ohio Local Counsel Services</h3>
            <h4>Click for more</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourBox
