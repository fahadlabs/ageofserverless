import { NAV_HEIGHT } from '../../config';
import Footer from '../Footer';
import Navbar from '../Navbar';

interface IProps {
  children: any;
  centered?: boolean;
}

function Layout({ children, centered = false }: IProps) {
  return (
    <>
      <Navbar />
      <main className={`relative bg-white ${centered ? 'flex justify-center items-center' : ''}`} style={{ minHeight: `calc(100vh - ${NAV_HEIGHT}px)`, zIndex: 1 }}>
        {children}
      </main>

      <Footer />
    </>
  );
}

export default Layout;
