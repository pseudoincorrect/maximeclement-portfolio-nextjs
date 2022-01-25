import Head from 'next/head';
import { Fragment } from 'react';

interface PageHeadersProps {
  title: string;
  description: string;
  keywords: string;
  page: string;
  imageUrl: string;
}

const websiteUlr = 'https://maximeclement.com';

export default function PageHeaders({
  title,
  description,
  page,
  imageUrl,
  keywords,
}: PageHeadersProps) {
  return (
    <Fragment>
      <Head>
        <meta
          name='viewport'
          content='initial-scale=1, width=device-width'
          key='viewport'
        />
        <meta http-equiv='cleartype' content='on' key='cleartype' />
        <meta name='robots' content='index, follow' key='robots1' />
        <meta name='robots' content='noodp' key='robots2' />
        {/* Title and Description */}
        <title>{title}</title>
        <meta property='description' content={description} key='description' />
        <meta name='keywords' content={keywords} key='keywords' />
        {/* OpenGrap */}
        <meta property='og:title' content={title} key='title' />
        <meta
          property='og:image'
          content={`${websiteUlr}/_next/${imageUrl}`}
          key='og:image'
        />
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
        {/* ItemProps */}
        <meta itemProp='name' content={title} key='itemPropName' />
        <meta
          itemProp='description'
          content={description}
          key='itemPropDescription'
        />
        <meta
          itemProp='url'
          content={`${websiteUlr}/${page}`}
          key='itemPropUrl'
        />
      </Head>
    </Fragment>
  );
}
