import React from "react";
import style from "./pics.module.css";
const OnlyImg = () => {
  return (
    <>
      <div className={style.line}>
        <img src="./images/line-image.svg" alt="" />
      </div>
      <div className={style.twoimg}>
        <img src="./images/super-icon.png" alt="" />
        <img src="./images/member-icon.png" alt="" />
      </div>
      <div className="container">
        <div className={style.icons}>
          <div className={style.first}>
            <img src="./images/justic-icon.png" alt="" />
          </div>
          <div className={style.first}>
            <img src="./images/justic-icon2.png" alt="" />
          </div>{" "}
          <div className={style.first}>
            <img src="./images/justic-icon3.png" alt="" />
          </div>{" "}
          <div className={style.first}>
            <img src="./images/justic-icon4.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlyImg;
