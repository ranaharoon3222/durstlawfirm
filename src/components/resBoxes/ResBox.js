import React from "react";
import style from './box.module.css'
const ResBox = () => {
  return (
    <>
      <div className="container">
        <div className={style.um}>
          <p>#personalinjury</p>
        </div>
        <div className={style.result1}>
          <div className={style.Amain}>
            <div className={style.box3}>
              <img src="./images/icon2.png" alt="" />
              <h1>$1,000,000</h1>
            </div>
            <p className={style.p3}>
              Settlement in case where landlord’s grossly negligent maintenance
              led to woman and children having to jump from third-floor
              apartment window in order to escape a fire.
            </p>
            <p className={style.p5}>
              The Durst Law Firm acted immediately to preserve the scene before
              the evidence could be destroyed, making it possible to prove the
              landlord’s negligence. The client ultimately made a successful
              recovery. She and her family remain friends of the firm.
            </p>
          </div>
          <div className={style.Amain2}>
            <div className={style.box3}>
              <img src="./images/icon2.png" alt="" />
              <h1>$175,000</h1>
            </div>
            <p className={style.p3}>
              Settlement for client injured in accident involving semi-truck in
              which police initially determined client to be at fault. In this
              case, the team at The Durst Law Firm acted immediately to preserve
              bodycam footage, 911 recordings, and other time-sensitive evidence
              that ultimately proved crucial to establish that the truck driver
              was truly at fault.
            </p>
          </div>
          <div className={style.Amain3}>
            <div className={style.box3}>
              <img src="./images/icon2.png" alt="" />
              <h1>$100,000</h1>
            </div>
            <p className={style.p3}>
              Policy limit settlement for child pedestrian hit by car.
            </p>
          </div>

          <div className={style.main4}>
            <div className={style.box3}>
              <img src="./images/icon2.png" alt="" />
              <h1>$480,000</h1>
            </div>
            <p className={style.p3}>
              Settlement for mother and son injured in head-on car accident.
            </p>
          </div>

          <div className={style.Amain4}>
            <div className={style.box3}>
              <img src="./images/icon2.png" alt="" />
              <h1>$100,000</h1>
            </div>
            <p className={style.p3}>
              Settlement for client who tripped over doorway threshold between
              hotel room and balcony, sustaining injuries.
            </p>
          </div>

          <div className={style.main7}>
            <div className={style.lmao}>
              <div className={style.box3}>
                <img src="./images/icon2.png" alt="" />
                <h1>$257,835</h1>
              </div>
              <p className={style.p3}>
                Judgment in assault and battery case for client sucker punched
                and pushed through window at bottom of apartment building
                staircase. An additional confidential settlement was negotiated
                with the landlord.
              </p>
            </div>

            <div className={style.main6}>
              <div className={style.box3}>
                <img src="./images/icon2.png" alt="" />
                <h1>$260,000</h1>
              </div>
              <p className={style.p3}>Insurance bad faith settlement</p>
            </div>
          </div>
        </div>
        <div className={style.line}>
          <img src="./images/line-image.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default ResBox;
