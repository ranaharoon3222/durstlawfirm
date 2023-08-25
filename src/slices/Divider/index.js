/**
 * @typedef {import("@prismicio/client").Content.DividerSlice} DividerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DividerSlice>} DividerProps
 * @param {DividerProps}
 */
const Divider = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className=''
        style={{ padding: slice.primary.padding || '60px 0 0' }}
      >
        <img
          src={slice.primary.image.url}
          className='w-full max-w-[80px]   mx-auto'
          alt='Divider'
        />
      </div>
    </section>
  );
};

export default Divider;
