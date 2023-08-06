/**
 * @typedef {import("@prismicio/client").Content.TagsSlice} TagsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TagsSlice>} TagsProps
 * @param {TagsProps}
 */
const Tags = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    ></section>
  );
};

export default Tags;
