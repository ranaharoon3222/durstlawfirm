import React from 'react';
import Button from './Button';
import Phone from '@/icons/phone';
import ArrowDown from '@/icons/arrow-down';

const GroupButtons = () => {
  return (
    <div className='flex flex-wrap justify-center mt-10 md:justify-normal md:flex-nowrap '>
      <Button
        text='Call Us Today '
        className='mb-4 md:mr-6 '
        variant='outline'
        color={'red'}
      >
        <Phone fill='red' />
      </Button>
      <Button
        text='Send A Message'
        variant='outline'
        color={'black'}
        className='mb-4 '
      >
        <ArrowDown fill='black' />
      </Button>
    </div>
  );
};

export default GroupButtons;
