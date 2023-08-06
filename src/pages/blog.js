import BlogCard from '@/commons/pages/BlogCard';
import React from 'react';
import * as prismicH from '@prismicio/helpers';
import { SliceZone } from '@prismicio/react';
import { createClient, linkResolver } from '../../prismicio';
import { components } from '@/slices/index';
import Head from 'next/head';
import { isFilled } from '@prismicio/client';
import { useRouter } from 'next/router';

const blog = ({ blog, settings, blogPage }) => {
  const router = useRouter();
  const page = router.query.page || 1;

  const handlePagination = (e) => {
    if (e === 'prev' && blog.prev_page != null) {
      router.push(`/blog?page=${Number(page) - 1}`);
    } else if (e === 'next' && blog.next_page != null) {
      router.push(`/blog?page=${Number(page) + 1}`);
    }
  };

  return (
    <>
      <div className='container md:!mt-40 !mt-32'>
        <Head>
          <title>{blogPage.data.meta_title}</title>
          {isFilled.keyText(blogPage.data.meta_description) ? (
            <meta name='description' content={blogPage.data.meta_description} />
          ) : null}
        </Head>

        <SliceZone
          slices={blogPage.data.slices}
          components={components}
          context={settings.data}
        />

        <div className='grid gap-6 my-10 md:grid-cols-3'>
          {blog.results.map((item, i) => {
            return <BlogCard key={i} data={item.data} uid={item.uid} />;
          })}
        </div>

        <div className='flex justify-center max-w-lg mx-auto my-10 '>
          <div className='flex flex-row mx-auto'>
            <button
              type='button'
              onClick={() => handlePagination('prev')}
              disabled={blog.prev_page == null}
              className='px-3 py-2 text-white bg-gray-800 border-r border-gray-100 disabled:cursor-not-allowed disabled:opacity-50 rounded-l-md hover:bg-red-700 hover:text-white'
            >
              <div className='flex flex-row align-middle'>
                <svg
                  className='w-5 mr-2'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z'
                    clipRule='evenodd'
                  />
                </svg>
                <p className='ml-2 '>PREV</p>
              </div>
            </button>
            <button
              type='button'
              onClick={() => handlePagination('next')}
              disabled={blog.next_page == null}
              className='px-3 py-2 text-white bg-gray-800 border-l border-gray-200 disabled:cursor-not-allowed disabled:opacity-50 rounded-r-md hover:bg-red-700 hover:text-white'
            >
              <div className='flex flex-row align-middle'>
                <span className='mr-2'>NEXT</span>
                <svg
                  className='w-5 ml-2'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {blog.results.map((item, i) => {
          return (
            <SliceZone
              key={i}
              slices={item.data.slices}
              components={components}
              context={settings.data}
            />
          );
        })}
      </div>
    </>
  );
};

export default blog;

export async function getServerSideProps({ query, previewData }) {
  const client = createClient({ previewData });
  const settings = await client.getByUID('settings', 'settings');
  const blogPage = await client.getByUID('page', 'blog');
  const blog = await client.getByType('blog', {
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
    fetchLinks: 'categories.title',
    pageSize: 9,
    page: query.page || 1,
  });

  return {
    props: {
      blog,
      settings,
      blogPage,
    },
  };
}
