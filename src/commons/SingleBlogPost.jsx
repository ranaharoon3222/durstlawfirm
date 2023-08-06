import React from 'react';
import RichText from './RichText';

const SingleBlogPost = ({ data }) => {
  return (
    <div>
      <div className='bg-[#081B33] py-16 mb-16'>
        <h1 className='text-center text-white max-w-[1000px] mx-auto w-[90%]'>
          {data.title}
        </h1>
        <p className='mt-3 text-center text-white'>
          {' '}
          Published at : {data.published_at}{' '}
        </p>
        <p className='mt-3 text-center text-white'>
          {' '}
          Category : {data.category.data.title}{' '}
        </p>
      </div>

      <div className='container !max-w-[1000px]'>
        <div className='my-16'>
          <RichText field={data.body_text} />
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPost;
