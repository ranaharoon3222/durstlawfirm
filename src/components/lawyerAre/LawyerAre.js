import React from 'react';
import style from './lawyerare.module.css';
const LawyerAre = () => {
  return (
    <>
      <div className={style.lawyersec}>
        <div className='wrapper'>
          <h1>Our Lawyers Are:</h1>
          <div className='pure-g'>
            <div className='pure-u-1 pure-u-md-1-3'>
              <div className={style.lawyerlist}>
                <ul>
                  <li>
                    <strong>Prepared to act immediately</strong> to remove a
                    case to federal court, file responsive pleadings, preserve a
                    statute of limitations, seek or defend against a temporary
                    restraining order or preliminary injunction, draft
                    responsive pleadings, or take other time-sensitive action.
                  </li>
                  <li>
                    <strong>
                      Knowledgeable regarding applicable procedural rules,
                    </strong>{' '}
                    including the Ohio Rules of Civil Procedure, Ohio Rules of
                    Evidence, Ohio Rules of Appellate Procedure, and their
                    federal counterparts.
                  </li>
                  <li>
                    <strong>
                      Knowledgeable regarding local rules and Judge’s standing
                      orders
                    </strong>{' '}
                    in the Southern District of Ohio, Northern District of Ohio
                    and Sixth Circuit Court of Appeals, as well as state courts
                    located in Hamilton County (Cincinnati, Ohio), surrounding
                    counties (Butler, Warren and Clermont), Montgomery County
                    (Dayton, Ohio) and Franklin County (Columbus, Ohio).
                  </li>
                </ul>
              </div>
            </div>
            <div className='pure-u-1 pure-u-md-1-3'>
              <div className={style.lawyerlist}>
                <ul className={style.space}>
                  <li>
                    <strong>Familiar with local Judges</strong> and their unique
                    chambers practices.
                  </li>
                  <li>
                    <strong>
                      Deeply involved in the local legal community.
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Adept at navigating myriad procedural issues,
                    </strong>{' '}
                    including jurisdiction/venue strategy, removal jurisdiction,
                    requests for injunctive relief, className action procedure,
                    motions brought under Rule 12(b) and its Ohio counterpart,
                    summary judgment requests, federal abstention doctrines,
                    choice-of-law determinations, discovery procedures,
                    sanctions requests, and other complex issues.
                  </li>
                  <li>
                    <strong>
                      Highly successful in complex civil litigation matters,
                    </strong>{' '}
                    including seven-figure recoveries for plaintiff clients in
                    commercial litigation and personal injury cases, favorable
                    outcomes in defense matters, and obtaining preliminary
                    injunctive relief. Read about our{' '}
                    <span className={style.appeal}>results.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='pure-u-1 pure-u-md-1-3'>
              <div className={style.lawyerlist}>
                <ul className={style.space}>
                  <li>
                    <strong>
                      Exceptionally qualified to handle{' '}
                      <span className={style.appeal}>appeals</span> ,
                    </strong>{' '}
                    particularly in Ohio’s First District Court of Appeals.
                  </li>
                  <li>
                    <strong>Organized, responsive and proactive,</strong> with
                    robust internal case management procedures.
                  </li>
                  <li>
                    <strong>Flexible.</strong> We gladly accept full
                    responsibility for the case, including drafting, discovery,
                    depositions, dispositive motion practice, trial, etc., or we
                    can take a more limited role. Regardless, we{' '}
                    <strong>
                      respect the existing attorney-client relationship.
                    </strong>
                  </li>
                </ul>
                <div className={style.redarrow}>
                  <img src='/images/red.svg' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LawyerAre;
