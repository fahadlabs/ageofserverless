import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Popover, Transition } from '@headlessui/react';
import { REPOSITORY, SITE_NAME } from 'src/config';
import { ToolTag } from '../../interfaces/tools';
import { Container } from '../elements';
import tools from '../../config/tools';
import { Fragment } from 'react';
import Link from 'next/link';

const headers: ToolTag[] = ['dns', 'email', 'performance', 'security'];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function Navbar() {
  return (
    <header className='bg-gray-600'>
      <Popover className='relative bg-gray-700 z-10'>
        <Container>
          <div className='flex justify-between items-center py-4 md:justify-start md:space-x-10'>
            <div className='flex justify-start lg:w-0 lg:flex-1'>
              <Link href='/'>
                <a>
                  <span className='sr-only'>ageofserverless.com</span>
                  <img className='h-8 w-auto sm:h-10' src='/images/ageofserverless.png' alt='ageofserverless' />
                </a>
              </Link>
            </div>
            <div className='-mr-2 -my-2 md:hidden'>
              <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                <span className='sr-only'>Open menu</span>
                <MenuIcon className='h-6 w-6' aria-hidden='true' />
              </Popover.Button>
            </div>
            <Popover.Group as='nav' className='hidden md:flex space-x-10'>
              {headers.map((nav) => (
                <Popover className='relative' key={nav}>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(open ? 'text-gray-200' : 'text-gray-300', 'group rounded-md inline-flex items-center text-base font-medium hover:text-gray-200 focus:outline-none')}
                      >
                        <span className='uppercase'>{nav}</span>
                        <ChevronDownIcon className={classNames(open ? 'text-gray-200' : 'text-gray-300', 'ml-2 h-5 w-5 group-hover:text-gray-200')} aria-hidden='true' />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 translate-y-1'
                      >
                        <Popover.Panel className='absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0'>
                          <div className='bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                            <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                              {tools
                                .filter((item) => item.tags.includes(nav))
                                .map((item) => (
                                  <Link href={`/${item.path}`} key={item.path}>
                                    <a className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'>
                                      <div className='ml-4'>
                                        <p className='text-base font-medium text-gray-900'>{item.label}</p>
                                        <p className='mt-1 text-sm text-gray-500'>{item.brief}</p>
                                      </div>
                                    </a>
                                  </Link>
                                ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              ))}
            </Popover.Group>
            <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
              <a target='_blank' href={REPOSITORY} className='whitespace-nowrap text-base font-medium text-gray-400 hover:text-gray-200 transition-all'>
                Contribute
              </a>
            </div>
          </div>
        </Container>

        <Transition
          as={Fragment}
          enter='duration-200 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel focus className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
            <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
              <div className='pt-5 pb-6 px-5'>
                <div className='flex items-center justify-between'>
                  <div>
                    <img className='h-8 w-auto' src='/images/ageofserverless.png' alt={SITE_NAME} />
                  </div>
                  <div className='-mr-2'>
                    <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                      <span className='sr-only'>Close menu</span>
                      <XIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
                <div className='mt-6'>
                  <nav className='grid gap-y-8'>
                    {tools
                      .filter((item) => item.tags.includes('dns'))
                      .map((item) => (
                        <Link key={item.path} href={`/${item.path}`}>
                          <a className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'>
                            <span className='ml-3 text-base font-medium text-gray-900'>{item.label}</span>
                          </a>
                        </Link>
                      ))}
                  </nav>
                </div>
              </div>
              <div className='py-6 px-5 space-y-6'>
                <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                  {tools
                    .filter((item) => item.tags.includes('email'))
                    .map((item) => (
                      <Link href={`/${item.path}`} key={item.path}>
                        <a className='text-base font-medium text-gray-900 hover:text-gray-700'>{item.label}</a>
                      </Link>
                    ))}
                </div>
                <div className='flex gap-x-2'>
                  <a
                    target='_blank'
                    href={REPOSITORY}
                    className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white text-gray-300 bg-green-800 hover:text-gray-200 hover:bg-green-900 transition-all'
                  >
                    Contribute
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
}

export default Navbar;
