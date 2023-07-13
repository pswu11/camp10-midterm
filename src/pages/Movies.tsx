import { useLoaderData } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { Movie } from '../types/api';
import PaginationButton from '../components/PaginationButton';
import { useState } from 'react';
import { useGenreStore } from '../stores/genres';
// import { discoverMoviesWithGenres } from '../api/movies';

export function Movies() {
  const nowPlayingMovies = useLoaderData() as Movie[];
  const [currentPage, setCurrentPage] = useState(1);
  const { selectedGenres } = useGenreStore();
  const filteredMovies = selectedGenres.length === 0 ? nowPlayingMovies : nowPlayingMovies.filter(movie => movie.genre_ids.some(id => selectedGenres.some(g => g === id)))
  console.log(nowPlayingMovies, filteredMovies)


  const moviesDisplay = filteredMovies.slice(
    (currentPage - 1) * 4,
    currentPage * 4
  );

  // console.log(moviesDisplay);
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {moviesDisplay.map((movie: Movie) => (
          <MovieCard movie={movie} variant="now_playing" key={movie.id} />
        ))}
      </div>
      <div className="flex justify-between mt-5">
        {[1, 2, 3, 4, 5].map(pageNumber => (
          <PaginationButton
            key={pageNumber}
            currentPage={currentPage}
            onClick={() => setCurrentPage(pageNumber)}
          >
            {pageNumber}
          </PaginationButton>
        ))}
      </div>
    </div>
  );
}
