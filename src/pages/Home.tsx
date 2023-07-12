import { Link, useLoaderData } from 'react-router-dom';
import { SearchInput } from '../components/SearchInput';
import MovieSlider from '../components/MovieSlider';
import { UpcomingMovie } from '../types/api';
import { GenreIcon } from '../components/GenreIcon';
import { useGenreStore } from '../stores/genre';

export function Home() {
  const movies = useLoaderData() as UpcomingMovie[];
  const { genres, homePageGenres, selectGenre } = useGenreStore();
  console.log(movies);

  return (
    <>
      <SearchInput />
      <MovieSlider movies={movies} />
      <Link to="/genres">Go to overview</Link>
      <div className="flex justify-between mt-4">
        {
        homePageGenres.map((g, idx) => (
          <GenreIcon
            icon={genres[g].icon}
            genre={g}
            key={idx}
            isSelected={genres[g].isSelected}
            onClick={() => selectGenre(g, true)}
          />
        ))
        }
      </div>
    </>
  );
}
