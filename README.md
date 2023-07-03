# camp10-midterm

https://www.figma.com/file/TOCJzJFMXE7PL1dQyGWqXZ/midterm?type=design&node-id=193-51&mode=design&t=4jEuQWIjPhpPolEq-0


# How to: dotenv

Link: https://www.npmjs.com/package/dotenv

- create a file named `.env`
- add `*.env` to `.gitignore`
- add `API_KEY="your api key"` to `.env`


# List API Endpoints:

API documentation: https://developer.themoviedb.org/reference/intro/getting-started

- genres of all the movies: `https://api.themoviedb.org/3/genre/movie/list`
- movie detail: `https://api.themoviedb.org/3/movie/{movie_id}`
- list of upcoming movies: `https://api.themoviedb.org/3/movie/upcoming` (List of Movies that will release soon) 
- list of now playing movies: `https://api.themoviedb.org/3/movie/now_playing` (List of Movies that are currently playing) 
- credits: `https://api.themoviedb.org/3/movie/{movie_id}/credits` (this includes cast and crew)
- person: `https://api.themoviedb.org/3/person/{person_id}`