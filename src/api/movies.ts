import axios from 'axios';
import { Credits, Movie, MovieModel } from '../types/api';
import { Params } from 'react-router-dom';

export const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const getCurrentMovie = async ({
  params,
}: {
  params: Params<string>;
}) => {
  const { movieId } = params;
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }`
  );
  const movie = res.data as Movie;
  return movie;
};

export const getCredits = async ({ params }: { params: Params<string> }) => {
  const { movieId } = params;
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }`
  );
  const credits = res.data as Credits;
  return credits;
};

export const getUpcomingMovies = async () => {
  const movies: MovieModel[] = await axios
    .get(`http://localhost:8000/movie/upcoming`)
    .then(res => res.data);
  // const upcomingMovies = [] as Movie[];
  // for (let movie of movies) {
  //   const movieInfo: Movie = await axios.get(
  //     `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${
  //       import.meta.env.VITE_TMDB_KEY
  //     }`
  //   ).then(res => res.data);
  //   upcomingMovies.push(movieInfo)
  // }
  // console.log(movies.length);
  return movies
};

export const getNowPlayingMovies = async () => {
  const movies: MovieModel[] = await axios
    .get(`http://localhost:8000/movie/nowplaying`)
    .then(res => res.data);
  // const nowplayingMovies = [] as Movie[];
  // for (let movie of movies) {
  //   const movieInfo: Movie = await axios.get(
  //     `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${
  //       import.meta.env.VITE_TMDB_KEY
  //     }`
  //   ).then(res => res.data);
  //   nowplayingMovies.push(movieInfo)
  // }
  // console.log(movies.length);
  return movies
};

export const discoverMoviesWithoutGenres = async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&api_key=${
      import.meta.env.VITE_TMDB_KEY
    }`
  );
  const movies: Movie[] = res.data.results;

  return movies;
};
