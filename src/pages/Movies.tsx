export function Movies() {
  const nowPlayingMovies = useLoaderData() as Movie[];
  console.log(nowPlayingMovies);
  return (
    <div>
      <h1>Movies</h1>
    </div>
  );
}
