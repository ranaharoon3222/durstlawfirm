/**
 * @typedef {import("@prismicio/client").Content.ResourcesSlice} ResourcesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ResourcesSlice>} ResourcesProps
 * @param {ResourcesProps}
 */
const Resources = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for resources (variation: {slice.variation}) Slices
    </section>
  );
};

export default Resources;
