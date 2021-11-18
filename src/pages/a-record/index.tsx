import { DuplicateIcon, GlobeAltIcon, MailIcon, ShieldCheckIcon, TrendingUpIcon } from '@heroicons/react/outline';
import { Layout, Metadata, Header } from '../../components';
import { Container } from '../../components/elements';
import { A_RECORD_PATH } from '../../config/paths';
import tools from '../../config/tools';
import bridge from '../../lib/bridge';
import nProgress from 'nprogress';
import { useState } from 'react';
import Link from 'next/link';

const title = 'A record lookup';
const description = 'A free online and open source tool to test your site for DNS, Security, Performance, Network, and SEO issues.';

const initialResults: { [name: string]: string[] }[] = [];
function ARecord() {
  const [results, setResults] = useState(initialResults);
  const onSearch = async (query: string) => {
    nProgress.start();
    try {
      const { data, ...response } = await bridge('/dns/a').update({ hostname: query });
      if (response?.error) {
        throw Error(response.error);
      }
      if (data) {
        setResults([{ [query]: data }, ...results]);
      }
      nProgress.done();
    } catch (error) {
      nProgress.done();
    }
  };
  return (
    <Layout>
      <Metadata title={title} description={description} path={`/${A_RECORD_PATH}`} keywords={['a record lookup']} />

      <Header description={description} title={title} onSearch={onSearch} />

      <section className='py-28'>
        <Container className='flex flex-col gap-y-8'>
          {results.map((result, index) => (
            <table key={index} className='table text-gray-400 w-full border-separate space-y-6 text-sm'>
              <thead className='bg-gray-800 text-gray-500'>
                <tr>
                  <th className='p-3'>Domain</th>
                  <th className='p-3'>Type</th>
                  <th className='p-3'>Address</th>
                  {/* <th className='p-3'>TTL</th> */}
                  <th className='p-3'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(result).map((domain) =>
                  result[domain].map((address) => (
                    <tr key={address} className='bg-gray-800'>
                      <td className='p-3'>
                        <div className='flex align-items-center'>
                          <div className='ml-3'>
                            <div className=''>{domain}</div>
                          </div>
                        </div>
                      </td>
                      <td className='p-3 text-center'>A</td>
                      <td className='p-3 font-bold text-center'>{address}</td>
                      {/* <td className='p-3'>
                    <span className='bg-yellow-400 text-gray-50  rounded-md px-2'>30m</span>
                  </td> */}
                      <td className='p-3'>
                        <button className='text-gray-400 hover:text-gray-100 mr-2' onClick={() => navigator.clipboard.writeText(address)}>
                          <DuplicateIcon className='h-6 w-6' />
                        </button>
                      </td>
                    </tr>
                  )),
                )}
              </tbody>
            </table>
          ))}
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
              .filter((i) => i.similar.includes(A_RECORD_PATH))
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
    </Layout>
  );
}

export default ARecord;
