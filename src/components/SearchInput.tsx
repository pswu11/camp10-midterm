import { Combobox } from '@headlessui/react';
import { CgSearch } from 'react-icons/cg';
import { Fragment, useState } from 'react';

const movies = [
  'Dune',
  'Alice Wonderland',
  'Startreck',
  'Starwars',
  'Sherlock Holmes',
];

export function SearchInput() {
  const [selectedMovie, setSelectedMovie] = useState('');
  const [query, setQuery] = useState('');

  const filteredMovies =
    query === ''
      ? movies
      : movies.filter(person => {
          return person.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox value={selectedMovie} onChange={setSelectedMovie}>
      <Combobox.Label className="relative flex items-center">
        <Combobox.Input
          className="bg-dark-light text-white rounded-full h-12 pl-[3.75rem] w-full outline-none focus:ring-2 focus:ring-white-dimmed"
          placeholder="Search"
          onChange={event => setQuery(event.target.value)}
        />
        <Combobox.Options className="absolute leading-8 top-10 inset-x-0 bg-dark-light mt-4 rounded-lg text-white-dimmed overflow-hidden">
          {filteredMovies.map(movie => (
            <Combobox.Option key={movie} value={movie} as={Fragment}>
              {({ active }) => (
                <li
                  className={`${
                    active ? 'bg-yellow text-dark' : 'bg-dark-light'
                  } pl-[3.75rem]`}
                >
                  {movie}
                </li>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
        <CgSearch className="absolute left-5 text-[1.5rem] text-white-dimmed-heavy focus:text-white" />
      </Combobox.Label>
    </Combobox>
  );
}


