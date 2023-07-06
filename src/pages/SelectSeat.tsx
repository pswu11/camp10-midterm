import Seat from '../components/Seat';
import { BookingSummary } from '../components/BookingSummary';
import { useState } from 'react';

type Seat = {
  id: number;
  code: string;
  isSelected: boolean
  isReserved: boolean
}

// This will come from backend eventually
const mockAllSeats: Seat[] = [
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
];

const seatPrices = {
  "Front": 12.99,
  "Middle": 14.75,
  "Back": 16.99
}

export type SeatType = "Front" | "Middle" | "Back"

export type SelectedSeat = {
  id: number;
  code: string;
  type: SeatType
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
              const seatType = item.code.split("-")[0] === "A" ? "Front" : "Middle"
              const seatPrice = seatPrices[seatType]
              if (!item.isSelected) {
                item.isSelected = true
                updatedSelectedSeats = [...selectedSeats, {...item, price: seatPrice, type: seatType}];
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