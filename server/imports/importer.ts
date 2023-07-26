// ingest movies from TMDB API and generate screenings
// pnpm ts-node imports/importer.ts

import { Movie, Screening } from '@prisma/client';
import dotenv from 'dotenv';
dotenv.config();

const NUMBER_OF_PAGES = 4; // how many pages of TMDB results
const NUMBER_OF_DAYS = 24; // days to generate for booking
const TODAY = new Date().toISOString().split('T')[0];
const API_TOKEN = process.env.VITE_TMDB_TOKEN;
const API_ENDPOINT = "http://localhost:8000"

type APIMovie = {
  id: number;
  title: string;
  backdrop_path: string | null;
  poster_path: string | null;
  genre_ids: number[];
  overview: string;
  release_date: string;
  vote_average: number;
};

let allMovies: Movie[] = [];
let uniqueMovies: Movie[] = [];
let allScreeniings: Screening[] = [];

const APIOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

async function fetchMoviesFromAPI(page: number) {
  console.log('TODAY:', TODAY);
  for (let i = 1; i <= page; i++) {
    const UPCOMING_ENDPOINT = `https://api.themoviedb.org/3/discover/movie?page=${i}&primary_release_year=2023&primary_release_date.gte=${TODAY}&sort_by=popularity.desc`;
    const PAST_ENDPOINT = `https://api.themoviedb.org/3/discover/movie?page=${i}&primary_release_year=2023&primary_release_date.lte=${TODAY}&sort_by=popularity.desc`;

    await fetch(UPCOMING_ENDPOINT, APIOptions)
      .then(response => response.json())
      .then(data => {
        const results = data.results;
        results.forEach((movie: APIMovie) => {
          if (movie.poster_path && movie.backdrop_path) {
            const movieObject = {
              id: movie.id,
              releaseDate: new Date(movie.release_date),
              seatAvailability: Array.from({ length: 54 }).fill(0),
            } as Movie;
            allMovies.push(movieObject);
          }
        });
      })
      .catch(err => console.error(err));

    await fetch(PAST_ENDPOINT, APIOptions)
      .then(response => response.json())
      .then(data => {
        const results = data.results;
        results.forEach((movie: APIMovie) => {
          if (movie.poster_path && movie.backdrop_path) {
            const movieObject = {
              id: movie.id,
              releaseDate: new Date(movie.release_date),
              seatAvailability: Array.from({ length: 54 }).fill(0),
            } as Movie;
            allMovies.push(movieObject);
          }
        });
      })
      .catch(err => console.error(err));
  }
  console.log('allMovies: ', allMovies.length);
}

async function ingestMovies() {
  let movieCounter = 0;
  allMovies.forEach(async movie => {
    try {
      const response = await fetch(`${API_ENDPOINT}/movie`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie),
      });
      if (response.status === 422) {
        throw new Error(
          'HTTP error, status = ' + response.status + ', duplicated movieId'
        );
      } else {
        movieCounter++;
        console.log(`${movieCounter} movie(s) added`);
      }
    } catch (err) {
      console.log(err);
    }
  });
}

async function fetchMoviesFromDatabase() {
  await fetch(`${API_ENDPOINT}/movie`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => {
      uniqueMovies = [...data];
    })
    .catch(err => console.error(err));
  console.log('countUnique:', uniqueMovies);
}

// generate Screenings for each movie

const fixedTimes = [
  '10:30',
  '12:55',
  '14:30',
  '15:45',
  '17:50',
  '19:30',
  '20:45',
  '22:30',
];

function generateAvailableDates(numberOfDays: number) {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
  };
  const nextDays = [];
  for (let i = 0; i <= numberOfDays - 1; i++) {
    const nextDay = new Date();
    nextDay.setDate(today.getDate() + i);
    nextDays.push(nextDay.toLocaleString('en-GB', options));
  }
  return nextDays;
}

async function ingestScreenings() {
  const allDates = generateAvailableDates(NUMBER_OF_DAYS);
  const allDateTime = [];
  for (let date of allDates) {
    for (let time of fixedTimes) {
      const dateTimeString = `${date} ${time}`;
      const dateTime = new Date(dateTimeString).setFullYear(2023);
      allDateTime.push(dateTime);
    }
  }

  await fetchMoviesFromDatabase();
  const movieIds = uniqueMovies.map(movie => movie.id);
  console.log("databaseMovieCount:", movieIds.length);

  for (let datetime of allDateTime) {
    for (let id of movieIds) {
      const screening = {
        movieId: id,
        datetime: new Date(datetime),
        seatAvailability: Array(54).fill(0),
      } as Screening;
      allScreeniings.push(screening);
    }
  }
  try {
    await fetch(`${API_ENDPOINT}/screening`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(allScreeniings),
    });
  } catch (error) {
    console.log(error);
  }
}

async function ingestAll() {
  await fetchMoviesFromAPI(NUMBER_OF_PAGES);
  await ingestMovies();
  await fetchMoviesFromDatabase();
  await ingestScreenings();
}

ingestAll();
