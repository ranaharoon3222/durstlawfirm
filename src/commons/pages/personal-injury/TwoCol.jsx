import Img from '@/commons/Image';
import Paragraph from '@/commons/Paragraph';
import React from 'react';

const TwoCol = () => {
  return (
    <section className='md:my-20 my-10'>
      <div className='grid md:grid-cols-2 gap-10 container'>
        <div>
          <h1>How Personal Injury Law Works</h1>
          <Paragraph>
            The vast majority of personal injury cases are based on the concept
            of “negligence.” In order to win a personal injury case, the person
            injured (the “plaintiff”) must prove four “elements” to establish
            that the person allegedly at fault (the “defendant”) acted
            negligently:
          </Paragraph>

          <Paragraph>
            <b> Duty -</b> The defendant owed a legal duty to the plaintiff
            under the circumstances;
          </Paragraph>

          <Paragraph>
            {' '}
            <b> Causation - </b> The defendant owed a legal duty to the
            plaintiff under the circumstances;
          </Paragraph>

          <Paragraph>
            {' '}
            <b> Duty -</b> The defendant owed a legal duty to the plaintiff
            under the circumstances;
          </Paragraph>

          <Paragraph>
            {' '}
            <b> Duty -</b> The defendant owed a legal duty to the plaintiff
            under the circumstances;
          </Paragraph>

          <Paragraph>
            {' '}
            Once these elements are proven, the defendant (or its insurance
            company) must compensate the plaintiff for his or her damages. In
            personal injury cases such as rear-end car accidents, the first
            three elements are usually not seriously at issue, since it is
            obvious who was at fault for the accident. Usually, the dispute in
            these cases has to do with how much money the injured party should
            be awarded.
          </Paragraph>
        </div>
        <div>
          <Img
            src={'./images/orang-shado-pic.svg'}
            className={'max-w-[500px] mx-auto'}
          />
        </div>
      </div>
    </section>
  );
};

export default TwoCol;
