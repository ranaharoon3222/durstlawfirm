import React from 'react';

const BulletsGrid = () => {
  const bullets = [
    {
      title: `<b>Merchant cash advance companies </b>in multiple conversion and
              civil RICO actions filed by banks involving damages claims of up
              to $60,000,000.00.`,
    },
    {
      title: `<b>Merchant cash advance companies </b>in multiple conversion and
              civil RICO actions filed by banks involving damages claims of up
              to $60,000,000.00.`,
    },
    {
      title: `<b>Merchant cash advance companies </b>in multiple conversion and
              civil RICO actions filed by banks involving damages claims of up
              to $60,000,000.00.`,
    },
  ];

  return (
    <div className=' bg-[#F2F2F2] py-10'>
      <div className='container'>
        <h2 className='mb-8'>Our lawyers have represented: </h2>
      </div>
      <div className='container grid gap-5 px-5 md:gap-16 md:grid-cols-3'>
        <div>
          <ul className='listing'>
            {bullets.map((item) => (
              <li
                className='mb-5'
                key={item}
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></li>
            ))}
          </ul>
        </div>
        <div>
          <ul className='listing'>
            {bullets.map((item) => (
              <li
                className='mb-5'
                key={item}
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></li>
            ))}
          </ul>
        </div>

        <div>
          <ul className='listing'>
            {bullets.map((item) => (
              <li
                className='mb-5'
                key={item}
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BulletsGrid;
