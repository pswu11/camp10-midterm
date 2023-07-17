import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Movie } from "../types/api";
import MovieCard from "../components/MovieCard";
import PaginationButton from "../components/PaginationButton";


export function Bookmarks() {
   const nowBookedMovies = useLoaderData() as Movie[];

  const [currentPage, setCurrentPage] = useState(1);

  const moviesBookedDisplay = nowBookedMovies.slice(
    (currentPage - 1) * 4,
    currentPage * 4
  );

  console.log(moviesBookedDisplay);
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {moviesBookedDisplay.map((movie: Movie) => (
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