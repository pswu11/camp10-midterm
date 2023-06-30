
export function Movies() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTgwNjYxYTU1OWNjYmQyMTVlOWVmNDY1MDQ1YTk0NSIsInN1YiI6IjY0OWVjMmNmYzA3MmEyMDBlY2U0ZTZmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6phbcGXv_1M10j_rCSXwoLwFf5oRb8i8wbJbC2ob_mc'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  return <div>Movies placeholder.</div>;
}

