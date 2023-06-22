import React from 'react'
import style from './rapu.module.css'
const Repu = () => {
  return (
    <>
      <div className="container">
        <div className={style.secfull}>
          <div className={style.box2}>
            <div>
              <div className={style.main}>
                <div className={style.box3}>
                  <img src="./images/icons.png" alt="" />
                  <h1>“The Absolute Best”</h1>
                </div>
                <p className={style.p3}>
                  I hired Alex Durst to represent me in a truck accident case
                  that was very serious and traumatic. The truck company fought
                  the case hard and tried to blame ME for the accident. Durst
                  was not going to let that happen.
                </p>
                <p className={style.p2}>
                  In the end, I got a GREAT settlement. It’s a huge relief...
                </p>
                <span>- Gaby M</span>
              </div>
              <div className={style.main}>
                <div className={style.box3}>
                  <img src="./images/icon2.png" alt="" />
                  <h1>$1,000,000</h1>
                </div>
                <p className={style.p3}>Settlement</p>
                <p className={style.p5}>
                  Personal injury case where landlord negligence led to a woman
                  and child being forced to jump from 3rd floor apartment
                  building during a fire.
                </p>
                <p className={style.p2}>
                  The client ultimately recovered successfully.
                </p>
              </div>
            </div>
            <div>
              <div className={style.main2}>
                <div className={style.box3}>
                  <img src="./images/new5.svg" alt="" />
                  <h1>“Aggressive and tough. Proven winner.”</h1>
                </div>
                <p className={style.p4}>
                  Alex proved to be a very tough lawyer - he didn’t take the
                  easy, quick money, but rather took the time and went through
                  the necessary steps to really set the case up right.
                </p>
                <h4>- Anne</h4>
              </div>
              <div className={style.main2}>
                <div className={style.box3}>
                  <img src="./images/icon2.png" alt="" />
                  <h1>$480,000</h1>
                </div>
                <p className={style.p6}>Settlement</p>

                <p className={style.p4}>
                  Personal injury settlement for mother and son who were injured
                  in a head-on car accident.
                </p>
              </div>
            </div>
          </div>

          <div className={style.sec2}>
            <div className={style.innerImg}>
              <img src="./images/icons.png" alt="" />
              <h1>
                Our reputation is built on a long track record of{" "}
                <span>positive outcomes.</span>
              </h1>
            </div>
            <div className={style.onlyP}>
              <p>
                The attorneys at the Durst Law Firm work hard to ensure that
                their clients receive the representation they need to achieve
                the outcome that they deserve.
              </p>
              <p>
                But don’t just take our word for it. Hear it directly from our
                clients themselves.
              </p>
            </div>
            <div className={style.btn2}>
              <button>more testimonials</button>
              <button> more results</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Repu
