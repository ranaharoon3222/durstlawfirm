/**
 * @typedef {import("@prismicio/client").Content.IconBoxSlice} IconBoxSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<IconBoxSlice>} IconBoxProps
 * @param {IconBoxProps}
 */
const IconBox = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for icon_box (variation: {slice.variation}) Slices
    </section>
  );
};

export default IconBox;
