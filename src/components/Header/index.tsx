import { ChevronRightIcon, XIcon } from '@heroicons/react/outline';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { Container } from '../elements';
import tools from '../../config/tools';

interface IProps {
  title: string;
  description: string;
  onSearch: (search: string, tool?: string) => void;
}

function Header({ title, description, onSearch }: IProps) {
  const inputRef = useRef<HTMLInputElement>();
  const [search, setSearch] = useState('');
  const [tool, setTool] = useState('');
  useEffect(() => {
    setTool(tools[0].path);
  }, [tools]);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [tool]);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = search.trim();
    if (!query) return;
    onSearch(query, tool);
  };
  return (
    <section className='py-24 bg-no-repeat bg-bottom bg-auto md:bg-cover' style={{ backgroundImage: 'url(/images/avalonx_bg1.webp)' }}>
      <Container>
        <h1 className='text-2xl sm:text-4xl mb-4 text-gray-200 text-center'>{title}</h1>
        <p className='text-center text-lg mb-12 text-white'>{description}</p>

        <form className='flex bg-white w-full max-w-lg mx-auto h-12 focus-within:shadow-xl ' onSubmit={onSubmit}>
          <input ref={inputRef} type='text' name='search' className='flex-auto px-4 sm:text-sm outline-none' placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
          {search.trim() && (
            <button
              type='button'
              className='px-2'
              onClick={() => {
                setSearch('');
                inputRef.current.focus();
              }}
            >
              <XIcon className='h-5 w-5 text-gray-400' />
            </button>
          )}
          <button type='submit' className='px-2 bg-green-600'>
            <ChevronRightIcon className='h-6 w-6 text-gray-100' />
          </button>
        </form>
      </Container>
    </section>
  );
}

export default Header;
