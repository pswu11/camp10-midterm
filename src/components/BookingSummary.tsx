import { BookingSummaryRow } from './BookingSummaryRow';
import { Button } from './Button';
import { Transition } from '@headlessui/react';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { useState } from 'react';
import clsx from 'clsx';
import { cn } from '../lib/utils';
import { SummaryRow } from '../types/booking';
import { SeatType } from '../types/booking';

// This logic is purely made up for now
function returnSeatType(seatCode: string) {
  const row = seatCode.split('-')[0];
  switch (row) {
    case 'A':
      return 'Front';
    // assume H is the last row
    case 'H':
      return 'Back';
    default:
      return 'Middle';
  }
}

// This logic is purely made up for now
const seatPrices = {
  Front: 12.99,
  Middle: 14.75,
  Back: 16.99,
};

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

export function BookingSummary({
  selectedSeats,
}: {
  selectedSeats: SeatType[];
}) {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSlide = () => {
    setIsOpen(!isOpen);
  };

  const summaries = createBookingSummary(selectedSeats);

  return (
    <div className="w-full bg-dark-light rounded-3xl px-5 pt-7 pb-6">
      <MdOutlineKeyboardArrowUp
        onClick={toggleSlide}
        className={clsx(
          '-mt-4 mx-auto text-white text-xl',
          isOpen ? 'rotate-180' : ''
        )}
      />
      <Transition
        show={isOpen}
        enter="transition ease-out duration-700 transform"
        enterFrom="translate-y-20 opacity-0"
        enterTo="translate-y-120 opacity-100"
      >
        <div className="w-full space-y-2">
          {summaries.map(row => (
            <BookingSummaryRow
              key={row.type}
              type={row.type}
              amount={row.amount}
              price={row.price}
            />
          ))}
        </div>
        <div
          className={cn(
            'border border-t-[1px] border-white-dimmed-heavy border-b-0 mt-4',
            selectedSeats.length === 0 && 'border-t-0'
          )}
        ></div>
      </Transition>
      <div className="justify-between w-full flex gap-12 mt-8">
        <div className="flex flex-col">
          <span className="text-s font-500 text-white-dimmed whitespace-nowrap">
            Total Price
          </span>
          <span className="text-xl font-700 text-white">
            {summaries
              .reduce((acc, row) => acc + row.amount * row.price, 0)
              .toFixed(2)}
          </span>
        </div>
        <Button>Book Ticket</Button>
      </div>
    </div>
  );
}
