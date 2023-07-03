import React from "react";
import { Link } from "react-router-dom";
import { Movie } from "../types/api";
import { cn } from "../lib/utils";

type VariantProps = {
  variant?: "default" | "rounded" 
  movie: Movie
} 

 export function MovieCard({variant="default", movie}:VariantProps) {
  const style:Record<typeof variant, string>={
    default:"rounded-none",
    rounded:"rounded-sm",
  }
  return (
    <Link to={`/movies/${movie.id}`}>
    <div className={cn(
        ' ',
       style[variant]
        
      )} >
      
      
        <img
          src={movie.poster_path? movie.poster_path:"https://www.themoviedb.org/t/p/w1280/hpWLjEDl18syQeISgDQYCVWamEW.jpg"} 
          alt={movie.title}
          
        />
    </div>
      </Link>
  );
};

