import React from 'react';
import style from './team.module.css';
const Team = () => {
  return (
    <>
      <div className={style.teamsec}>
        <div className='wrapper'>
          <div className='pure-g'>
            <div className='pure-u-1 pure-u-md-12-24'>
              <div className={style.teambox}>
                <div className={style.teamimg}>
                  <img src='/images/team1.jpg' alt='' />
                </div>
                <div className={style.teamtext}>
                  <h1>Alex J. Durst</h1>
                  <h2>Principal Attorney</h2>
                  <p>
                    Alex J. Durst is a civil trial attorney with more than ten
                    years of experience handling commercial litigation matters
                    for corporate clients as well as complex transportation,
                    products liability and catastrophic personal injury matters
                    for individuals.
                  </p>
                  <div className={style.btnparent}>
                    <button className={style.btnbox}>
                      <p>Meet Alex</p>
                      <svg
                        clipRule='evenodd'
                        fillRule='evenodd'
                        strokeLinejoin='round'
                        strokeMiterlimit='2'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z' />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='pure-u-1 pure-u-md-12-24'>
              <div className='teambox'>
                <div className={style.teamimg}>
                  <img className={style.loimg} src='/images/team2.jpg' alt='' />
                </div>
                <div className={style.teamtext}>
                  <h1>Logan F. Kline</h1>
                  <h2>Associate Attorney</h2>
                  <p>
                    Logan F. Kline joined The Durst Law Firm as an associate
                    attorney in 2022, upon graduation from the University of
                    Cincinnati College of Law. Logan graduated at the top of his
                    className and received CALI awards in Negotiation and Client
                    Counseling.
                  </p>
                  <div className={style.btnparent}>
                    <button className={style.btnbox}>
                      <p>Meet Logan</p>
                      <svg
                        clipRule='evenodd'
                        fillRule='evenodd'
                        strokeLinejoin='round'
                        strokeMiterlimit='2'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z' />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='pure-g'>
            <div className='pure-u-1 pure-u-md-12-24'>
              <div className={style.team2box}>
                <div className={style.teamimg}>
                  <img src='/images/team3.jpg' alt='' />
                </div>
                <div className={style.teamtext}>
                  <h1>Maddie Wilhoite</h1>
                  <h2>Law Clerk</h2>
                  <p>
                    A native of Ft. Wright, Kentucky, Maddie is a second-year
                    law student at the University of Cincinnati College of Law.
                    Maddie graduated in just three years from the University of
                    Toledo, obtaining a bachelor’s degree in Business Management
                    and minor in Business Law in 2021.
                  </p>
                  <p className={style.space}>
                    While at the University of Toledo, Maddie played for the
                    Women’s Soccer team and was twice named to the Academic
                    All-MAC team for her excellence in both athletics and
                    academics. Maddie brings to her legal work the same drive
                    and discipline that led her to succeed on the field and in
                    the classroom. In her free time, Maddie tutors four
                    learning-disabled elementary school children and enjoys
                    cheering on the Bengals.
                  </p>
                </div>
              </div>
            </div>
            <div className='pure-u-1 pure-u-md-12-24'>
              <div className={style.team2box}>
                <div className={style.teamimg}>
                  <img src='/images/team4.jpg' alt='' />
                </div>
                <div className={style.teamtext}>
                  <h1>Peter Korchak</h1>
                  <h2>Law Clerk</h2>
                  <p>
                    Peter is a second-year law student at the University of
                    Cincinnati College of Law. Originally from Long Island, New
                    York, Peter moved to Cincinnati in 2017 to attend Xavier
                    University and graduated in 2021 with a bachelor’s degree in
                    Criminal Justice and minor in Political Communications.
                  </p>
                  <p className={style.space}>
                    Peter has demonstrated exceptional academic achievement at
                    UC Law and was selected to participate in both the Sixth
                    Circuit appellate clinic and the Moot Court team. At the
                    firm, Peter most enjoys legal writing and researching
                    complex issues in the realm of civil litigation. When not
                    working at the firm or studying for law school, Peter is an
                    avid Xavier Basketball fan and enjoys reading Stephen King
                    novels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
