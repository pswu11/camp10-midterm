import React from "react";
import { Link } from "react-router-dom";

export type Movie = {
    id: string
    poster_path:string
    title: string

}

type MovieCardProps = {
  movie: Movie
}

const MovieCard = ({ movie }:MovieCardProps) => {
  return (
    <Link to={`/movies/${movie.id}`}>
    <div className="movie-card" >
      
        <img
          src={movie.poster_path}
          alt={movie.title}
          className="movie-poster"
        />
    </div>
      </Link>
  );
};

export default MovieCard;
