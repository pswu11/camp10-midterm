import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import MovieCard from '../components/MovieCard';
import { MovieModel } from '../types/api';
import { useInView } from 'react-intersection-observer';
// import { discoverMoviesWithGenres } from '../api/movies';

type MovieResult = {
  page: number;
  results: MovieModel[];
  total_pages: number;
  total_results: number;
};

export function Movies() {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  // getUpcomingMovies();
  // const nowPlayingMovies = useLoaderData() as MovieModel[];
  async function getMovies({ pageParam = 1 }) {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?page=${pageParam}&limit=4&api_key=0be126323ec3cb62353aea3b8ff71936`
      )
      .then(res => res.data);
  }

  const { data, fetchNextPage, isLoading } = useInfiniteQuery<MovieResult>({
    queryKey: ['movies'],
    queryFn: getMovies,
    getNextPageParam: lastPage => {
      if (lastPage.page === lastPage.total_pages) return undefined;
      return lastPage.page + 1;
    },
  });

  if (isLoading || !data) return <p>Loading...</p>;

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="grid grid-cols-2 gap-4 overflow-y-scroll h-[550px]">
        {data.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.results.map((movie, idx) => {
              const last = idx === group.results.length - 1;
              return (
                <MovieCard
                  ref={last ? ref : undefined}
                  movie={movie}
                  variant="now_playing"
                  key={movie.id}
                />
              );
            })}
          </React.Fragment>
        ))}

        {/* {nowPlayingMovies.results.map((movie: MovieModel) => (
          <MovieCard movie={movie} variant="now_playing" key={movie.id} />
        ))} */}
      </div>
    </div>
  );
}
