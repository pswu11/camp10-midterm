import { Link, useLoaderData } from 'react-router-dom';
import { SearchInput } from '../components/SearchInput';
import MovieSlider from '../components/MovieSlider';
import { UpcomingMovie } from '../types/api';
import { GenreIcons } from '../components/GenreIcon';

export function Home() {
  const movies = useLoaderData() as UpcomingMovie[];
  console.log(movies);

  return (
    <>
      <SearchInput />
      <MovieSlider movies={movies} />
      <Link to="/genres">Go to overview</Link>
      <div className="flex justify-between mt-4">
        <GenreIcons />
      </div>
    </>
  );
}
