import Button from '@/commons/Button';
import RichText from '@/commons/RichText';

/**
 * @typedef {import("@prismicio/client").Content.RichTextWithButtonSlice} RichTextWithButtonSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<RichTextWithButtonSlice>} RichTextWithButtonProps
 * @param {RichTextWithButtonProps}
 */
const RichTextWithButton = ({ slice }) => {
  return (
    <section
      className='my-5'
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{ padding: slice.primary.padding }}
      id={slice.primary.ids}
    >
      <div
        className={`container ${
          slice.primary.text_align === 'center' ? 'text-center' : 'text-left'
        } `}
      >
        <RichText field={slice.primary.title} strong={'text-primary'} />
        <RichText field={slice.primary.text} hyperlink={'text-primary'} />

        {slice.primary.button_text && (
          <Button
            className={`mt-5 ${
              slice.primary.text_align === 'center' ? 'mx-auto' : ''
            }  `}
            variant='primary-bg'
            text={slice.primary.button_text}
            link={slice.primary.button_link.url}
          ></Button>
        )}
      </div>
    </section>
  );
};

export default RichTextWithButton;
