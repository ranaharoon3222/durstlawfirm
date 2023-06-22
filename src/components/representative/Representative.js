import React from 'react';
import style from './repre.module.css';
const Representative = () => {
  return (
    <>
      <div className={style.represec}>
        <div className='wrapper'>
          <div className='pure-g'>
            <div className='pure-u-1 pure-u-md-12-24'>
              <h1 className={style.retext}>
                <span className={style.app}>Representative</span> Ohio Local
                Counsel Matters
              </h1>
              <div className={style.reprelist}>
                <ul>
                  <li>
                    Represented publicly traded Korean pharmaceutical company in
                    civil action removed to the Southern District of Ohio,
                    Western Division (Cincinnati), as local counsel and
                    co-counsel with Epstein Becker & Green, P.C. Obtained
                    dismissal of majority of claims against client under Fed. R.
                    Civ. P. 12(b)(6).
                  </li>
                  <li>
                    Represented national PPE wholesaler and company officer in
                    action filed in the Southern District of Ohio, Eastern
                    Division (Columbus), as lead counsel and co-counsel with
                    O’Neil, Cannon, Hollman, DeJong & Laing S.C. of Wisconsin.
                    Obtained complete dismissal under Fed. R. Civ. P. 12(b)(6) &
                    14(a)(4) of all claims, which sought over $9,000,000.00 in
                    damages.
                  </li>
                  <li>
                    Represented E-Commerce companies in electronic payment
                    processing litigation in actions filed in Ohio state,
                    federal and arbitration tribunals involving
                    multi-million-dollar damages claims, as local counsel and
                    co-counsel with California-based Rome & Associates, APC.
                    Obtained preliminary injunction freezing assets of PayFac
                    (credit card processing company).
                  </li>
                  <li>
                    Represented New York merchant cash advance companies in
                    multiple conversion and civil RICO actions filed by banks
                    involving damages claims of up to $60,000,000.00, as lead
                    counsel.
                  </li>
                </ul>
              </div>
            </div>
            <div className='pure-u-1 pure-u-md-12-24'>
              <div className={style.repreimg}>
                <img src='/images/representativeimg.jpg' alt='' />
              </div>
              <div className='pure-g'>
                <div className='pure-u-1 pure-u-md-12-24'>
                  <div className={style.court}>
                    <h1>Ohio State & Federal Courts</h1>
                    <p>
                      We serve as local counsel in state courts located in
                      Cincinnati, Dayton, Columbus, Toledo and Cleveland, as
                      well as all federal courts in Ohio, including:
                    </p>
                  </div>
                </div>
                <div className='pure-u-1 pure-u-md-12-24'>
                  <div className={style.courtlist}>
                    <ul>
                      <li>U.S. District Court, Southern District of Ohio</li>
                      <li>U.S. District Court, Northern District of Ohio</li>
                      <li>U.S. Bankruptcy Court, Southern District of Ohio</li>
                      <li>U.S. Bankruptcy Court, Northern District of Ohio</li>
                      <li>U.S. Court of Appeals, Sixth Circuit</li>
                    </ul>
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

export default Representative;
