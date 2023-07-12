import { PrismicRichText } from '@prismicio/react';
import React from 'react';

const RichText = ({ field, paragraphClassName = '', ...props }) => {
  return (
    <div>
      <PrismicRichText
        field={field}
        components={{
          paragraph: ({ children }) => (
            <p className={`mt-5 ${paragraphClassName}`}>{children}</p>
          ),
        }}
      />
    </div>
  );
};

export default RichText;
