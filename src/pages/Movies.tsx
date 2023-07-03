import MovieCard, { Movie } from "../components/MovieCard";

const testMovie: Movie = {
  id: "1",
  poster_path:"https://www.themoviedb.org/t/p/w1280/4W2iA3GpCXhGa3IrStbMkfgrI8D.jpg",
  title: " Last Year in Marienbad",

  
}

export function Movies() {
  return <div>
    <MovieCard movie={testMovie}></MovieCard>
   
    
  </div>;
}
