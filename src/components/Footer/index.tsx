import { ToolTag } from '../../interfaces/tools';
import { Container } from '../elements';
import tools from '../../config/tools';
import Link from 'next/link';

const headers: ToolTag[] = ['dns', 'email', 'performance', 'security'];

function Footer() {
  return (
    <footer className='bg-gray-700 py-8'>
      <Container>
        <div className='space-y-10 md:space-y-0 md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-8 md:gap-y-10'>
          {headers.map((nav) => (
            <ul className='p-0 m-0 list-none flex flex-col items-center' key={nav}>
              <h4 className='text-gray-400 text-sm font-bold capitalize mb-2'>{nav}</h4>
              {tools
                .filter((i) => i.tags.includes(nav))
                .map((item) => (
                  <li key={item.path} className='block mt-2'>
                    <Link href={item.path}>
                      <a style={{ borderBottomWidth: 1 }} className='border-gray-600 hover:border-gray-500 transition-all text-gray-300 hover:text-white capitalize text-sm py-1'>
                        {item.label}
                      </a>
                    </Link>
                  </li>
                ))}
            </ul>
          ))}
        </div>

        <hr className='border-gray-600 my-6' />

        <p className='text-sm text-gray-500 text-center'>&copy; {new Date().getFullYear()} ageofserverless.com. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
