import { cn } from '../lib/utils';
import React from 'react';

//http://localhost:5173/movies/1/select-seat

type SeatProps = {
  seatid: number;
  isSelected?: boolean;
  isReserved?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Seat({ seatid, isSelected, isReserved = false, ...props }: SeatProps) {
  return (
    <button
      className={cn(
        'w-7 h-7 rounded',
        isReserved ? 'bg-white' : isSelected ? 'bg-yellow' : 'bg-dark-light'
      )}
      {...props}
    />
  );
}

export default Seat;
