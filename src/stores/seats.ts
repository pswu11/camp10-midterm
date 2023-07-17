// seatStore.ts
import { create } from 'zustand';
import { SeatType } from '../types/booking';

type SeatLayoutStore = {
  seatLayout: SeatType[][];
  selectedSeats: SeatType[];
  setSeatLayout: (value: SeatType[][]) => void;
  selectSeat: (seat: SeatType) => void;
  deselectSeat: (seat: SeatType) => void;
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

// Creating a seatObject with all the properties we need for handling the click event
const seatsObject = seatsMatrix.map(row => {
  return row.map(seat => {
    return {
      code: seat,
      isSelected: false,
      isReserved: Math.random() < 0.2, // 20% chance of being reserved
    };
  });
});

export const useSeatLayoutStore = create<SeatLayoutStore>(set => ({
  seatLayout: seatsObject,
  selectedSeats: [],
  setSeatLayout: value => set({ seatLayout: value }),
  selectSeat: seat =>
    set(state => ({ selectedSeats: [...state.selectedSeats, seat] })),
  deselectSeat: seat =>
    set(state => ({
      selectedSeats: state.selectedSeats.filter(s => s.code !== seat.code),
    })),
}));
