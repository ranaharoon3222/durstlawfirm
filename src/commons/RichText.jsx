import { PrismicRichText } from '@prismicio/react';
import React from 'react';

const RichText = ({
  field,
  paragraphClassName = '',
  heading4,
  heading1,
  listItem,
  ...props
}) => {
  return (
    <div>
      <PrismicRichText
        field={field}
        components={{
          heading1: ({ children }) => (
            <h1 className={`${heading1}`}>{children}</h1>
          ),

          listItem: ({ children }) => (
            <li className={`${listItem}`}>{children}</li>
          ),
          paragraph: ({ children }) => (
            <p className={`mt-5 ${paragraphClassName}`}>{children}</p>
          ),
          heading4: ({ children }) => (
            <h4 className={`my-5 ${heading4}`}>{children}</h4>
          ),
        }}
      />
    </div>
  );
};

export default RichText;
