import React from 'react'
import style from './shado.module.css'
const ShadoImg = () => {
  return (
      <>
          <div className="container">
              
           <div className={style.grid2}>
        <div className={style.innerText8}>
            <h1>How Personal Injury Law Works</h1>
            <p>The vast majority of personal injury cases are based on the concept of “negligence.” In order to win a personal injury case, the person injured (the “plaintiff”) must prove four “elements” to establish that the person allegedly at fault (the “defendant”) acted negligently:</p>
            <ul>
                <li><span> Duty –</span> The defendant owed a legal duty to the plaintiff under the circumstances;</li>
                <li><span>Breach of Duty –</span> The defendant breached that legal duty by acting or failing to act in a certain way</li>
                <li> <span> Causation – </span>The defendant’s actions (or inaction) caused the plaintiff’s injury; and</li>
                <li><span> Damages –</span> The plaintiff was harmed or injured as a result of the defendant’s actions.</li>
            </ul>
            <p>Once these elements are proven, the defendant (or its insurance company) must compensate the plaintiff for his or her damages. In personal injury cases such as rear-end car accidents, the first three elements are usually not seriously at issue, since it is obvious who was at fault for the accident. Usually, the dispute in these cases has to do with how much money the injured party should be awarded.</p>
        </div>
        <div className={style.shado}>
            <img src="./images/orang-shado-pic.svg" alt="" />
        </div>
    </div>
     <div className={style.line3}>
        <img src="./images/line-image.svg" alt="" />
    </div>
                </div>

    </>
  )
}

export default ShadoImg
