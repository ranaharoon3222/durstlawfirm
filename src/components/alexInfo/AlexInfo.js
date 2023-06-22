import React from 'react'
import style from './alexinfo.module.css'
const AlexInfo = () => {
  return (
   <>
   <div className={style.alexinfosec}>
    <div className="wrapper">
        <div className={style.alexinfobox}>
            <div className={style.info}>
                <h1>Education</h1>
                <div className={style.redline} ></div>
                <h2><b>Washington University School of Law</b> / J.D., 2012</h2>
                <h2><b>University of Cincinnati</b> / B.A., magna cum laude, Economics, 2008</h2>
                <h1>Bar Admissions</h1>
                <div className={style.redline} ></div>
                <h2>Ohio (2012)</h2>
                <h2>U.S. District Court, Southern District of Ohio (2014)</h2>
                <h2>U.S. District Court, Northern District of Ohio (2020)</h2>
                <h2>U.S. Court of Appeals, Sixth Circuit (2021)</h2>
            </div>
            <div className={style.info}>
                <h1>Leadership & Professional Affiliations</h1>
                <div className={style.redline} ></div>
                <h2><b>Cincinnati Bar Association</b> / Appellate Practice Group, Chair, 2018 – Present; Member, 2014 – Present</h2>
                <h2><b>Ohio State Bar Association</b> / 2015 – Present</h2>
                <h2><b>Federal Bar Association</b> / Litigation Section / Member, 2022 – Present</h2>
                <h2><b>Ohio Association for Justice</b> / Member, 2020 – Present</h2>
                <h2><b>American Association for Justice</b> / Member, 2020 – Present</h2>
                <h2><b>Academy of Truck Accident Attorneys</b> / Member, 2019 – Present</h2>
                <h2><b>Su Casa Hispanic Center</b> / Member, Advisory Council, 2013 – Present; Volunteer Attorney, 2012 – Present</h2>
                <h2><b>Continuing Legal Education (CLE) Presenter</b> / OSBA & CBA, 2015-Present</h2>
            </div>
        </div>
    </div>
   </div>
   
   
   
   </>
  )
}

export default AlexInfo