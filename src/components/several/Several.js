import React from 'react'
import style from './several.module.css'
const Several = () => {
  return (
    <>
      <div className="container">
        <div className={style.headBoy}>
          <div className={style.headText}>
            <h2>Always Looking Several Steps Ahead</h2>
            <p>
              When we are hired as appellate counsel, we are often brought in
              before the appeal has been filed.
            </p>
            <p>
              Our services are not limited to appellate briefing, handling oral
              argument, etc., but include assisting trial counsel with
              preserving issues for appeal, ensuring procedural requisites for
              an appeal are satisfied, and drafting post-trial motions in
              anticipation of appeal.
            </p>
          </div>
          <div className={style.headimg}>
            <img src="./images/New.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Several
