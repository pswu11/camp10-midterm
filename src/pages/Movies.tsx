import { useLoaderData } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { Movie } from '../types/api';
import PaginationButton from '../components/PaginationButton';

export function Movies() {
  const nowPlayingMovies = useLoaderData() as Movie[];
  
  const [currentPage, setCurrentPage] = useState(1)
  
  
  const moviesDisplay = nowPlayingMovies.slice((currentPage-1)*4,currentPage*4)
  
     
   

  console.log(nowPlayingMovies);
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {nowPlayingMovies.map((movie: Movie) => (
        <MovieCard movie={movie} variant="now_playing" key={movie.id} />
        
      ))}
      
    <div>
    
    </div>
    </div>
    
  );
}
