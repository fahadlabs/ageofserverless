import { Container } from '../src/components/elements';
import { Metadata, Layout } from '../src/components';

function Home() {
  return (
    <Layout>
      <Metadata path='/' title='avalonx.tech' />

      <section className='bg-gray-100 py-16'>
        <Container>
          <h1>Hello</h1>
        </Container>
      </section>
    </Layout>
  );
}

export default Home;
