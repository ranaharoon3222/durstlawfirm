import React from 'react';
import Link from 'next/link';
const FourBox = () => {
  const data = [
    {
      title: 'Commercial Litigation',
      img: '/images/box-image1.jpg',
    },
    {
      title: 'Transportation Accidents',
      img: '/images/box-image2.jpg',
    },
    {
      title: 'Personal Injury Cases',
      img: '/images/inj.jpg',
    },
  ];

  return (
    <div>
      <div className='container'>
        <div className='py-10 text-center'>
          <h2>Practice Areas</h2>
          <p>The Durst Law Firm serves clients in the following areas.</p>
        </div>
        <div className='grid grid-cols-3 gap-10 pb-10'>
          {data.map((item, i) => {
            return (
              <Link key={i} href={'#'} className='block '>
                <div
                  className={`py-20  bg-center bg-cover hover:-translate-y-6 min-h-[17rem]  hover:after:four-box-hover transition-all   flex items-center`}
                  style={{
                    backgroundImage: `radial-gradient(circle at center, rgba(8, 27, 51, 0.7) 0%,  rgba(8, 27, 51, 0.84) 100% ), url(${item.img})`,
                  }}
                >
                  <div className='max-w-[200px] mx-auto'>
                    <h4 className='text-center text-white '> {item.title} </h4>
                    <span className='bg-white w-[140px] mx-auto block py-[1px] my-4'>
                      {' '}
                    </span>
                    <span className='block text-xs text-center text-primary '>
                      Click for more
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FourBox;
