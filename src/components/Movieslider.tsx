import React from 'react'
import { UpcomingMovie } from '../types/api';
import { Link } from 'react-router-dom';



type UpcomingmovieProps = {
    upcoming: UpcomingMovie[]
    
  }
  




export function Movieslider({upcoming}:UpcomingmovieProps) {
  
    return (
    <>
        <div className='flex flex-row gap-8 container-snap snap-x snap-mandatory h-screen overflow-scroll w-full'>
        {upcoming.map((upcoming) => (
              <Link className='snap-center w-2/5 -h-[228px] shrink-0 round' to={`/movies/${upcoming.id}`} key={upcoming.id}>
              <img src={`https://image.tmdb.org/t/p/w500/${upcoming.poster_path}`}/>
              </Link>
              ))}
      
           
        </div>
    </>
    )
}
export default Movieslider;