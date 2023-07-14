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

// Seats Matrix

const seatsMatrix = [
  [null, 'A-1', 'A-2', 'A-3', null, 'A-4', 'A-5', 'A-6', null],
  ['B-1', 'B-2', 'B-3', 'B-4', null, 'B-5', 'B-6', 'B-7', 'B-8'],
  ['C-1', 'C-2', 'C-3', 'C-4', null, 'C-5', 'C-6', 'C-7', 'C-8'],
  ['D-1', 'D-2', 'D-3', 'D-4', null, 'D-5', 'D-6', 'D-7', 'D-8'],
  ['E-1', 'E-2', 'E-3', 'E-4', null, 'E-5', 'E-6', 'E-7', 'E-8'],
  [null, 'F-1', 'F-2', 'F-3', null, 'F-4', 'F-5', 'F-6', null],
];

// const seatStates: SeatType[] = [
//   {
//     code: 'A-3',
//     isSelected: false,
//     isReserved: false,
//   },
// ];

// Creating a seatObject with all the properties we need for handling the click event
const seatsObject = seatsMatrix.map(row => {
  return row.map(seat => {
    return {
      code: seat,
      isSelected: false,
      isReserved: false,
    };
  });
});

function returnSeatType(seatCode: string) {
  const row = seatCode.split('-')[0];
  switch (row) {
    case 'A':
      return 'Front';
    case 'F':
      return 'Back';
    default:
      return 'Middle';
  }
}
// What does it mean?
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
  // console.log(seatsObject);
  return (
    <>
      {/* screen */}
      <h4 className="text-white text-s">
        This will later be filled by the header component
      </h4>
      <div className="flex-col px-7 justify-center items-center mx-7">
        <div className=" bg-yellow h-1 w-63"></div>
        <div className="h-5 opacity-25 bg-gradient-to-b from-yellow to-dark"></div>
      </div>

      {/* Creating the seats */}
      <div className="grid grid-rows-6 grid-cols-9 gap-3 m-5">
        {seatsObject.map(row => {
          return row.map((seat, seatIdx) => {
            if (!seat.code) {
              return <div key={seatIdx} />;
            }

            return (
              <Seat
                key={seatIdx}
                seatCode={seat.code}
                isSelected={seat.isSelected}
                isReserved={seat.isReserved}
                onClick={() => {
                  if (!seat.isSelected) {
                    seat.isSelected = true;
                    updatedSelectedSeats = [...selectedSeats, seat];
                    setSelectedSeats(updatedSelectedSeats);
                  } else {
                    seat.isSelected = false;
                    updatedSelectedSeats = selectedSeats.filter(
                      seat => seat.code !== seat.code
                    );
                    setSelectedSeats(updatedSelectedSeats);
                  }
                  //Update ticket store
                  console.log(updatedSelectedSeats);
                  setSeat(updatedSelectedSeats.map(seat => seat.code));
                  setPrice(
                    Number(
                      createBookingSummary(updatedSelectedSeats)
                        .reduce(
                          (acc, seat) => acc + seat.amount * seat.price,
                          0
                        )
                        .toFixed(2)
                    )
                  );
                }}
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
