import { GlobeAltIcon, MailIcon, ShieldCheckIcon, TrendingUpIcon } from '@heroicons/react/outline';
import { Container } from '../components/elements';
import { Metadata, Layout } from '../components';
import tools from '../config/tools';
import Link from 'next/link';

const title = 'DNS, Email, Web - Troubleshoot Security and Performance';
const description = 'A free online and open source tool to test your site for DNS, Security, Performance, Network, and SEO issues.';

function Home() {
  return (
    <Layout>
      <Metadata path='/' title={title} description={description} />

      <section className='py-24 bg-no-repeat bg-bottom bg-auto md:bg-cover' style={{ backgroundImage: 'url(/images/avalonx_bg1.webp)' }}>
        <Container>
          <h1 className='text-2xl sm:text-4xl mb-4 text-gray-200 text-center'>{title}</h1>
          <p className='text-center text-lg mb-12 text-white'>{description}</p>
        </Container>
      </section>

      <section className='py-14'>
        <Container>
          <h2 className='text-gray-500 text-2xl text-center'>Popular Tools</h2>
          <hr className='mx-auto mt-4 max-w-sm' />
        </Container>

        <Container>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12'>
            {[...tools]
              .sort((a, b) => b.rate - a.rate)
              .map((item) => (
                <Link href={`/${item.path}`} key={item.path}>
                  <a className='bg-gray-50 px-4 py-8 flex flex-col transition-all shadow hover:shadow-lg gap-y-4'>
                    <span className='text-xl text-center'>{item.label}</span>
                    <span className='text-sm'>{item.brief}</span>
                    <div className='flex gap-x-2'>
                      {item.tags.includes('dns') && <GlobeAltIcon className='h-6 w-6 text-blue-600' />}
                      {item.tags.includes('email') && <MailIcon className='h-6 w-6 text-blue-600' />}
                      {item.tags.includes('performance') && <TrendingUpIcon className='h-6 w-6 text-blue-600' />}
                      {item.tags.includes('security') && <ShieldCheckIcon className='h-6 w-6 text-blue-600' />}
                    </div>
                  </a>
                </Link>
              ))}
          </div>
        </Container>
      </section>

      <section className='bg-gray-50'>
        <Container className='py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between'>
          <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            <span className='block'>Want to contriute?</span>
            <span className='block text-indigo-600'>Get started with your choice.</span>
          </h2>
          <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
            {/* <div className='inline-flex rounded-md shadow'>
              <a
                target='_blank'
                href='https://github.com/avalonx-io/avalonx.tech'
                className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'
              >
                Sponsor
              </a>
            </div> */}
            <div className='ml-3 inline-flex rounded-md shadow'>
              <a
                target='_blank'
                href='https://github.com/avalonx-io/avalonx.tech'
                className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50'
              >
                Contribute
              </a>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}

export default Home;
