import { BookingSummaryRow } from './BookingSummaryRow';
import { Button } from './Button';

// Selected seats would be passed from the SelectSeat page later
const mockSelectedSeats = [
  {
    seat: 'C-3',
    price: 12.99
  },
  {
    seat: 'C-4',
    price: 12.99
  },
  {
    seat: 'E-8',
    price: 14.75
  }
]

export function BookingSummary() {
  return (
    <div className="w-full max-h-56 bg-dark-light rounded-3xl px-5 pt-7 pb-6">
      <div className='w-full space-y-2'>
        {mockSelectedSeats.map((item, idx) => <BookingSummaryRow id={idx+1} key={idx} seat={item.seat} price={item.price}/>)}
      </div>
      <div className='border border-t-[1px] border-white-dimmed-heavy border-b-0 mt-4'></div>
      <div className='justify-between w-full flex gap-12 mt-8'>
        <div className='flex flex-col'>
          <span className='text-s font-500 text-white-dimmed whitespace-nowrap'>Total Price</span>
          <span className='text-xl font-700 text-white'>{mockSelectedSeats.reduce((acc, seat) => acc + seat.price, 0).toFixed(2)}</span>
        </div>
        <Button className='mb-6'>Book Ticket</Button>
      </div>
    </div>
  );
}
