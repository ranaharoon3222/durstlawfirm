import React from 'react';
import Button from '../Button';
import RichText from '../RichText';

const BlogCard = ({ data, uid }) => {
  return (
    <div className='group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]'>
      <a className='' href='#'>
        {data.featured_image && (
          <div className='aspect-w-16 aspect-h-11'>
            <img
              className='object-cover w-full rounded-xl'
              src={data.featured_image.url}
              alt='Image Description'
            />
          </div>
        )}

        <div className='my-6'>
          <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white'>
            {data.title}
          </h3>

          <RichText field={data.short_text} />
        </div>
      </a>

      <Button
        link={`/blog/${uid}`}
        text={'Read More'}
        variant='primary-bg'
        className={'md:!max-w-[150px] !max-w-[160px] h-[42px]'}
      ></Button>
    </div>
  );
};

export default BlogCard;
