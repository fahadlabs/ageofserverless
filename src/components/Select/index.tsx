import { ChevronDownIcon } from '@heroicons/react/solid';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface IProps {
  data: any[];
  value: string;
  label: string;
  onSelect: (value: string) => void;
  selected: string;
}

function Select({ data, label, value, onSelect, selected }: IProps) {
  const getLabel = (): string => {
    const labelObj = data.find((i) => i[value] === selected);
    return labelObj ? labelObj[label] : '';
  };
  return (
    <Menu as='div' className='relative flex text-left items-center'>
      <Menu.Button className='inline-flex justify-center w-full px-4 py-2 bg-white text-sm font-medium text-gray-700 outline-none'>
        {getLabel()}
        <ChevronDownIcon className='-mr-1 ml-2 h-5 w-5' aria-hidden='true' />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 outline-none'>
          {data.map((item) => (
            <Menu.Item key={item[value]}>
              <button type='button' onClick={() => onSelect(item[value])} className='w-full hover:bg-gray-100 hover:text-gray-900 text-gray-700 block px-4 py-2 text-sm'>
                {item[label]}
              </button>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Select;
