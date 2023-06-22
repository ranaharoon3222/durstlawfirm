import React from "react";
import style from "./appeals.module.css";
const Appeals = () => {
  return (
    <>
      <div className="container">
        <div className={style.backGrid}>
          <div className={style.clintText}>
            <h4>Cincinnati, Ohio Appellate Lawyer</h4>
            <h1>Ohio Appeals</h1>
            <p>
              The Durst Law Firm not only regularly handles appeals but
              maintains deep roots within the appellate legal community in
              Cincinnati. As a result, we are able to offer immense value to
              appellate clients and out-of-town law firms who need local counsel
              in Ohio, particularly in appeals before Ohio’s First District
              Court of Appeals.
            </p>

            <p>
              An appeal is an extension of the trial process but requires a
              slightly different skill set. We treat our appellate practice,
              which complements our trial practice, as another vehicle for
              achieving our clients’ business and litigation objectives.
            </p>

            <div className={style.newclass1}>
              <div className={style.btn1}>
                <button className={style.BTN}>
                  <i className="fa fa-phone i" aria-hidden="true"></i> Call Us
                  Today
                </button>
                <button className={style.BTN2}>
                  <i className="fa fa-caret-down i" aria-hidden="true"></i> Send
                  A Message
                </button>
              </div>
            </div>
          </div>
          <div className={style.appeal}>
            <img src="./images/appeals-canvapic.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Appeals;
