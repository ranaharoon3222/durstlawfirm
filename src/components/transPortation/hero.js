import React from 'react'
import style from './trans.module.css'

const Hero = () => {
  return (
    <>
      <div className={style.backimg2}>
        <div className="container">
          <div className={style.backGrid}>
            <div className={style.clintText}>
              <h4>Ohio Transportation Injury Lawyer</h4>
              <h1>Transportation Accidents</h1>
              <p>
                The attorneys at the Durst Law Firm have experience handling
                complex transportation accident cases. We have been chosen to
                represent victims of two of the largest transportation disasters
                in recent history:
              </p>
              <div className={style.btn3}>
                <button className={style.btn7}>
                  Amtrak train derailment crash in Mendon, Missouri{" "}
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </button>
                <button className={style.btn8}>
                  Bus, FedEx truck, and two UPS truck Accident - Westmoreland
                  County, PA{" "}
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
                </button>
              </div>
              <p>
                If you or a family member has been injured in a transportation
                accident such as a trucking accident, train crash, plane crash,
                Uber accident or Lyft accident, let us help you. Call us as soon
                as possible. We prefer to get started immediately after the
                accident, before evidence is tampered with. We will come to you
                at your home or in the hospital.
              </p>
              <div className={style.p3}>
                We are available <span> 24/7.</span> You can even call or text
                Alex on his personal cellphone at <span>(513) 620-4529</span>.
              </div>

                <div className={style.btn1}>
                  <button className={style.BTN}>
                    <i className="fa fa-phone i aria-hidden=true"></i> Call Us
                    Today
                  </button>
                  <button className={style.BTN2}>
                    <i className="fa fa-caret-down i aria-hidden=true"></i> Send
                    A Message
                  </button>
                </div>
            </div>
            <div className={style.btn4}>
              <h3>What kind of accident have you been in?</h3>
              <button className={style.onlyB}>
                Trucking Accident{" "}
                <i className="fa fa-long-arrow-right aria-hidden=true"></i>
              </button>
              <button className={style.onlyB}>
                Automobile Accident{" "}
                <i className="fa fa-long-arrow-right aria-hidden=true"></i>
              </button>
              <button className={style.onlyB}>
                Texting While Driving{" "}
                <i className="fa fa-long-arrow-right aria-hidden=true"></i>
              </button>
              <button className={style.onlyB}>
                Drunk Driving Accident{" "}
                <i className="fa fa-long-arrow-right aria-hidden=true"></i>
              </button>
              <button className={style.onlyB}>
                Distracted Driving Accident{" "}
                <i className="fa fa-long-arrow-right aria-hidden=true"></i>
              </button>
              <button className={style.onlyB}>
                Rideshare Accident{" "}
                <i className="fa fa-long-arrow-right aria-hidden=true"></i>
              </button>
            </div>

            <div className={style.btn5}>
              <button className={style.onlyB1}>
                Amazon Delivery Van Injury{" "}
                <i className="fa fa-long-arrow-right aria-hidden=true"></i>
              </button>
              <button className={style.onlyB1}>
                Boating Accident{" "}
                <i className="fa fa-long-arrow-right aria-hidden=true"></i>
              </button>
              <button className={style.onlyB2}>
                Train Crash{" "}
                <i className="fa fa-long-arrow-right aria-hidden=true"></i>
              </button>
              <button className={style.onlyB2}>
                Bus Accident{" "}
                <i className="fa fa-long-arrow-right aria-hidden=true"></i>
              </button>
              <button className={style.onlyB2}>
                Aviation Disaster{" "}
                <i className="fa fa-long-arrow-right aria-hidden=true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero
