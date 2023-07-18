// SelectSeat.tsx
import Seat from '../components/Seat';
import { BookingSummary } from '../components/BookingSummary';
import { SummaryRow } from '../types/booking';
import { useEffect } from 'react';
import { SeatType } from '../types/booking';
import { useRouteLoaderData } from 'react-router-dom';
import { Movie } from '../types/api';
import { useTicketStore } from '../stores/ticket';
import { useSeatLayoutStore } from '../stores/seats';
import Header from '../components/Header';

const seatPrices = {
  Front: 12.99,
  Middle: 14.75,
  Back: 16.99,
};

const returnSeatType = (seatCode: string) =>
  seatCode.startsWith('A')
    ? 'Front'
    : seatCode.startsWith('F')
    ? 'Back'
    : 'Middle';

const createBookingSummary = (selectedSeats: SeatType[]) => {
  const summaries: SummaryRow[] = [];
  selectedSeats.forEach(seat => {
    const type = returnSeatType(seat.code!);
    const summary = summaries.find(row => row.type === type);
    summary
      ? (summary.amount += 1)
      : summaries.push({ type: type, amount: 1, price: seatPrices[type] });
  });
  return summaries;
};

export function SelectSeat() {
  const { seat, setSeat, setPrice } = useTicketStore();
  const { seatLayout, setSeatLayout, selectedSeats, selectSeat, deselectSeat } =
    useSeatLayoutStore();
  const { movie: currentMovie } = useRouteLoaderData('currentMovie') as {
    movie: Movie;
  };

  useEffect(() => setSeat([]), []);

  const handleSeatClick = (seat: SeatType, seatIdx: number) => {
    if (!seat.isReserved) {
      const updatedSeat = { ...seat, isSelected: !seat.isSelected };
      updatedSeat.isSelected
        ? selectSeat(updatedSeat)
        : deselectSeat(updatedSeat);
      const updatedSeatLayout = [...seatLayout];
      updatedSeatLayout[seatIdx] = updatedSeat;
      setSeatLayout(updatedSeatLayout);

      setSeat(selectedSeats.map(seat => seat.code!));
      setPrice(
        Number(
          createBookingSummary(selectedSeats)
            .reduce((acc, seat) => acc + seat.amount * seat.price, 0)
            .toFixed(2)
        )
      );
    }
  };

  const summaries = createBookingSummary(selectedSeats);

  return (
    <div className="flex flex-col pt-8 h-full justify-between">
      <div className="flex flex-col px-5 gap-y-8">
        <Header title={'Select Seats'} />
        <div className="flex flex-col w-2/3 self-center">
          <div className=" bg-yellow h-1 w-full"></div>
          <div className="h-5 opacity-25 bg-gradient-to-b from-yellow to-dark"></div>
        </div>
        <div className="grid grid-rows-6 grid-cols-9 gap-3">
          {seatLayout.map((seat, seatIdx) =>
            seat.code ? (
              <Seat
                key={seatIdx}
                seatCode={seat.code}
                isSelected={seat.isSelected}
                isReserved={seat.isReserved}
                onClick={() => handleSeatClick(seat, seatIdx)}
              />
            ) : (
              <div key={seatIdx} />
            )
          )}
        </div>
        <div className="flex flex-row justify-center gap-6">
          <div className="flex gap-2">
            <div className="bg-dark-light w-4 h-4 rounded-full"></div>
            <span className="text-white-dimmed text-s">Available</span>
          </div>
          <div className="flex justify-start gap-2">
            <div className="bg-yellow w-4 h-4 rounded-full"></div>
            <span className="text-white-dimmed text-s">Selected</span>
          </div>
          <div className="flex justify-start gap-2">
            <div className="bg-white w-4 h-4 rounded-full "></div>
            <span className="text-white-dimmed text-s">Reserved</span>
          </div>
        </div>
      </div>
      <BookingSummary
        summaries={summaries}
        buttonLink={`/movies/${currentMovie.id}/ticket`}
        buttonDisabled={seat.length === 0}
      />
    </div>
  );
}