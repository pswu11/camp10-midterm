import { Link, useRouteLoaderData } from 'react-router-dom';
import { Button } from '../components/Button';
import { Credits, Movie } from '../types/api';
import { useState } from 'react';
import { IoChevronBackSharp } from 'react-icons/io5';
import { BsHeartFill, BsHeart } from 'react-icons/bs';

export function MovieDetails() {
  const { movie } = useRouteLoaderData('currentMovie') as { movie: Movie };
  const { resCreditsData } = useRouteLoaderData('currentMovie') as {
    resCreditsData: Credits;
  };
  const [heartIcon, toggleHeart] = useState(false);
  const {
    id,
    title,
    backdrop_path,
    runtime,
    vote_average,
    release_date,
    genres,
    overview,
  } = movie;
  const { crew } = resCreditsData;

  const filteredCrew: string[] = [];
  crew.map((x, y) => {
    if (
      x.job === 'Director' ||
      x.job === 'Novel' ||
      (x.job !== 'Novel' && x.known_for_department == 'Writing')
    ) {
      filteredCrew.push(
        x.name.length >= 15 ? x.name.slice(0, 14) + '..' : x.name
      );
    }
  });

  console.log(filteredCrew);

  return (
    <div className="flex flex-col px-5 py-6 ">
      <div className="flex h-[2.375rem] justify-between items-center text-white text-l font-700">
        <Link to="/movies">
          <IoChevronBackSharp />
        </Link>
        <p> Movie Details </p>
        {heartIcon ? (
          <BsHeartFill
            className="text-red"
            onClick={() => toggleHeart(!heartIcon)}
          />
        ) : (
          <BsHeart
            className="text-red"
            onClick={() => toggleHeart(!heartIcon)}
          />
        )}
      </div>
      <img
        className="rounded-lg mt-3"
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt=""
      />
      <h1 className="text-white pt-6 pb-3 font-700 text-[1.25rem]">
        {title.length >= 30 ? title.slice(0, 31) + '..' : title}
      </h1>
      <div className="flex pb-3 justify-between">
        <div className="flex gap-6">
          <p className="text-s text-white font-500">
            {release_date.slice(0, 4)}{' '}
          </p>
          <p className="text-s text-white-dimmed font-500">
            {genres[0].name}/{genres[1].name}
          </p>
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
        <div className="flex flex-col gap-2 truncate">
          <p className="text-s text-white-dimmed font-700">
            Director:{' '}
            <span className="text-white font-700 pl-[0.62rem] ">
              {filteredCrew[0] ?? ' Unknown '}
            </span>
          </p>
          <p className="text-s text-white-dimmed font-500 overflow-hidden">
            Writer:{' '}
            <span className="text-white font-500 pl-[1.44rem] ">
              {filteredCrew[1] ?? filteredCrew[3] ?? ' Unknown '}
            </span>
          </p>
        </div>
        <Button
          // onClick={getData}
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
