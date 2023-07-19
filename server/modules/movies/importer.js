// ingest movies from TMDB API and generate screenings

var allMovies = [];
var uniqueMovies = [];
var allScreeniings = [{dateTime: "dddd", movieId: 123456}, {dateTime: "dddd", movieId: 123456}, {dateTime: "dddd", movieId: 123456}];

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      `Bearer ${process.env.VITE_TMDB_TOKEN}`,
  },
};

async function ingestMoviesFromAPI(page) {
  for (let i = 1; i <= page; i++) {
    // get movies before July 19
    await fetch(
      `https://api.themoviedb.org/3/discover/movie?page=${page}&release_date.lte=2023-07-19`,
      options
    )
      .then(response => response.json())
      .then(response => {
        const now = [
          ...response.results.map(movie => {
            return {
              id: movie.id,
              releaseDate: new Date(movie.release_date),
            };
          }),
        ];
        allMovies = [...now, ...allMovies];
      })
      .catch(err => console.error(err));

    // get movies after July 20
    await fetch(
      `https://api.themoviedb.org/3/discover/movie?page=${page}&primary_release_date.gte=2023-07-20`,
      options
    )
      .then(response => response.json())
      .then(response => {
        const already = [
          ...allMovies,
          ...response.results.map(movie => {
            return {
              id: movie.id,
              releaseDate: new Date(movie.release_date),
            };
          }),
        ];
        allMovies = [...already, ...allMovies];
      })
      .catch(err => console.error(err));
  }

  uniqueMovies = allMovies.filter((obj, index) => {
    return (
      index ===
      allMovies.findIndex(item => {
        return item.id === obj.id && item.releaseDate === obj.releaseDate;
      })
    );
  }).map(screening => {
    return {
      ...screening,
      seatAvailability: Array(54).fill(0),
    }
  });

  console.log('uniqueMovies: ', uniqueMovies.length);

  for (let i = 0; i < uniqueMovies.length; i++) {
    await fetch(`http://localhost:8000/movie`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uniqueMovies[i]),
    })
      .then(response => console.log(response))
      .catch(err => console.error(err));
    console.log(`Movie ${i + 1} added with id: ${uniqueMovies[i].id}`);
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
  const allDates = generateAvailableDates(30);
  const allDateTime = [];
  for (let date of allDates) {
    for (let time of fixedTimes) {
      const dateTimeString = `${date} ${time}`;
      const dateTime = new Date(dateTimeString);
      allDateTime.push(dateTime);
    }
  }

  for (let datetime of allDateTime) {
    for (let movie of uniqueMovies) {
      const screening = {
        movieId: movie.id,
        dateTime: datetime,
      };
      allScreeniings.push(screening);
    }
  }

  await fetch(`http://localhost:8000/screening`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(allScreeniings),
  })
    .then(response => console.log(response))
    .catch(err => console.error(err));
}



async function ingestAll() {
  await ingestMoviesFromAPI(1);
  await ingestScreenings();
}

ingestAll();
