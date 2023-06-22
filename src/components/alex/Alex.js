import React from "react";
import style from "./alex.module.css";
const Alex = () => {
  return (
    <>
      <div className={style.alexsec}>
        <div className="wrapper">
          <div className="pure-g">
            <div className="pure-u-1 pure-u-md-14-24">
              <div className={style.alexbox}>
                <h2>Principal Attorney</h2>
                <h1>
                  Alexander J. Durst, <span className={style.esq}>ESQ</span>{" "}
                </h1>
                <img className={style.secimg} src="/images/alex.jpg" alt="" />
                <div className={style.btnparent}>
                  <button className={style.btnbox}>
                    <i className="fa-sharp fa-regular fa-phone"></i>
                    <p>Call Alex</p>
                  </button>
                  <button className={style.btnbox}>
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                    <p>Email Alex</p>
                  </button>
                </div>
                <p className={style.alexp}>
                  Alex J. Durst is a civil trial attorney with more than ten
                  years of experience handling commercial litigation matters for
                  corporate clients as well as complex transportation, products
                  liability and catastrophic personal injury matters for
                  individuals.
                </p>
                <p className={style.alexp}>
                  In commercial litigation matters, Alex has secured complete
                  defense victories as lead counsel, including dismissals under
                  Rule 12(b)(6), on behalf of corporate clients against whom
                  seven- and eight-figure damages awards were sought. In all
                  three of Alex’s jury trials, all on the plaintiff side, Alex
                  won jury verdicts on behalf of his clients. In one sexual
                  harassment case, the jury awarded $189,000.00, which included
                  punitive damages and a further award of attorney fees. Alex
                  takes pride in handling the most complex injury cases that the
                  majority of attorneys are unequipped to handle, such as
                  trucking accident, train accident and products liability
                  cases. In both commercial litigation and personal injury
                  cases, Alex has secured settlements in excess of one million
                  dollars.
                </p>
                <p className={style.alexp}>
                  Alex also has extensive appellate experience, particularly in
                  Ohio’s First District Court of Appeals. He serves as the chair
                  of the Cincinnati Bar Association’s Appellate Practice Group,
                  in which capacity he works closely with the Judges, Staff
                  Attorneys and Administrators of Ohio’s First District Court of
                  Appeals to organize CLEs, update the legal community on
                  developments in the First District, and plan events bringing
                  together the appellate bar and bench. Alex was also appointed
                  by the First District to its Local Rules Committee in 2018.
                </p>
                <p className={style.alexp}>
                  Having lived in Spain and Argentina, Alex is completely fluent
                  in Spanish. Prior to attending law school, Alex worked as a
                  Spanish interpreter in the local court system.
                </p>
              </div>
            </div>
            <div className="pure-u-1 pure-u-md-10-24">
              <div className={style.aleximgparent}>
                <img
                  className={style.aleximg2}
                  src="/images/corner.svg"
                  alt=""
                />
                <img className={style.aleximg} src="/images/alex.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alex;
