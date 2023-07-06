import Seat from '../components/Seat';
import { BookingSummary } from '../components/BookingSummary';
import { useState } from 'react';

const mockAllSeats: SelectedSeat[] = [
  {
    id: 1,
    code: 'C-3',
    price: 12.99,
    isSelected: false,
    isReserved: false,
  },
  {
    id: 2,
    code: 'C-4',
    price: 12.99,
    isSelected: false,
    isReserved: false,
  },
  {
    id: 3,
    code: 'D-5',
    price: 14.75,
    isSelected: false,
    isReserved: false,
  },
  {
    id: 4,
    code: 'E-8',
    price: 14.99,
    isSelected: false,
    isReserved: false,
  },
];

export type SelectedSeat = {
  id: number;
  code: string;
  price: number;
  isSelected: boolean
  isReserved: boolean
};

export function SelectSeat() {
  const [selectedSeats, updateSelectedSeats] = useState([] as SelectedSeat[]);
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
              let updatedSelectedSeats: SelectedSeat[] = []
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