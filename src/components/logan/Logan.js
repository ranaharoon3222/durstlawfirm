import React from "react";
import style from "./logan.module.css";
const Logan = () => {
  return (
    <>
      <div className={style.alexsec}>
        <div className="wrapper">
          <div className="pure-g">
            <div className="pure-u-1 pure-u-md-14-24">
              <div className={style.alexbox}>
                <h2>Associate Attorney</h2>
                <h1>
                  Logan F. Kline, <span className={style.esq}> ESQ</span>{" "}
                </h1>
                <img className={style.secimg} src="/images/logan.jpg" alt="" />
                <div className={style.btnparent}>
                  <button className={style.btnbox}>
                    <i className="fa-sharp fa-regular fa-phone"></i>
                    <p>Call Logan</p>
                  </button>
                  <button className={style.btnbox}>
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                    <p>Email Logan</p>
                  </button>
                </div>
                <p className={style.alexp}>
                  Logan Kline is an associate at the Durst Law Firm who joined
                  the firm in November of 2022 after graduating from the
                  University of Cincinnati College of Law. Logan graduated at
                  the top of his className and received CALI awards for attaining
                  the highest grades in his className in both Negotiation and Client
                  Counseling.
                </p>
                <p className={style.alexp}>
                  Logan concentrates his practice on commercial litigation as
                  well as complex transportation accident and personal injury
                  cases. He embraces the opportunity to assist businesses and
                  individuals alike by employing his strengths in problem
                  solving and interpersonal communication to accomplish the best
                  possible outcome. No two cases or clients are identical, and
                  while Logan brings the same level of passion and dedication to
                  each case, he also carefully tailors his approach to the needs
                  and goals of the individual client.
                </p>
                <p className={style.alexp}>
                  Outside of work, Logan enjoys sports and the outdoors. While
                  his playing days are behind him, Logan still enjoys regularly
                  attending various sporting events and is an avid supporter of
                  Xavier basketball. An Eagle Scout, he still finds time to
                  enjoy nature – both by taking long hikes with his dog and by
                  fishing the local waterways. While these interests manifest in
                  his time away from the law, they still inform his daily
                  approach. Logan prides himself on combining the fiery drive
                  inherent to sports competition with the calm and reflective
                  facet of an outdoorsman in his legal work.
                </p>
              </div>
            </div>
            <div className="pure-u-1 pure-u-md-10-24">
              <div className={style.aleximgparent}>
                <img
                  className={style.aleximg2}
                  src="/images/corner.svg"
                  alt=""
                />
                <img className={style.aleximg} src="/images/logan.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logan;
