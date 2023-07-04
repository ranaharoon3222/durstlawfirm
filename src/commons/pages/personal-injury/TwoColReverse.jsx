import Faq from '@/commons/Faq';
import Img from '@/commons/Image';
import Paragraph from '@/commons/Paragraph';
import React from 'react';

const TwoColReverse = () => {
  const faqs = [
    {
      title: 'Economic Damages',
      content: ` Economic damages include payment of
                <b>medical bills and expenses </b> , as well as any wages lost
                as a result of the victim's injuries. Often, a person who
                suffers a serious injury is unable to work for a time and may be
                even be left with permanent issues that prevent or reduce their
                ability to earn wages for years to come. In such situations, the
                victim can seek compensation both for actual lost wages and
                estimated future lost wages.`,
    },
    {
      title: 'Non-Economic Damages',
      content: ` Economic damages include payment of
                <b>medical bills and expenses </b> , as well as any wages lost
                as a result of the victim's injuries. Often, a person who
                suffers a serious injury is unable to work for a time and may be
                even be left with permanent issues that prevent or reduce their
                ability to earn wages for years to come. In such situations, the
                victim can seek compensation both for actual lost wages and
                estimated future lost wages.`,
    },
    {
      title: 'Punitive Damages',
      content: ` Economic damages include payment of
                <b>medical bills and expenses </b> , as well as any wages lost
                as a result of the victim's injuries. Often, a person who
                suffers a serious injury is unable to work for a time and may be
                even be left with permanent issues that prevent or reduce their
                ability to earn wages for years to come. In such situations, the
                victim can seek compensation both for actual lost wages and
                estimated future lost wages.`,
    },
  ];
  return (
    <section className='md:my-20 my-10'>
      <div className='grid md:grid-cols-2 gap-10 container'>
        <div>
          <Img
            src={'./images/orang-shado-pic.svg'}
            className={'max-w-[500px] mx-auto'}
          />
        </div>
        <div>
          <h1>Damages Available in Personal Injury Cases</h1>
          <Paragraph>
            Under Ohio law, compensation can be awarded for economic damages,
            non-economic damages, and punitive damages in personal injury
            lawsuits.
          </Paragraph>

          <div className='hs-accordion-group'>
            {faqs.map((item, i) => (
              <Faq key={i} title={item.title}>
                <Paragraph
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></Paragraph>
              </Faq>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColReverse;
