import Box from '@/commons/Box';
import RichText from '@/commons/RichText';

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
      <div className='mt-10 mb-10'>
        <div className='container'>
          <h3 className='text-primary' id={slice.primary.title}>
            #{slice.primary.title}
          </h3>
          <div className='grid gap-10 md:grid-cols-3 df gap-y-3'>
            <div>
              {slice.items.map((item, i) => {
                return (
                  <div>
                    {item.column == 1 && (
                      <Box
                        name={item.name}
                        position={item.position}
                        title={item.title}
                        icon='./images/icon2.png'
                      >
                        <RichText field={item.text} />
                      </Box>
                    )}
                  </div>
                );
              })}
            </div>

            <div>
              {slice.items.map((item, i) => {
                return (
                  <div>
                    {item.column == 2 && (
                      <Box
                        name={item.name}
                        position={item.position}
                        title={item.title}
                        icon='./images/icon2.png'
                      >
                        <RichText field={item.text} />
                      </Box>
                    )}
                  </div>
                );
              })}
            </div>

            <div>
              {slice.items.map((item, i) => {
                return (
                  <div>
                    {item.column == 3 && (
                      <Box
                        name={item.name}
                        position={item.position}
                        title={item.title}
                        icon='./images/icon2.png'
                      >
                        <RichText field={item.text} />
                      </Box>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>{' '}
    </section>
  );
};

export default IconBox;
