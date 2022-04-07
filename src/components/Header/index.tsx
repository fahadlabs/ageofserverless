import { ChevronRightIcon, XIcon } from '@heroicons/react/outline';
import { FormEvent, useRef, useState } from 'react';
import { ITool } from '../../interfaces/tools';
import { Container } from '../elements';
import Select from '../Select';

interface IProps {
  title: string;
  description: string;
  tools?: ITool[];
  onSearch: (query: string, tool?: string) => void;
}

function Header({ description, onSearch, title, tools }: IProps) {
  const inputRef = useRef<HTMLInputElement>();
  const [tool, setTool] = useState('');
  const [search, setSearch] = useState('');
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSearch(search, tool);
  }
  return (
    <section className='py-24 bg-no-repeat bg-bottom bg-auto md:bg-cover' style={{ backgroundImage: 'url(/images/ageofserverless_bg1.webp)' }}>
      <Container>
        <h1 className='text-2xl sm:text-4xl mb-4 text-gray-200 text-center'>{title}</h1>
        <p className='text-center text-lg mb-16 text-white'>{description}</p>

        <form className='flex bg-white w-full max-w-lg mx-auto h-12 focus-within:shadow-xl ' onSubmit={onSubmit}>
          {tools && <Select data={tools} label='label' value='path' selected={tool} onSelect={setTool} />}
          <input ref={inputRef} type='text' name='search' className='flex-auto px-4 sm:text-sm outline-none' placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
          {search && (
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
          <button type='submit' className='px-2 bg-green-600' disabled={!search}>
            <ChevronRightIcon className='h-6 w-6 text-gray-100' />
          </button>
        </form>
      </Container>
    </section>
  );
}

export default Header;
