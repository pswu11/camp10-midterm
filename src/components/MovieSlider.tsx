import { MovieModel } from '../types/api';
import MovieCard from './MovieCard';

export function MovieSlider({ movies }: { movies: MovieModel[] }) {
  return (
    <div className="flex flex-row gap-8 container-snap snap-x snap-mandatory overflow-scroll w-[375px] absolute -ms-5">
      {movies.map(movie => (
        <MovieCard movie={movie} variant="upcoming" />
      ))}
    </div>
  );
}

export default MovieSlider;
