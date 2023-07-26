import Faq from '@/commons/Faq';
import Paragraph from '@/commons/Paragraph';
import RichText from '@/commons/RichText';

/**
 * @typedef {import("@prismicio/client").Content.FaqSlice} FaqSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FaqSlice>} FaqProps
 * @param {FaqProps}
 */
const Faqs = ({ slice }) => {
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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='my-10 md:my-24'>
        <div className='container'>
          <h1 className='text-center'>{slice.primary.title}</h1>
          <RichText
            field={slice.primary.text}
            paragraphClassName='text-center'
          />

          <div className='hs-accordion-group mt-16 max-w-[1000px] mx-auto'>
            {slice.items.map((item, i) => (
              <Faq key={i} title={<RichText field={item.title} />}>
                <RichText field={item.text} />
              </Faq>
            ))}
          </div>
        </div>
      </div>{' '}
    </section>
  );
};

export default Faqs;
