import { PrismicRichText } from '@prismicio/react';
import React from 'react';

const Paragraph = ({ field, className, ...props }) => {
  return (
    <div>
      <PrismicRichText
        field={field}
        components={{
          paragraph: ({ children }) => (
            <p className={`mt-5 ${className}`}>{children}</p>
          ),
        }}
      />
    </div>
  );
};

export default Paragraph;
