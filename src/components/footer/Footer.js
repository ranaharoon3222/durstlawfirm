import React from "react";
import style from "./Footer.module.css";
const Footer = () => {
  return (
    <>
      <div className={style.footer}>
        <div className="container">
          <div className={style.fLogo}>
            <img src="./images/footer-logo.svg" alt="" />
          </div>
          <div className={style.foot}>
            <div className={style.innerFoot}>
              <h4>Quick Contact</h4>
              <div className={style.call}>
                <i className="fa fa-phone" aria-hidden="true"></i>
                <p>(513) 621-4999</p>
              </div>
              <div className={style.call}>
                <i className="fa fa-telegram" aria-hidden="true"></i>
                <p>office@durstlawfirm.com</p>
              </div>
              <div className={style.call}>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <p>600 Vine St., Suite 1920 Cincinnati, OH 45202</p>
              </div>
            </div>
            <div className={style.innerFoot2}>
              <h4>Quick Contact</h4>
              <p>Transportation Accidents</p>
              <p>Personal Injury</p>
              <p>Commercial Litigation</p>
              <p>Ohio Local Counsel</p>
              <div className={style.Hflex}>
                <p>Attorneys</p>
                <p>Contact</p>
                <p>Appeals</p>
                <p>Blog</p>
              </div>
            </div>
            <div className={style.innerFoot3}>
              <h4>Legal Disclaimer</h4>
              <p>
                The choice of a lawyer is an important decision and should not
                be based solely upon advertisements. The information you obtain
                from this site is not, nor is it intended to be, legal advice.
                We invite you to contact us. However, we cannot and do not
                represent you until our client intake process is completed.
                Please do not send us confidential information until such time
                as an attorney-client relationship has been established.
              </p>
            </div>
          </div>
        </div>
        <div className={style.border}></div>
        
        <div className={style.last}>
          <p>© The Durst Law Firm 2023 – All Rights Reserved</p>
          <p>
            Site By <span> Legal Back Office</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
