import Seat from '../components/Seat';
import { BookingSummary } from '../components/BookingSummary';
import { useState } from 'react';

export type SeatType = {
  id: number;
  code: string;
  isSelected: boolean
  isReserved: boolean
}

// This will come from backend eventually
const mockAllSeats: SeatType[] = [
  {
    id: 1,
    code: 'A-3',
    isSelected: false,
    isReserved: false,
  },
  {
    id: 2,
    code: 'A-4',
    isSelected: false,
    isReserved: false,
  },
  {
    id: 3,
    code: 'C-3',
    isSelected: false,
    isReserved: false,
  },
  {
    id: 4,
    code: 'C-4',
    isSelected: false,
    isReserved: false,
  },
  {
    id: 5,
    code: 'H-8',
    isSelected: false,
    isReserved: false,
  },
  {
    id: 6,
    code: 'D-10',
    isSelected: false,
    isReserved: false,
  },
  {
    id: 7,
    code: 'D-11',
    isSelected: false,
    isReserved: false,
  },
];

export function SelectSeat() {
  const [selectedSeats, updateSelectedSeats] = useState([] as SeatType[]);
  return (
    <>
      <div className="flex gap-x-2 mx-auto">
        {mockAllSeats.map(item => (
          <Seat
            key={item.id}
            seatid={item.id}
            seatCode={item.code}
            isReserved={item.isReserved}
            isSelected={item.isSelected}
            onClick={() => {
              let updatedSelectedSeats: SeatType[] = []
              if (!item.isSelected) {
                item.isSelected = true
                updatedSelectedSeats = [...selectedSeats, item];
                updateSelectedSeats(updatedSelectedSeats)
              } else {
                item.isSelected = false
                updatedSelectedSeats = selectedSeats.filter(seat => seat.id !== item.id)
                updateSelectedSeats(updatedSelectedSeats)
              }
            }}
          />
        ))}
      </div>
      <BookingSummary selectedSeats={selectedSeats} />
    </>
  );
}