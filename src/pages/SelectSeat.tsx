import Seat from '../components/Seat';
import { BookingSummary } from '../components/BookingSummary';

const mockAllSeats = [
  {
    id: 1,
    code: 'C-3'
  },
  {
    id: 2,
    code: 'C-4'
  },
  {
    id: 3,
    code: 'C-5'
  },
]

export function SelectSeat() {
  return (
    <>
      <div className='flex gap'>
        {
          mockAllSeats.map(item => <Seat key={item.id} seatid={item.id} seatCode={item.code} />)
        }
      </div>
      <BookingSummary />
    </>
  );
}
