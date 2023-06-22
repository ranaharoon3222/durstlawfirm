import React from 'react'
import style from './testi.module.css'
const Testi = () => {
  return (
    <>
      <div className="container">
        <div className={style.onlyText}>
          <div className={style.textH}>
            <img src="./images/new5.svg" alt="" />
            <h1>Testimonials</h1>
            <h3>See what our former clients have to say.</h3>
            <p>Filter by area</p>
            <a href="">Personal Injury | Commercial Litigation </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testi
