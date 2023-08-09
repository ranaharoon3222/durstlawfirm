import TickBox from '@/commons/TickBox';
import React from 'react';

const TickList = () => {
  const features = [
    {
      title: '',
    },
    {
      title: '',
    },

    {
      title: '',
    },
    {
      title: '',
    },
    {
      title: '',
    },
    {
      title: '',
    },
    {
      title: '',
    },
    {
      title: '',
    },
  ];
  return (
    <div className='my-10'>
      <div className='container'>
        <div className='flex flex-wrap justify-center md:text-left text-center md:flex-nowrap items-center max-w-[1000px] mb-10'>
          <img src='/images/logo3.svg' className='max-w-[130px]' alt='' />
          <h1 className=''>
            Once you hire us to represent you, you can expect that we will:
          </h1>
        </div>
      </div>

      <section className='container grid gap-8 md:grid-cols-4 '>
        {features.map((item, i) => (
          <TickBox key={i} />
        ))}
      </section>
    </div>
  );
};

export default TickList;
