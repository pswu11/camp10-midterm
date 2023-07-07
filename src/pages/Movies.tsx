import { useLoaderData } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { Movie } from '../types/api';

export function Movies() {
  const nowPlayingMovies = useLoaderData() as Movie[];
  console.log(nowPlayingMovies);
  return (
    <div className="flex flex-wrap gap-4">
      {nowPlayingMovies.map((movie: Movie) => (
        <MovieCard movie={movie} variant="now_playing" key={movie.id} />
      ))}
    </div>
  );
}
