// ingest movies from TMDB API and generate screenings

const NUMBER_OF_PAGES = 2;
const NUMBER_OF_DAYS = 30;

var allMovies = [];
var uniqueMovies = [];
var allScreeniings = [];

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTI0ZjQ4MGUzNjZmZjRkY2VlNjNjYWJlY2FhMjIxMCIsInN1YiI6IjY0OWU5YWVkM2U2ZjJiMDEzOTJkZWViNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zKnR_qol4U8_r08IiwZ0zYS9UQ4qMUZkIHwOp0he7Xw',
  },
};

async function fetchMoviesFromAPI(page) {
  for (let i = 1; i <= page; i++) {
    await fetch(
      'https://api.themoviedb.org/3/discover/movie?page=1&release_date.lte=2023-07-19',
      options
    )
      .then(response => response.json())
      .then(data => {
        const results = data.results;
        const oldMovies = [
          ...results.map(movie => {
            return {
              id: movie.id,
              releaseDate: new Date(movie.release_date),
            };
          }),
        ];
        allMovies = [...allMovies, ...oldMovies];
        console.log(results, oldMovies, allMovies);
      })
      .catch(err => console.error(err));

    await fetch(
      'https://api.themoviedb.org/3/discover/movie?page=1&release_date.gte=2023-07-20',
      options
    )
      .then(response => response.json())
      .then(data => {
        const results = data.results;
        const newMovies = [
          ...results.map(movie => {
            return {
              id: movie.id,
              releaseDate: new Date(movie.release_date),
            };
          }),
        ];
        allMovies = [...allMovies, ...newMovies];
        console.log(results, newMovies, allMovies);
      })
      .catch(err => console.error(err));
  }
}

async function fetchMoviesFromDatabase() {
  await fetch(`http://localhost:8000/movie`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => {
      uniqueMovies = [...data];
    })
    .catch(err => console.error(err));
  console.log(uniqueMovies.length);
}

async function ingestMovies() {
  await fetchMoviesFromAPI(NUMBER_OF_PAGES);
  console.log('allMovies: ', allMovies.length);
  let movieCounter = 0;
  for (let i = 0; i < allMovies.length; i++) {
    try {
      const response = await fetch(`http://localhost:8000/movie`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(allMovies[i]),
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
  }
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

function generateAvailableDates(numberOfDays) {
  const today = new Date();
  const options = {
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
      const dateTime = new Date(dateTimeString);
      allDateTime.push(dateTime);
    }
  }

  await fetchMoviesFromDatabase();
  const movieIds = uniqueMovies.map(movie => movie.id);
  console.log(movieIds.length);

  for (let datetime of allDateTime) {
    for (let id of movieIds) {
      const screening = {
        movieId: id,
        datetime,
        seatAvailability: Array(54).fill(0),
      };
      allScreeniings.push(screening);
    }
  }
  console.log(allScreeniings.length);
  await fetch(`http://localhost:8000/screening`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(allScreeniings),
  })
    .then(response => console.log(response.json()))
    .catch(err => console.error(err));
}

async function ingestAll() {
  await ingestMovies();
  await ingestScreenings();
}

ingestAll();
