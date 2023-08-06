/**
 * @typedef {import("@prismicio/client").Content.BlogPostSlice} BlogPostSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogPostSlice>} BlogPostProps
 * @param {BlogPostProps}
 */
const BlogPost = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    ></section>
  );
};

export default BlogPost;
