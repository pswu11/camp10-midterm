import { Button } from './Button';

export function BookingSummary() {
  return (
    <div className="w-full max-h-56 bg-dark-light rounded-3xl px-5 pt-7 pb-6">
      <div className='w-full'>
        <li className='flex justify-between text-white'>
          <span>1x <span>Seat - Front</span></span>
          <span>$12.95 <span>/each</span></span>
        </li>
        <li className='flex justify-between text-white'>
          <span>1x <span>Seat - Front</span></span>
          <span>$12.95 <span>/each</span></span>
        </li>
        <li className='flex justify-between text-white'>
          <span>1x <span>Seat - Front</span></span>
          <span>$12.95 <span>/each</span></span>
        </li>
      </div>
      <div className='border border-t-[1px] border-white-dimmed-heavy border-b-0 mt-4'></div>
      <div className='justify-between w-full flex gap-12 mt-8'>
        <div className='flex flex-col'>
          <span className='text-s font-500 text-white-dimmed whitespace-nowrap'>Total Price</span>
          <span className='text-xl font-700 text-white'>$43.5</span>
        </div>
        <Button className='mb-6'>Book Ticket</Button>
      </div>
    </div>
  );
}
