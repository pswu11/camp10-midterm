import { cn } from '../lib/utils';
import React, { useState } from 'react';

//http://localhost:5173/movies/1/select-seat

type SeatProps = {
  seatid: number;
  seatCode: string;
  isReserved?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Seat({ seatid, seatCode, isReserved = false, ...props }: SeatProps) {
  // just to make the toggle work for now, but later
  // we should handle all the seat states on the select seat page
  const [isSelected, setIsSelected] = useState(false)
  return (
    <button
      className={cn(
        'w-7 h-7 rounded',
        isReserved ? 'bg-white' : isSelected ? 'bg-yellow' : 'bg-dark-light'
      )}
      onClick={() => {
        setIsSelected(!isSelected)
        console.log(seatCode)
      }}
      {...props}
    />
  );
}

export default Seat;
