import React from 'react';
import Img from './Image';
import Paragraph from './Paragraph';

const MultiColBg = () => {
  return (
    <section className='bg-[#eeecec] py-16'>
      <div className='container'>
        <div className='grid md:grid-cols-2 gap-10 items-center'>
          <div>
            <Img
              src={'./images/orang-shado-pic.svg'}
              className={'mb-5 max-w-[120px]'}
            />

            <h1>
              <span className='text-primary '>Exceptionally Qualified </span>
              to Handle an Ohio or Federal Appeal
            </h1>
            <Paragraph>
              We are proud to often be engaged by other law firms to represent
              their clients on appeal in the First District and Sixth Circuit,
              in addition to representing our own clients on appeal when
              necessary. We handle appeals involving all of our core practice
              areas – complex commercial litigation, trucking and other
              transportation accidents, and personal injury, and also in other
              areas when we are specially hired on appeal, such as
              constitutional law, employment law, domestic relations, child
              custody, and even criminal law at times.
            </Paragraph>
            <Paragraph>
              We often notice firsthand the competitive advantage this gives our
              clients over opposing parties who instead use their trial counsel,
              who fall prey to procedural pitfalls and emphasize the wrong
              arguments.
            </Paragraph>
          </div>

          <div>
            <div className='bg-white/60 md:p-10 p-5'>
              <h2>Leadership in Ohio Appellate Practice</h2>
              <span className='bg-primary h-[3px] w-24 block'> </span>

              <Paragraph>
                Alex J. Durst has continuously served as the Chair of the
                Cincinnati Bar Association’s Appellate Practice Group since
                2018, after first joining the group in 2014 and serving as its
                Secretary from 2016 to 2018. In this capacity, Alex works
                closely with the Judges, Staff Attorneys and Administrators of
                the First District Court of Appeals to organize CLEs, update the
                legal community on local rule changes, court updates and other
                developments in the First District, and put on events bringing
                together the appellate bar and bench.
              </Paragraph>
              <Paragraph>
                Alex emcees and presents at the Biennial Appellate Practice
                Group CLE, which typically includes a panel discussion featuring
                all six First District Judges. Alex was also appointed by the
                First District to its local rules committee in 2018.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiColBg;
