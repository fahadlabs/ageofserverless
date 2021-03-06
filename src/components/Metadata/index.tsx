import { DESCRIPTION, KEYWORDS, SITE_NAME, WEB_ADDRESS } from '../../config';
import { ReactNode } from 'react';
import Head from 'next/head';

interface IProps {
  title: string;
  path?: string;
  description?: string;
  keywords?: string[];
  children?: ReactNode;
}

function Metadata({ title, path = '/', description = DESCRIPTION, keywords = [], children }: IProps) {
  const url = `${WEB_ADDRESS}${path}`;
  return (
    <Head>
      {/* metainfo */}
      <meta charSet='UTF-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={[...KEYWORDS, ...keywords].join(', ')} />
      <meta name='robots' content='index, follow' />
      {/* favicons */}
      <link rel='shortcut icon' href='/favicon.ico' />
      <link rel='canonical' href={WEB_ADDRESS} />
      <link rel='manifest' href='/manifest.json' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='format-detection' content='telephone=no' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='msapplication-tap-highlight' content='no' />
      <link rel='apple-touch-icon' href='/icons/icon-180x180.png' />

      <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
      <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#5bbad5' />
      <meta name='msapplication-TileColor' content='#000000' />
      <meta name='msapplication-config' content='/icons/browserconfig.xml' />
      <meta name='apple-mobile-web-app-title' content={SITE_NAME} />
      <meta name='application-name' content={SITE_NAME} />
      <meta name='theme-color' content='#ffffff' />

      {/* <link rel='apple-touch-icon' sizes='152x152' href='/icons/icon-152x152.png' />
      <link rel='apple-touch-icon' sizes='167x167' href='/icons/icon-167x167.png' /> */}
      {/* open graphs */}
      <meta property='og:title' content={title} />
      <meta property='og:url' content={url} />
      <meta property='og:type' content='website' />
      <meta property='og:locale' content='en_US' />
      <meta property='og:description' content={description} />
      <meta property='og:image' content='/image.png' />
      <meta property='og:site_name' content={SITE_NAME} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content='/image.png' />
      <meta name='twitter:image:alt' content='twitter image' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:url' content={url} />
      <meta name='twitter:creator' content='@fhdaax' />
      {/* apple splash screen images (optional) */}
      {/* <link rel='apple-touch-startup-image' href='/icons/apple_splash_2048.png' sizes='2048x2732' />
      <link rel='apple-touch-startup-image' href='/icons/apple_splash_1668.png' sizes='1668x2224' />
      <link rel='apple-touch-startup-image' href='/icons/apple_splash_1536.png' sizes='1536x2048' />
      <link rel='apple-touch-startup-image' href='/icons/apple_splash_1125.png' sizes='1125x2436' />
      <link rel='apple-touch-startup-image' href='/icons/apple_splash_1242.png' sizes='1242x2208' />
      <link rel='apple-touch-startup-image' href='/icons/apple_splash_750.png' sizes='750x1334' />
      <link rel='apple-touch-startup-image' href='/icons/apple_splash_640.png' sizes='640x1136' /> */}
      {children}
    </Head>
  );
}

export default Metadata;
