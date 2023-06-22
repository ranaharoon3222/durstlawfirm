import React from 'react'
import style from './ferIcon.module.css'
const FerIcons = () => {
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
                Argued and won a precedent-setting case before the Supreme Court
                of Ohio involving the right of indigent defendants to effective
                assistance of counsel, after being chosen to represent the
                Defendant on appeal.
              </p>
            </div>
            <div className={style.checkIcon}>
              <i className="fa fa-check-circle-o" aria-hidden="true"></i>
              <p>
                Won a complete “180-degree reversal” of a child custody decision
                awarding custody of child to biological father, resulting in an
                immediate award of custody to clients (the child’s longstanding
                foster parents), after being retained to represent clients on
                appeal. Following this result, the Guardian Ad Litem remarked
                that this result would make all the difference in this child’s
                life and future.
              </p>
            </div>
            <div className={style.checkIcon}>
              <i className="fa fa-check-circle-o" aria-hidden="true"></i>
              <p>
                Successfully obtained interim relief such as stays of execution
                pending appeal in the First District and the Supreme Court of
                Ohio (including on an emergency basis).
              </p>
            </div>
            <div className={style.checkIcon1}>
              <i className="fa fa-check-circle-o" aria-hidden="true"></i>
              <p>
                Argued in the Massachusetts Appeals Court in case of first
                impression involving the application of Massachusetts’ Saving
                Statute, G. L. c. 260, § 32.
              </p>
            </div>
            <div className={style.checkIcon}>
              <i className="fa fa-check-circle-o" aria-hidden="true"></i>
              <p>
                Obtained reversal of summary judgment decision on behalf of
                Plaintiff client
              </p>
            </div>
            <div className={style.checkIcon1}>
              <i className="fa fa-check-circle-o" aria-hidden="true"></i>
              <p>
                Obtained complete dismissal on procedural grounds of appeal of
                substantial sanctions/attorney fee award obtained in favor of
                our client.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FerIcons
