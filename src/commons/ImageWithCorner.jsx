import React from 'react';
import Img from './Image';

const ImageWithCorner = ({ img }) => {
  return (
    <div className='relative'>
      <img
        src='./images/corner-black.svg'
        className='absolute top-0 left-0'
        alt=''
      />
      <Img src={img} className={'pl-7 pt-7'} />
    </div>
  );
};

export default ImageWithCorner;
