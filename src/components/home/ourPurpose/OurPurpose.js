import React from 'react';
import style from './purpose.module.css';
import Button from '@/commons/Button';
import Box from '@/commons/Box';
import Paragraph from '@/commons/Paragraph';

const OurPurpose = () => {
  return (
    <div>
      <div className='container'>
        <div className='grid md:grid-cols-2 mt-[100px] gap-12'>
          <div className='grid items-center gap-10 md:grid-cols-2 place-content-center'>
            <div>
              <Box
                title='“Top-Shelf Results.”'
                name='- Ben W.'
                position='CEO, WHAM Properties'
                icon='/images/icons.png'
              >
                <p>
                  With our portfolio of over 200 rental units across multiple
                  states, legal disputes are unavoidable. Over the past five
                  years, The Durst Law Firm has represented us in dozens of
                  civil cases, involving injunctions, partnership disputes,
                  employment law, litigation with municipalities, breach of
                  contract, fraud, and quiet title actions, among others, often
                  with significant financial or business implications.
                </p>
                <p className='pt-5'>
                  The Durst Law Firm delivers top-shelf results, both inside and
                  outside the courtroom. We consider the firm's attorneys part
                  of our management and leadership team, and they act as such,
                  helping us to work through strategic dialogues. They are
                  outstanding advisors.
                </p>
              </Box>
              <Box title='Defense Victory”' icon='/images/icon2.png'>
                <p>
                  Successful 12(b)(6) dismissal of lawsuit seeking $10,499,166
                  in damages, obtaining victory on behalf of European business
                  enterprise incorporated in the United States including
                  complete dismissal of all claims adverse company officer.
                </p>
                <p className='pt-5 italic'>
                  <strong>
                    Elec. Merch. Sys. LLC v. Gaal, et al., No. 20-CV-1898, 2022
                    WL 2176537 (N.D. Ohio June 16, 2022).
                  </strong>
                </p>
              </Box>
            </div>
            <div>
              <Box
                title='“Justice was done.”'
                name='- Gaby M.'
                icon='/images/icons.png'
              >
                <p>
                  The trucking company fought [my] case hard and tried to blame
                  ME for the accident. [The firm’s] lawyers were not going to
                  let that happen. They used private investigators to track down
                  a key witness who was right behind me before the truck hit me
                  who saw everything. Then they got bodycam videos from the
                  police and a recorded 911 call from the truck driver that
                  proved the truck driver was not telling the truth. In the end,
                  I got a GREAT settlement.
                </p>
              </Box>
              <Box title='$1,000,000 Settlement”' icon='/images/icon2.png'>
                <p>
                  Personal injury settlement in case where, due to landlord’s
                  grossly negligent maintenance of property, woman and children
                  were forced to jump from third floor apartment building to
                  escape a fire. The client and her family remain friends of the
                  firm.
                </p>
              </Box>

              <div>
                <div>
                  <Button
                    variant='primary-bg'
                    text='More Testimonials'
                    className='inline-block w-auto px-5 mb-5 text-center '
                  />
                </div>

                <Button
                  variant='primary-bg'
                  text='More Results'
                  className='inline-block w-auto px-5 text-center'
                />
              </div>
            </div>
          </div>

          <div className=''>
            <div className='flex items-center '>
              <img
                src='/images/logo_11zon.jpg'
                alt=''
                className='max-w-[80px]'
              />
              <h1 className='text-[32px] font-semibold'>
                Our Purpose, Values & Principles
              </h1>
            </div>
            <div className=''>
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
                {' '}
                <span>Embracing our professional obligations.</span> We provide
                zealous advocacy while maintaining uncompromising ethics in all
                interactions with colleagues, clients, and the courts.
              </p>
              <p>
                {' '}
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
                {' '}
                <span> Mastery.</span> We believe it is the responsibility of
                all of our professionals to continually develop themselves.
              </p>
              <p>
                {' '}
                <span> Innovation.</span> By constantly reflecting, we
                continually hone our approach to litigation and client service.
              </p>
              <p>
                {' '}
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
};

export default OurPurpose;
