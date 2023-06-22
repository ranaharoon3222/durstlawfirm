import React from 'react';
import style from './contact.module.css';
const Contact = () => {
  return (
    <>
      <div className={style.contactsec}>
        <div className='wrapper'>
          <div className={style.contactgrid}>
            <div className={style.contacttext}>
              <h1>Cincinnati, Ohio Law Firm</h1>
              <h2>Contact Us Today</h2>
              <div className={style.info}>
                <i className='fa-solid fa-phone'></i>
                <h4>(513) 621-4999 - Office</h4>
              </div>
              <div className={style.info}>
                <i className='fa-sharp fa-solid fa-paper-plane'></i>
                <h4>office@durstlawfirm.com</h4>
              </div>
              <div className={style.info}>
                <img
                  className={style.locicon}
                  src='/images/location.png'
                  alt=''
                />
                <div className='extra'>
                  <h4>Our Location</h4>
                  <h4 className={style.vine}>
                    600 Vine St., Suite 1920 Cincinnati, OH 45202
                  </h4>
                </div>
              </div>
              <p>
                To schedule a consultation, call us at{' '}
                <span className={style.call}>(513) 621-4999</span> , email us,
                or use the form on this page. Tell us about your legal inquiry,
                and we will contact you to schedule an appointment.
              </p>
            </div>
            <div className={style.contactform}>
              <h1>Request a Consultation</h1>
              <div className={style.inputbox}>
                <input type='text' placeholder='First Name' />
                <input type='text' placeholder='Last Name' />
              </div>
              <input type='email' placeholder='Email Address' /> <br />
              <input type='text' placeholder='Phone Number' /> <br />
              <input type='text' placeholder='Type of Case' /> <br />
              <textarea
                placeholder='Breifly describe your case...'
                name=''
                cols='30'
                rows='10'
              ></textarea>
              <input className={style.chek} type='checkbox' name='' id='' />
              <p>
                Please check this box to note your understanding that we cannot
                and do not represent you until our client intake process is
                completed and that you should not send us confidential
                information until such time as an attorney-client relationship
                has been established.
              </p>
              <button className={style.btn}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
