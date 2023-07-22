import * as prismicH from '@prismicio/helpers';
import { SliceZone } from '@prismicio/react';
import { createClient, linkResolver } from '../../prismicio';
import { components } from '@/slices/index';
import Head from 'next/head';
import { isFilled } from '@prismicio/client';

const Page = ({ page, navigation, settings }) => {
  console.log(page.data, settings.data);

  return (
    <>
      <Head>
        <title>{page.data.meta_title}</title>
        {isFilled.keyText(page.data.meta_description) ? (
          <meta name='description' content={page.data.meta_description} />
        ) : null}
      </Head>
      <SliceZone
        slices={page.data.slices}
        components={components}
        context={settings.data}
      />
    </>
  );
};

export default Page;

export async function getServerSideProps({ params, previewData }) {
  const client = createClient({ previewData });
  const page = await client.getByUID('page', params.uid);
  const settings = await client.getByUID('settings', 'settings');
  return {
    props: {
      page,
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
