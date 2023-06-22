import React from 'react';
import style from './twocard.module.css';
const TwoCard = () => {
  return (
    <>
      <div className={style.twocardsec}>
        <div className='wrapper'>
          <div className='pure-g'>
            <div className='pure-u-1 pure-u-md-12-24'>
              <div className={style.card1}>
                <div className={style.comma}>
                  <img src='/images/comma.png' alt='' />
                </div>
                <h1>“Top-Shelf Results.”</h1>
                <p>
                  With our portfolio of over 200 rental units across multiple
                  states, legal disputes are unavoidable. Over the past five
                  years, The Durst Law Firm has represented us in dozens of
                  civil cases, involving injunctions, partnership disputes,
                  employment law, litigation with municipalities, breach of
                  contract, fraud, and quiet title actions, among others, often
                  with significant financial or business implications.
                </p>
                <p>
                  The Durst Law Firm delivers top-shelf results, both inside and
                  outside the courtroom. We consider the firm’s attorneys part
                  of our management and leadership team, and they act as such,
                  helping us to work through strategic dialogues. They are
                  outstanding advisors.
                </p>
                <h2>- Ben W.</h2>
                <p className={style.no}>CEO, WHAM Properties</p>
              </div>
            </div>
            <div className='pure-u-1 pure-u-md-6-24  '>
              <div className={style.card2}>
                <div className={style.card1}>
                  <div className={style.comma}>
                    <img src='/images/comma2.png' alt='' />
                  </div>
                  <h1>Defense Victory</h1>
                  <p>
                    Successful 12(b)(6) dismissal of lawsuit seeking $10,499,166
                    in damages, obtaining victory on behalf of European business
                    enterprise incorporated in the United States including
                    complete dismissal of all claims adverse company officer.
                  </p>

                  <h2 className={style.elec}>
                    Elec. Merch. Sys. LLC v. Gaal, et al.
                  </h2>
                  <p className={style.no}>
                    No. 20-CV-1898, 2022 WL 2176537 (N.D. Ohio June 16, 2022).
                  </p>
                </div>
              </div>
            </div>
            <div className='pure-u-1 pure-u-md-6-24'>
              <div className={style.btnb}>
                <div className={style.twobtns}>
                  <button className={style.btn1}>
                    <p>More Testimonials</p>
                  </button>
                  <button className={style.btn2}>
                    <p>More Results</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoCard;
