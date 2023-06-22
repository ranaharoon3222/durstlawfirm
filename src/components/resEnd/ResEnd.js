import React from 'react'
import style from './End.module.css'
const ResEnd = () => {
  return (
    <>
      <div className="container">
        <div className={style.um}>
          <p>#appellate</p>
        </div>
        <div className={style.result4}>
          <div className={style.Amain}>
            <div className={style.box3}>
              <img src="./images/icon2.png" alt="" />
              <h1>Precedent-Setting Ohio Supreme Court Win</h1>
            </div>
            <p className={style.p3}>
              Argued and won case before the Supreme Court of Ohio involving the
              right of indigent defendants to effective assistance of counsel,
              after being chosen to represent the Defendant on appeal.
            </p>
            <span>State v. Davis</span>
            <p className={style.p5}>
              159 Ohio St.3d 31, 2020-Ohio-309, 146 N.E.3d 560.
            </p>
          </div>
          <div className={style.Amain2}>
            <div className={style.box3}>
              <img src="./images/icon2.png" alt="" />
              <h1>Reversal of Child Custody Decision</h1>
            </div>
            <p className={style.p3}>
              Won complete “180-degree reversal” of child custody decision,
              resulting in immediate award of custody to the firm’s clients (the
              child’s longstanding foster parents), after being retained to
              represent clients on appeal.
            </p>
            <span>In re E.R.M.</span>
            <p>1st Dist. Hamilton, No. C-190391, 2020-Ohio-2806.</p>
          </div>
          <div className={style.Amain3}>
            <div className={style.box3}>
              <img src="./images/icon2.png" alt="" />
              <h1>Argued in the Massachusetts Appeals Court</h1>
            </div>
            <p className={style.p3}>
              Argued in the Massachusetts Appeals Court in case involving
              procedural issue of first impression involving Massachusetts’
              Saving Statute, G. L. c. 260, § 32.
            </p>
            <span>Abrahamson v. Estate of Lebold</span>
            <p>89 Mass. App. Ct. 223 (2016)</p>
          </div>
        </div>

        <div className={style.newclass}>
          <div className={style.Amain4}>
            <div className={style.box3}>
              <img src="./images/icon2.png" alt="" />
              <h1>Reversal of Summary Judgment</h1>
            </div>
            <p className={style.p3}>
              Obtained reversal of summary judgement in consumer law matter.
            </p>
            <span>Frank v. WNB Group, LLC</span>
            <p>1st Dist. No. C-180032, 2019-Ohio-1687, 135 N.E.3d 1142.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResEnd
