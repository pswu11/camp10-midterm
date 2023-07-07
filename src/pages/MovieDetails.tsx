import { useRouteLoaderData } from 'react-router-dom';
import { Button } from '../components/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Movie } from '../types/api';

export function MovieDetails() {
  const [creditData, setCreditData] = useState([]);
  const { movie } = useRouteLoaderData('currentMovie') as { movie: Movie };

  const getCredits = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/550/credits?api_key=830580354c9aaf7a57d3f02a7a0010ae`
      );
      setCreditData(res.data.crew);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCredits();
  }, []);

  const {
    id,
    title,
    backdrop_path,
    runtime,
    vote_average,
    release_date,
    overview,
  } = movie;

  return (
    <div className="flex flex-col px-5 py-6 ">
      <img
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt=""
      />
      <h1 className="text-white pt-6 pb-3 font-700 text-[1.25rem]">{title}</h1>
      <div className="flex pb-3 justify-between">
        <div className="flex gap-6">
          <p className="text-s text-white font-500">
            {release_date.slice(0, 4)}{' '}
          </p>
          <p className="text-s text-white-dimmed font-500">Horror/Thriller</p>
          <p className="text-s text-white-dimmed font-500">
            {Math.floor(runtime / 60) + 'h ' + ((runtime % 60) + 'm')}
          </p>
        </div>
        <p className="text-s text-white-dimmed font-500 ">
          {' '}
          <span className="text-green">
            {Math.round(vote_average * 10) + '%'}
          </span>{' '}
          Score
        </p>
      </div>
      <div className="flex justify-between items-center pb-4">
        <div className="flex flex-col gap-2">
          <p className="text-s text-white-dimmed font-700">
            Director:{' '}
            <span className="text-white font-700 pl-[0.62rem]">
              Damian Leone
            </span>
          </p>
          <p className="text-s text-white-dimmed font-500">
            Writer:{' '}
            <span className="text-white font-500 pl-[1.44rem]">
              Damian Leone
            </span>
          </p>
        </div>
        <Button
          variant="secondary"
          size="small"
          className="w-[10.4375rem] h-[2.375rem] "
          label="Cast & Crew"
        ></Button>
      </div>
      <hr className="border-white-dimmed" />
      <div className="flex flex-col pt-4 pb-[3.19rem]">
        <p className="text-white font-700 text-m pb-3">Synopsis</p>
        <p className="text-white-dimmed text-m font-500 leading-6 h-[3.125rem] truncate">
          {overview}
        </p>
        <a
          className="text-yellow text-m font-500 underline underline-offset-2"
          href={`https://www.themoviedb.org/movie/${id}?language=de-DE`}
        >
          {' '}
          Read more
        </a>
      </div>
      <Button> Get Reservation</Button>
    </div>
  );
}
