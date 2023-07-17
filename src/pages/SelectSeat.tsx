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

  const handleSeatClick = (
    seat: SeatType,
    rowIndex: number,
    seatIdx: number
  ) => {
    if (!seat.isReserved) {
      const updatedSeat = { ...seat, isSelected: !seat.isSelected };
      updatedSeat.isSelected
        ? selectSeat(updatedSeat)
        : deselectSeat(updatedSeat);
      const updatedSeatLayout = [...seatLayout];
      updatedSeatLayout[rowIndex][seatIdx] = updatedSeat;
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
    <>
      <h4 className="text-white text-s">
        This will later be filled by the header component
      </h4>
      <div className="flex-col px-7 justify-center items-center mx-7">
        <div className=" bg-yellow h-1 w-63"></div>
        <div className="h-5 opacity-25 bg-gradient-to-b from-yellow to-dark"></div>
      </div>

      <div className="grid grid-rows-6 grid-cols-9 gap-3 m-5">
        {seatLayout.map((row, rowIndex) =>
          row.map((seat, seatIdx) =>
            seat.code ? (
              <Seat
                key={seatIdx}
                seatCode={seat.code}
                isSelected={seat.isSelected}
                isReserved={seat.isReserved}
                onClick={() => handleSeatClick(seat, rowIndex, seatIdx)}
              />
            ) : (
              <div key={seatIdx} />
            )
          )
        )}
      </div>
      <BookingSummary
        summaries={summaries}
        buttonLink={`/movies/${currentMovie.id}/ticket`}
        buttonDisabled={seat.length === 0}
      />
    </>
  );
}
