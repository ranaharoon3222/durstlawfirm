/**
 * @typedef {import("@prismicio/client").Content.GallerySlice} GallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GallerySlice>} GalleryProps
 * @param {GalleryProps}
 */

import React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Inline from 'yet-another-react-lightbox/plugins/inline';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const Gallery = ({ slice }) => {
  const [index, setIndex] = React.useState(0);

  const toggleOpen = (state) => () => setOpen(state);

  const updateIndex = ({ index: current }) => setIndex(current);

  const slides = slice.items.map((item) => {
    return { src: item.image.url };
  });

  return (
    <section
      id='gallery'
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='my-10'>
        <Lightbox
          index={index}
          plugins={[Inline, Thumbnails]}
          on={{
            view: updateIndex,
            click: toggleOpen(true),
          }}
          carousel={{
            padding: 0,
            spacing: 0,
            imageFit: 'cover',
          }}
          inline={{
            style: {
              width: '100%',
              maxWidth: '900px',
              aspectRatio: '3 / 2',
              margin: '0 auto',
            },
          }}
          slides={slides}
        />
      </div>
    </section>
  );
};

export default Gallery;
