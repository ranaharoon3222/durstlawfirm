import React from 'react'
import style from './purpose.module.css'

const OurPurpose = () => {
  return (
    <div>
      <div className="container">
        <div className={style.secfull}>
          <div className={style.box2}>
            <div>
              <div className={style.main}>
                <div className={style.box3}>
                  <img src="./images/icons.png" alt="" />
                  <h1>“Top-Shelf Results.”</h1>
                </div>
                <p className={style.p3}>
                  With our portfolio of over 200 rental units across multiple
                  states, legal disputes are unavoidable. Over the past five
                  years, The Durst Law Firm has represented us in dozens of
                  civil cases, involving injunctions, partnership disputes,
                  employment law, litigation with municipalities, breach of
                  contract, fraud, and quiet title actions, among others, often
                  with significant financial or business implications.
                </p>
                <p className={style.p2}>
                  The Durst Law Firm delivers top-shelf results, both inside and
                  outside the courtroom. We consider the firm’s attorneys part
                  of our management and leadership team, and they act as such,
                  helping us to work through strategic dialogues. They are
                  outstanding advisors.
                </p>
                <span>- Ben W.</span>
                <p className={style.p1}>CEO, WHAM Properties</p>
              </div>
              <div className={style.main}>
                <div className={style.box3}>
                  <img src="./images/icon2.png" alt="" />
                  <h1>Defense Victory</h1>
                </div>
                <p className={style.p3}>
                  Successful 12(b)(6) dismissal of lawsuit seeking $10,499,166
                  in damages, obtaining victory on behalf of European business
                  enterprise incorporated in the United States including
                  complete dismissal of all claims adverse company officer.
                </p>
                <p className={style.p5}>
                  Elec. Merch. Sys. LLC v. Gaal, et al., No. 20-CV-1898, 2022 WL
                  2176537 (N.D. Ohio June 16, 2022).
                </p>
              </div>
            </div>
            <div>
              <div className={style.main2}>
                <div className={style.box3}>
                  <img src="./images/icons.png" alt="" />
                  <h1>“Justice was done.”</h1>
                </div>
                <p className={style.p4}>
                  The trucking company fought [my] case hard and tried to blame
                  ME for the accident. [The firm’s] lawyers were not going to
                  let that happen. They used private investigators to track down
                  a key witness who was right behind me before the truck hit me
                  who saw everything. Then they got bodycam videos from the
                  police and a recorded 911 call from the truck driver that
                  proved the truck driver was not telling the truth. In the end,
                  I got a GREAT settlement.
                </p>
                <h4>- Gaby M.</h4>
              </div>
              <div className={style.main2}>
                <div className={style.box3}>
                  <img src="./images/icon2.png" alt="" />
                  <h1>$1,000,000 Settlement</h1>
                </div>
                <p className={style.p4}>
                  Personal injury settlement in case where, due to landlord’s
                  grossly negligent maintenance of property, woman and children
                  were forced to jump from third floor apartment building to
                  escape a fire. The client and her family remain friends of the
                  firm.
                </p>
              </div>
              <div className={style.btn2}>
                <button>more testimonials</button>
                <button> more results</button>
              </div>
            </div>
          </div>

          <div className={style.sec2}>
            <div className={style.innerImg}>
              <img src="./images/logo_11zon.jpg" alt="" />
              <h1>Our Purpose, Values & Principles</h1>
            </div>
            <div className={style.onlyP}>
              <p>
                Taken together, our purpose, values and principles are central
                to the character of The Durst Law Firm.
              </p>
              <p>
                Our purpose unifies us in a common cause to win clients’ cases.
                Our values shape the tone of how we interact with clients,
                co-counsel, opposing counsel, Judges, and others in the legal
                community. And our principles articulate our unique approach to
                handling cases.
              </p>
              <h4>Our Purpose –</h4>
              <p>
                We will provide outstanding representation to our clients and be
                the best possible local and co-counsel for out-of-state
                attorneys.
              </p>
              <h4>Our Values –</h4>
              <p>
                {" "}
                <span>Embracing our professional obligations.</span> We provide
                zealous advocacy while maintaining uncompromising ethics in all
                interactions with colleagues, clients, and the courts.
              </p>
              <p>
                {" "}
                <span> Leadership.</span> We are deeply committed to leadership
                in the Cincinnati legal community. Our lawyers serve in formal
                leadership roles in which they collaborate with Judges,
                attorneys, law schools, and legal aid organizations; present
                continuing legal education (CLE) programs; and mentor young
                attorneys and law students.
              </p>
              <p>
                Passion for Winning. We have a compelling desire to be the best
                at what we do and are personally invested in obtaining the best
                possible result in each case.
              </p>
              <h4>Our Principles –</h4>
              <p>
                {" "}
                <span> Mastery.</span> We believe it is the responsibility of
                all of our professionals to continually develop themselves.
              </p>
              <p>
                {" "}
                <span> Innovation.</span> By constantly reflecting, we
                continually hone our approach to litigation and client service.
              </p>
              <p>
                {" "}
                <span>Client Focus. </span> We recognize the importance of
                developing a superior understanding of our clients and their
                needs. We visit personal injury clients at their homes to gain
                insight into how the injury has impacted their lives. With
                business clients, we go above and beyond to understand their
                businesses and unique legal needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurPurpose
