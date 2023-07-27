import RichText from '@/commons/RichText';

/**
 * @typedef {import("@prismicio/client").Content.ClientsRepresentSlice} ClientsRepresentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ClientsRepresentSlice>} ClientsRepresentProps
 * @param {ClientsRepresentProps}
 */
const ClientsRepresent = ({ slice }) => {
  const ListLeftAlign = () => {
    return (
      <div className='bg-[#F2F2F2] py-10'>
        <div className='container text-left'>
          <div className='my-10'>
            <h2>{slice.primary.title}</h2>
            <ul className='grid gap-10 mt-10 md:grid-cols-3 listing'>
              <div>
                {slice.items
                  .slice(0, slice.items.length / 3)
                  .map((item, index) => (
                    <RichText key={index} listItem={'mb-3'} field={item.text} />
                  ))}
              </div>
              <div>
                {slice.items
                  .slice(
                    Math.ceil(slice.items.length / 3),
                    Math.ceil(slice.items.length / 3) +
                      Math.ceil(slice.items.length / 3)
                  )
                  .map((item, index) => {
                    console.log(Math.ceil(slice.items.length / 3));
                    return (
                      <RichText
                        key={index}
                        listItem={'mb-3'}
                        field={item.text}
                      />
                    );
                  })}
              </div>

              <div>
                {slice.items
                  .slice(
                    Math.ceil(slice.items.length / 3) +
                      Math.ceil(slice.items.length / 3),
                    Math.ceil(slice.items.length / 3) +
                      Math.ceil(slice.items.length / 3) +
                      Math.ceil(slice.items.length / 3)
                  )
                  .map((item, index) => (
                    <RichText key={index} listItem={'mb-3'} field={item.text} />
                  ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const DefaulTVariation = () => {
    return (
      <div className='container text-center'>
        <div className='my-10'>
          <h2>{slice.primary.title}</h2>
          <span className='block bg-[#e54a35] h-[6px] w-[200px] mx-auto mt-4  '></span>

          <ul className='grid gap-5 mt-10 md:grid-cols-3 listing'>
            {slice.items.map((item, index) => (
              <RichText key={index} listItem={'mb-3'} field={item.text} />
            ))}
          </ul>
        </div>
      </div>
    );
  };

  const renderSwitch = (variation) => {
    switch (variation) {
      case 'listLeftAlign':
        return <ListLeftAlign />;
      default:
        return <DefaulTVariation />;
    }
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {renderSwitch(slice.variation)}
    </section>
  );
};

export default ClientsRepresent;
