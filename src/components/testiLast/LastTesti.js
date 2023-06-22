import React from 'react'
import style from './Last.module.css'
const LastTesti = () => {
  return (
    <>
      <div className="container">
        <div className={style.um}>
          <p>#personalinjury</p>
        </div>
        <div className={style.result6}>
          <div className={style.testi}>
            <div className={style.box3}>
              <img src="./images/icons.png" alt="" />
              <h1>“Durst Delivers Top-Shelf Results.”</h1>
            </div>
            <p className={style.p3}>
              With our portfolio of over 200 rental units across multiple
              states, legal disputes are unavoidable. Over the past five years,
              The Durst Law Firm has represented us in dozens of civil cases,
              involving injunctions, partnership disputes, employment law,
              litigation with municipalities, breach of contract, fraud, and
              quiet title actions, among others, often with significant
              financial or business implications.
            </p>
            <p className={style.p5}>
              The Durst Law Firm delivers top-shelf results, both inside and
              outside the courtroom. We consider the firm’s attorneys part of
              our management and leadership team, and they act as such, helping
              us to work through strategic dialogues. They are outstanding
              advisors.
            </p>

            <span>- Ben W.</span>
            <div className={style.Lp}>
              <p>CEO, WHAM Properties</p>
            </div>
          </div>
          <div className={style.testi2}>
            <div className={style.box3}>
              <img src="./images/icons.png" alt="" />
              <h1>Defense Victory</h1>
            </div>
            <p className={style.p3}>
              Successful 12(b)(6) dismissal of lawsuit seeking $10,499,166 in
              damages, obtaining victory on behalf of European business
              enterprise incorporated in the United States including complete
              dismissal of all claims adverse company officer.
            </p>

            <span>Elec. Merch. Sys. LLC v. Gaal, et al.</span>
            <div className={style.Lp}>
              <p>No. 20-CV-1898, 2022 WL 2176537 (N.D. Ohio June 16, 2022).</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LastTesti
