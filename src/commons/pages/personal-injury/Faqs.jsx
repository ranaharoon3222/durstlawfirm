import Faq from '@/commons/Faq';
import Paragraph from '@/commons/Paragraph';
import React from 'react';

const Faqs = () => {
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
    <section className='md:my-24 my-10'>
      <div className='container'>
        <h1 className='text-center'>
          Frequently Asked Questions About Ohio Personal Injury Law
        </h1>
        <Paragraph className={'text-center'}>
          If you are considering hiring a personal injury attorney, you may find
          the following Q&A helpful.
        </Paragraph>

        <div className='hs-accordion-group mt-16 max-w-[1000px] mx-auto'>
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

export default Faqs;
