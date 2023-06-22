import React from 'react'
import style from './leader.module.css'
const Leadership = () => {
  return (
    <>
      <div className={style.backColor}>
        <div className="container">
          <div className={style.appeals2}>
            <div className={style.aInnterText}>
              <img src="./images/orang-shado-pic.svg" alt="" />
              <h1>
                <span> Exceptionally Qualified</span> to Handle an Ohio or
                Federal Appeal
              </h1>
              <p>
                We are proud to often be engaged by other law firms to represent
                their clients on appeal in the First District and Sixth Circuit,
                in addition to representing our own clients on appeal when
                necessary. We handle appeals involving all of our core practice
                areas – complex commercial litigation, trucking and other
                transportation accidents, and personal injury, and also in other
                areas when we are specially hired on appeal, such as
                constitutional law, employment law, domestic relations, child
                custody, and even criminal law at times.
              </p>
              <p>
                We often notice firsthand the competitive advantage this gives
                our clients over opposing parties who instead use their trial
                counsel, who fall prey to procedural pitfalls and emphasize the
                wrong arguments.
              </p>
              <div className={style.im}>
                <img src="./images/shadooo-img.svg" alt="" />
              </div>
            </div>
            <div className={style.apealText}>
              <h3>Leadership in Ohio Appellate Practice</h3>
              <span></span>
              <p>
                Alex J. Durst has continuously served as the Chair of the
                Cincinnati Bar Association’s Appellate Practice Group since
                2018, after first joining the group in 2014 and serving as its
                Secretary from 2016 to 2018. In this capacity, Alex works
                closely with the Judges, Staff Attorneys and Administrators of
                the First District Court of Appeals to organize CLEs, update the
                legal community on local rule changes, court updates and other
                developments in the First District, and put on events bringing
                together the appellate bar and bench.
              </p>
              <p>
                Alex emcees and presents at the Biennial Appellate Practice
                Group CLE, which typically includes a panel discussion featuring
                all six First District Judges. Alex was also appointed by the
                First District to its local rules committee in 2018.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Leadership
