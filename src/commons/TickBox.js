import Tick from '@/icons/tick';
import React from 'react';

const TickBox = () => {
  return (
    <div className='flex '>
      <div className='mt-1 mr-3'>
        <Tick />
      </div>
      <div>
        <p>
          Jump into action immediately, even in the middle of the night if
          necessary
        </p>
      </div>
    </div>
  );
};

export default TickBox;
