import { BookingSummaryRow } from './BookingSummaryRow';
import { Button } from './Button';
import { Transition } from '@headlessui/react';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { useState } from 'react';
import clsx from 'clsx';
import { SelectedSeat } from '../pages/SelectSeat';

// Later, selected seats should be passed from the SelectSeat page
// const mockSelectedSeats = [
//   {
//     seat: 'C-3',
//     price: 12.99,
//   },
//   {
//     seat: 'C-4',
//     price: 12.99,
//   },
//   {
//     seat: 'E-8',
//     price: 14.75,
//   },
// ];

export function BookingSummary( { selectedSeats } : { selectedSeats: SelectedSeat[] } ) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlide = () => {
    setIsOpen(!isOpen);
  };

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
          {selectedSeats.map((item, idx) => (
            <BookingSummaryRow
              id={idx + 1}
              key={item.id}
              seat={item.code}
              price={item.price}
            />
          ))}
        </div>
        <div className="border border-t-[1px] border-white-dimmed-heavy border-b-0 mt-4"></div>
      </Transition>
      <div className="justify-between w-full flex gap-12 mt-8">
        <div className="flex flex-col">
          <span className="text-s font-500 text-white-dimmed whitespace-nowrap">
            Total Price
          </span>
          <span className="text-xl font-700 text-white">
            {selectedSeats
              .reduce((acc, seat) => acc + seat.price, 0)
              .toFixed(2)}
          </span>
        </div>
        <Button>Book Ticket</Button>
      </div>
    </div>
  );
}
