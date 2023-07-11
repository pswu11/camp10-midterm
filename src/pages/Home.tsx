import { Link, useLoaderData } from 'react-router-dom';
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
          <div className="flex flex-row justify-between mb-4">
            <p className="text-white-dimmed font-500 text-l">Genre</p>
            <div className="text-yellow text-s font-500">
              <Link to={''}>See All {'>'}</Link>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            {[1, 2, 3, 4].map(iconNumber => (
              <GenreIcon
                genre={{
                  icon: '',
                  name: '',
                }}
              >
                {iconNumber}
              </GenreIcon>
            ))}
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
