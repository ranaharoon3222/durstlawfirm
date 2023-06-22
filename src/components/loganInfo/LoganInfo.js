import React from 'react'
import style from './loganinfo.module.css'
const LoganInfo = () => {
  return (
   <>
   
   <div className={style.alexinfosec}>
    <div className="wrapper">
        <div className={style.alexinfobox}>
            <div className={style.info}>
                <h1>Education</h1>
                <div className={style.redline} ></div>
                <h2><b>University of Cincinnati College of Law</b>  / Juris Doctor, cum laude, 2022</h2>
                <h2><b>Xavier University </b> / B.A., cum laude, English, 2017</h2>
                <h1>Bar Admissions</h1>
                <div className={style.redline} ></div>
                <h2>Ohio (2022)</h2>
                
            </div>
            <div className={style.info}>
                <h1>Leadership & Professional Affiliations</h1>
                <div className={style.redline} ></div>
                <h2><b>Ohio State Bar Association</b> / 2022 – Present</h2>
                <h1>Publications</h1>
                <div className={style.redline} ></div>
                <h2> <b>Protecting Personally Identifiable Information in the United States</b> </h2>
                <h2><b>The Fight for the Equal Right to Fight:</b> Does all-male draft registration violate the Fifth Amendment?</h2>
                <h2><b>Say it here; don’t say it there:</b> A Preview of the U.S. Supreme Court’s Upcoming Decision on Billboard Restrictions</h2>
                <h2><b>Revitalizing the Ban on Conversion Therapy:</b> An Affirmation of the Constitutionality of Conversion Therapy Bans</h2>
            </div>
        </div>
    </div>
   </div>
   
   </>
  )
}

export default LoganInfo