import React from 'react'
import style from './regrad.module.css'
const Regrading = () => {
  return (
    <>
      <div className={style.backColor}>
        <div className="container">
          <div className={style.appeals2}>
            <div className={style.aInnterText}>
              <img src="./images/orang-shado-pic.svg" alt="" />
              <h1>Adept at Navigating Procedural Issues on Appeal</h1>
              <p>
                Procedural issues that present in the course of an appeal can be
                nerve-wracking, especially to a lawyer who does not typically
                handle appeals. Questions arise such as whether the judgment at
                issue is “final and appealable,” whether collection efforts may
                occur during the pendency of an appeal, whether a stay of
                execution is available (and if so, the likelihood of success,
                whether a request can be made on an emergency basis, and whether
                a bond must be posted), and what to do if a Rule 60(B) motion or
                other unresolved matter remains pending in the trial court.
              </p>
              <p>
                The attorneys at The Durst Law Firm have considerable experience
                navigating these and other complicated issues.
              </p>
            </div>
            <div className={style.apealText}>
              <h3>We are highly knowledgeable regarding:</h3>
              <span className={style.lemjom}></span>
              <ul>
                <li>
                  Securing the <span>right to an appeal </span> in Ohio state
                  courts and the Sixth Circuit Court of Appeals
                </li>
                <li>
                  <span>General motion practice</span>{" "}
                </li>
                <li>
                  Seeking (or challenging) a <span> stay pending appeal,</span>{" "}
                  including on an emergency, ex-parte basis
                </li>
                <li>
                  {" "}
                  Litigation of nuanced <span>“final and appealable”</span>{" "}
                  order issues
                </li>
                <li>
                  {" "}
                  <span> Ohio Supreme Court practice, </span> including seeking
                  the Court’s acceptance of a jurisdictional appeal, seeking a
                  stay of an intermediate appellate court’s decision, motion
                  practice, briefing, and oral argument
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Regrading
