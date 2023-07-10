import { useLoaderData } from 'react-router-dom';
import { SearchInput } from '../components/SearchInput';
import MovieSlider from '../components/MovieSlider';
import { UpcomingMovie } from '../types/api';
import UserInfo from '../components/UserInfo';
import { GenreIcon } from '../components/GenreIcon';
import { Navbar } from '../components/Navbar';

export function Home() {
  const movies = useLoaderData() as UpcomingMovie[];
  console.log(movies);

  return (
    <>
      <section className=" flex flex-col gap-y-6">
        <UserInfo />
        <SearchInput />
        <div>
          <p className="text-white-dimmed font-500 text-l">Genre</p>
          <div className="flex flex-row justify-between">
            <GenreIcon
              genre={{
                icon: '',
                name: '',
              }}
            />
            <GenreIcon
              genre={{
                icon: '',
                name: '',
              }}
            />
            <GenreIcon
              genre={{
                icon: '',
                name: '',
              }}
            />
            <GenreIcon
              genre={{
                icon: '',
                name: '',
              }}
            />
          </div>
        </div>
        <div>
          <h3 className="mr-5 text-white text-l font-700 mb-2">
            Upcoming Movies
          </h3>
          <MovieSlider movies={movies} />
        </div>
      </section>
    </>
  );
}
