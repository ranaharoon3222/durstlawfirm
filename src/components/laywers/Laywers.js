import React from 'react'
import style from './laywers.module.css'
const Laywers = () => {
  return (
    <>
      <div className="container">
        <div className={style.p3Section1}>
          <div className={style.pinnerText}>
            <h1>
              What sets The Durst Law Firm apart from other personal injury
              lawyers?
            </h1>
            <h3>We go the extra mile.</h3>
            <p>
              At The Durst Law Firm, we ensure that our clients receive as much
              compensation as possible. We go the extra mile to identify all
              possible defendants (for instance, if our client was injured by a
              drunk driver, we investigate to see if the driver was over-served
              at a bar that can also be sued in what is called a “dram shop”
              lawsuit) and locate all applicable insurance coverage (sometimes
              you can go after your own insurance company for additional
              compensation, for example).
            </p>
            <p>
              We do not advertise on billboards and we do not work on volume –
              we take serious injury cases only and devote the time and
              resources to them that they require (and, of course, we promptly
              return phone calls and keep our clients apprised at every stage).
              If it is in our client’s interest, we will go to trial. We help
              our clients through every stage of the case, striving to be
              incredibly thorough and leave them with no doubt that we have done
              everything possible for them.
            </p>
          </div>
          <div className={style.p3Img}>
            <img src="/images/New2.png" alt="" />
          </div>
        </div>
        <div className={style.line3}>
          <img src="/images/line-image.svg" alt="" />
        </div>
      </div>
    </>
  );
}

export default Laywers
