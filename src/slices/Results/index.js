/**
 * @typedef {import("@prismicio/client").Content.ResultsSlice} ResultsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ResultsSlice>} ResultsProps
 * @param {ResultsProps}
 */
const Results = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for results (variation: {slice.variation}) Slices
    </section>
  );
};

export default Results;
