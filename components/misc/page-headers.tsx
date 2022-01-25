import Head from 'next/head';
import { Fragment } from 'react';

interface PageHeadersProps {
  title: string;
  description: string;
  page: string;
  imageUrl: string;
}

const websiteUlr = 'https://maximeclement.com';

export default function PageHeaders({
  title,
  description,
  page,
  imageUrl,
}: PageHeadersProps) {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <meta name='robots' content='index, follow' />
        <meta property='og:title' content={title} key='title' />
        <meta
          property='og:image'
          content={`${websiteUlr}/_next/${imageUrl}`}
          key='og:image'
        />
        <meta property='description' content={description} key='description' />
        <meta
          property='og:description'
          content={description}
          key='og:description'
        />
        <meta
          property='og:url'
          content={`${websiteUlr}/${page}`}
          key='og:url'
        />
        <meta property='og:type' content='website' key='og:type' />
        <meta property='og:locale' content='en_GB' key='og:locale' />
      </Head>
    </Fragment>
  );
}
