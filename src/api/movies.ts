import axios from 'axios';
import { Movie } from '../types/api';
import { Params } from 'react-router-dom';

export const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const getCurrentMovie = async ({
  params,
}: {
  params: Params<string>;
}) => {
  const { movieId } = params;
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=830580354c9aaf7a57d3f02a7a0010ae`
  );
  const movie = res.data as Movie;
  return movie;
};
