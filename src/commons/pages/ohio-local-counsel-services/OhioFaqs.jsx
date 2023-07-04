import React from 'react';
import PageHeadings from './PageHeadings';
import Faq from '@/commons/Faq';
import Paragraph from '@/commons/Paragraph';

const OhioFaqs = () => {
  const faqs = [
    {
      title: 'Do I need a lawyer?',
      content: `If you were seriously hurt (broken bones, torn ligaments, severe burns, or anything which may be long-lasting or permanent), or if you required significant medical care, such as a hospital stay or extensive evaluation, then it is important to speak with a personal injury lawyer. If your injuries were relatively minor and resolved quickly, then a personal injury lawyer may be unnecessary.`,
    },
    {
      title: 'Do I need a lawyer?',
      content: `If you were seriously hurt (broken bones, torn ligaments, severe burns, or anything which may be long-lasting or permanent), or if you required significant medical care, such as a hospital stay or extensive evaluation, then it is important to speak with a personal injury lawyer. If your injuries were relatively minor and resolved quickly, then a personal injury lawyer may be unnecessary.`,
    },
    {
      title: 'Do I need a lawyer?',
      content: `If you were seriously hurt (broken bones, torn ligaments, severe burns, or anything which may be long-lasting or permanent), or if you required significant medical care, such as a hospital stay or extensive evaluation, then it is important to speak with a personal injury lawyer. If your injuries were relatively minor and resolved quickly, then a personal injury lawyer may be unnecessary.`,
    },
    {
      title: 'Do I need a lawyer?',
      content: `If you were seriously hurt (broken bones, torn ligaments, severe burns, or anything which may be long-lasting or permanent), or if you required significant medical care, such as a hospital stay or extensive evaluation, then it is important to speak with a personal injury lawyer. If your injuries were relatively minor and resolved quickly, then a personal injury lawyer may be unnecessary.`,
    },
  ];
  return (
    <section className='max-w-[1200px] mx-auto mt-16 mb-16'>
      <PageHeadings />
      <div className='container'>
        <h2>Ohio Pro Hac Vice FAQ</h2>
        <div className='hs-accordion-group   '>
          {faqs.map((item, i) => (
            <Faq key={i} title={item.title}>
              <Paragraph
                dangerouslySetInnerHTML={{ __html: item.content }}
              ></Paragraph>
            </Faq>
          ))}
        </div>
      </div>

      <div className='container'>
        <h2>Southern District of Ohio Pro Hac Vice FAQ</h2>
        <div className='hs-accordion-group   '>
          {faqs.map((item, i) => (
            <Faq key={i} title={item.title}>
              <Paragraph
                dangerouslySetInnerHTML={{ __html: item.content }}
              ></Paragraph>
            </Faq>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OhioFaqs;
