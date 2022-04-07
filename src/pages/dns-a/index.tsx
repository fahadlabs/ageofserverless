import { Header, Layout, Metadata } from 'src/components';
import { ITool } from 'src/interfaces/tools';
import { useRouter } from 'next/router';
import tools from 'src/config/tools';
import { useRef } from 'react';

const title = 'DNS A Records';
const description = 'A Records are the simplest type of DNS records, and one of the primary records used in DNS servers.';

function DnsA() {
  const metadata = useRef<ITool>(tools.find((tool) => tool.path === 'dns-a'));
  const router = useRouter();

  function onSearch(search: string) {
    router.push(`/${metadata.current.path}/${search}`);
  }
  return (
    <Layout>
      <Metadata title={metadata.current.label} description={metadata.current.description} />

      <Header title={title} description={description} onSearch={onSearch} />
    </Layout>
  );
}

export default DnsA;
