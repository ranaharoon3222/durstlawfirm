import React from 'react';

const Box = ({
  title = '“Top-Shelf Results.”',
  children,
  name,
  position,
  icon,
  titleClass,
  positionClass,
  nameClass,
}) => {
  return (
    <section>
      <div className='relative bg-[#f5f5f5] p-6 shadow mb-8'>
        <h2 className={`${titleClass}`}> {title} </h2>
        <div className='pt-2 pb-2'>{children}</div>
        <h4
          className={`text-primary !font-lato text-sm italic my-5 ${nameClass}`}
        >
          {name}
        </h4>
        <h5 className={`!font-lato text-lg ${positionClass} `}> {position} </h5>

        <div className='bg-[#f5f5f5] w-10 h-10 rounded-full shadow-md absolute top-3 -left-5 flex items-center justify-center'>
          <img src={icon} className='max-w-[20px]' alt='' />
        </div>
      </div>
    </section>
  );
};

export default Box;
