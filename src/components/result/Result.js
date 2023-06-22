import React from 'react'
import style from './res.module.css'
const Result = () => {
  return (
    <>
      <div className={style.onlyText}>
        <div className={style.textH}>
          <img src="./images/new6.png" alt="" />
          <h1>Case Results</h1>
          <p>
            The Durst Law Firm has achieved phenomenal results in cases
            involving transportation accidents, personal injury, and commercial
            litigation, as both lead counsel and local counsel.
          </p>
          <p>Filter by area</p>
          <a href="">
            Transportation & Personal Injury | Commercial Litigation | Appellate{" "}
          </a>
        </div>
      </div>
    </>
  );
}

export default Result
