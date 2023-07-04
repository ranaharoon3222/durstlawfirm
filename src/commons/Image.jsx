import React from 'react';

const Img = ({ src, className }) => {
  return (
    <div>
      <img src={src} alt='' className={className} />
    </div>
  );
};

export default Img;
