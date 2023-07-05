// import {useLoaderData} from "react-router-dom"
// probably going to need this

import { useState } from 'react';
import Seat from '../components/Seat';
import { BookingSummary } from '../components/BookingSummary';

export function SelectSeat() {
  const [isSelected, setIsSelected] = useState(false);
  const handleSeatClick = (seatId: number) => {
    setIsSelected(!isSelected);
    //remove this when you understand the logic
    console.log(seatId);
  };
  return (
    <>
      <Seat
        seatid={1}
        onClick={() => handleSeatClick(1)}
        isSelected={isSelected}
      />
      <BookingSummary />
    </>
  );
}
