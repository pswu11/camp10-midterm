import Seat from '../components/Seat';
import { BookingSummary } from '../components/BookingSummary';
import { SummaryRow } from '../types/booking';
import { useState } from 'react';
import { SeatType } from '../types/booking';
import { useRouteLoaderData } from 'react-router-dom';
import { Movie } from '../types/api';
import { useTicketStore } from '../stores/ticket';
import { useEffect } from 'react';

// This is purely made up for now
const seatPrices = {
  Front: 12.99,
  Middle: 14.75,
  Back: 16.99,
};

const seatsMatrix = [
  [0, 1, 1, 1, 0, 1, 1, 1, 0],
  [1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 1, 1],
  [0, 1, 1, 1, 0, 1, 1, 1, 0],
];

function returnSeatType(seatCode: string) {
  const row = seatCode.split('-')[0];
  switch (row) {
    case '1':
      return 'Front';
    case '6':
      return 'Back';
    default:
      return 'Middle';
  }
}

// Transform selected seats into summaries
function createBookingSummary(selectedSeats: SeatType[]) {
  const summaries: SummaryRow[] = [];
  selectedSeats.forEach(seat => {
    const type = returnSeatType(seat.code);
    if (!summaries.some(row => row.type === type)) {
      summaries.push({ type: type, amount: 1, price: seatPrices[type] });
    } else {
      summaries.forEach(row => {
        if (row.type === type) {
          row.amount += 1;
        }
      });
    }
  });
  return summaries;
}

export function SelectSeat() {
  const [selectedSeats, setSelectedSeats] = useState([] as SeatType[]);
  const { seat, setSeat, setPrice } = useTicketStore();
  const { movie: currentMovie } = useRouteLoaderData('currentMovie') as {
    movie: Movie;
  };
  let updatedSelectedSeats: SeatType[] = [];
  useEffect(() => {
    setSeat([]);
  }, []);

  let startingNumber = 0;
  return (
    <>
      <h4 className="text-white text-s">
        This will later be filled by the header component
      </h4>
      <div className="flex-col px-7 justify-center items-center mx-7">
        <div className=" bg-yellow h-1 w-63"></div>
        <div className="h-5 opacity-25 bg-gradient-to-b from-yellow to-dark"></div>
      </div>

      <div className="grid grid-rows-6 grid-cols-9 gap-3 m-5">
        {seatsMatrix.map((row, rowIdx) => {
          
          return row.map((seat, seatIdx) => {
            if (!seat) {
              return <div key={`${rowIdx}-${seatIdx}}`} />;
            }
            startingNumber += 1;
            console.log(seatIdx);
            console.log(`${rowIdx + 1}-${startingNumber}`);
            return (
              <Seat
                key={`${rowIdx}-${seatIdx}}`}
                seatid={`${rowIdx + 1}-${seatIdx + 1}`}
                seatCode={`${rowIdx + 1}-${startingNumber}`}
                isSelected={false}
                isReserved={false}
              />
            );
          });
        })}
      </div>
      <BookingSummary
        summaries={createBookingSummary(selectedSeats)}
        buttonLink={`/movies/${currentMovie.id}/ticket`}
        buttonDisabled={seat.length === 0 ? true : false}
      />
    </>
  );
}
