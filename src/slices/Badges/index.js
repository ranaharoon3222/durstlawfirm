/**
 * @typedef {import("@prismicio/client").Content.BadgesSlice} BadgesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BadgesSlice>} BadgesProps
 * @param {BadgesProps}
 */
const Badges = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='container'>
        <div className='grid items-center justify-center gap-10 md:gap-5 my-10 grid-cols-2 mt-32 text-center md:grid-cols-3 max-w-[1000px] mx-auto'>
          {slice.items.map((item, i) => (
            <div key={i}>
              <img
                className='md:max-w-[200px] max-w-[140px] mx-auto'
                src={item.image.url}
                alt=''
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Badges;
