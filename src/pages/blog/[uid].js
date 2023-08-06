import * as prismicH from '@prismicio/helpers';
import { SliceZone } from '@prismicio/react';
import { createClient, linkResolver } from '../../../prismicio';
import { components } from '@/slices/index';
import Head from 'next/head';
import { isFilled } from '@prismicio/client';
import SingleBlogPost from '@/commons/SingleBlogPost';
import FooterCta from '@/commons/FooterCta';

const Page = ({ page, settings }) => {
  console.log(page.data, settings.data);

  return (
    <>
      <Head>
        <title>{page.data.meta_title}</title>
        {isFilled.keyText(page.data.meta_description) ? (
          <meta name='description' content={page.data.meta_description} />
        ) : null}
      </Head>

      <div className='mt-20 md:mt-32'>
        <SingleBlogPost data={page.data} />
      </div>

      <SliceZone
        slices={page.data.slices}
        components={components}
        context={settings.data}
      />

      <FooterCta
        logo={settings.data.logo.url}
        image='/images/last-back-img.jpg'
      >
        <h1 className='font-medium text-center md:text-left text-white md:text-[3vw]'>
          Contact The Durst Law Firm{' '}
          <strong className='text-primary'> Today. </strong>
        </h1>
      </FooterCta>
    </>
  );
};

export default Page;

export async function getServerSideProps({ params, previewData }) {
  const client = createClient({ previewData });
  const blogPost = await client.getByUID('blog', params.uid, {
    fetchLinks: 'categories.title',
  });
  const settings = await client.getByUID('settings', 'settings');
  return {
    props: {
      page: blogPost,
      settings,
    },
  };
}

// export async function getStaticPaths() {
//   const client = createClient();
//   const pages = await client.getAllByType('page');
//   return {
//     paths: pages.map((page) => prismicH.asLink(page, linkResolver)),
//     fallback: false,
//   };
// }
