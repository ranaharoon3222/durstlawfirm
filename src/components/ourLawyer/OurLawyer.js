import React from 'react';
import style from './lawyer.module.css';
const OurLawyer = () => {
  return (
    <>
      <div className={style.lawyersec}>
        <div className='wrapper'>
          <h1>Our lawyers have represented:</h1>
          <div className='pure-g'>
            <div className='pure-u-1 pure-u-md-1-3'>
              <div className={style.lawyerlist}>
                <ul>
                  <li>
                    <strong>Merchant cash advance companies</strong> in multiple
                    conversion and civil RICO actions filed by banks involving
                    damages claims of up to $60,000,000.00.
                  </li>
                  <li>
                    A former <strong>venture capitalist</strong> in the
                    negotiation of a post-termination separation agreement.
                  </li>
                  <li>
                    A local <strong>restaurant chain</strong> in a wage & hour
                    lawsuit under the Fair Labor Standards Act. A favorable
                    settlement was obtained.
                  </li>
                </ul>
              </div>
            </div>
            <div className='pure-u-1 pure-u-md-1-3'>
              <div className={style.lawyerlist}>
                <ul className={style.space}>
                  <li>
                    Numerous <strong>E-Commerce companies</strong> suing payment
                    facilitators (PayFacs), independent sales organizations
                    (ISOs), and banks in state court, federal court, and
                    arbitration, involving high-seven-figure damages claims. In
                    one case, the firm successfully obtained an asset freeze
                    injunction against the PayFac.
                  </li>
                  <li>
                    A <strong>PPE wholesaler</strong> and company officer in
                    indemnification and contribution claims seeking over
                    $9,000,000.00 in damages. All claims against the firms’
                    clients were dismissed under Fed. R. Civ. P. 12(b)(6) &
                    14(a)(4).
                  </li>
                </ul>
              </div>
            </div>
            <div className='pure-u-1 pure-u-md-1-3'>
              <div className={style.lawyerlist}>
                <ul className={style.space}>
                  <li>
                    A <strong>European business</strong> enterprise incorporated
                    in the United States and company officer who were sued for
                    over $10,000,000.00 in alleged credit card “chargeback”
                    debt. We secured full dismissal of all claims under Fed. R.
                    Civ. P. 12(b)(6).
                  </li>
                  <li>
                    A <strong>real estate investment company</strong> with
                    considerable holdings across multiple states in civil cases
                    involving injunctions, breach of contract, partnership
                    disputes, employment law, municipal litigation, fraud, and
                    quiet title actions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurLawyer;
