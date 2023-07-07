import { useLoaderData } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { Movie } from '../types/api';

const testMovie: Movie = {
  id: 1,
  poster_path: null,
  title: ' ',
  backdrop_path: null,
  genre_ids: [],
  overview: '',
  release_date: '',
  vote_average: 0,
  runtime: 0,
};

export function Movies() {
  const nowPlayingMovies = useLoaderData() as Movie[];
  console.log(nowPlayingMovies);
  return (
    <div>
      <MovieCard movie={testMovie} variant="now_playing"></MovieCard>
    </div>
  );
}
