import { Layout, Metadata } from 'src/components';
import { IServerSideProps } from 'src/interfaces';
import { resolve } from 'dns/promises';
import { NextPageContext } from 'next';
// import { parseCookies } from 'nookies';

const title = 'DNS A record';
const description = '';

interface IProps {
  data: string[];
  error: Error;
}

function DNSAddress({ data, error }: IProps) {
  return (
    <Layout>
      <Metadata title={title} description={description} />
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <div>
          <pre>{JSON.stringify(error)}</pre>
        </div>
      )}
    </Layout>
  );
}

export async function getServerSideProps({ query, req }: NextPageContext): Promise<IServerSideProps> {
  const { address } = query;
  const { url } = req;
  const pageRoot = url.slice(0, url.lastIndexOf('/'));

  // const { token } = parseCookies({ req });

  if (!address || typeof address !== 'string') {
    return {
      redirect: {
        destination: pageRoot,
      },
    };
  }
  try {
    const data = await resolve(address as string, 'A');
    return { props: { data } };
  } catch (error) {
    return { props: { error } };
  }
}

export default DNSAddress;
