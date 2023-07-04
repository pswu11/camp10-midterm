import { Link } from 'react-router-dom';
import { Movie } from '../types/api';

type Props = {
  movie: Movie;
  variant: 'upcoming' | 'now_playing';
};

const MovieCard = ({ movie, variant }: Props) => (
  <Link to={`/movies/${movie.id}`}>
    <div
      className={
        variant === 'upcoming'
          ? 'rounded-lg w-44 h-56 overflow-hidden'
          : 'w-full'
      }
    >
      <img
        src={
          movie.poster_path ||
          'https://images.unsplash.com/photo-1607317146126-64b09b69eb4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80'
        }
        alt={movie.title}
        className="object-cover w-full h-full"
      />
    </div>
  </Link>
);

export default MovieCard;
