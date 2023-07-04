import React from 'react';

const Paragraph = ({ children, className, ...props }) => {
  return (
    <div>
      <p {...props} className={`mt-5 ${className}`}>
        {children}
      </p>
    </div>
  );
};

export default Paragraph;
