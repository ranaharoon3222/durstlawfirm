import Tick from '@/icons/tick';
import React from 'react';

const TickBox = ({ text }) => {
  return (
    <div className='flex '>
      <div className='mt-1 mr-3'>
        <Tick />
      </div>
      <div>{text}</div>
    </div>
  );
};

export default TickBox;
