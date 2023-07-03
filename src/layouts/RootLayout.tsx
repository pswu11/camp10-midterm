import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import BookingDetails from '../components/BookingDetails';

export function RootLayout() {
  return (
    <div className='bg-dark text-white flex flex-col justify-between m-auto w-[375px] h-[667px] rounded-3xl'>
      <div className='m-auto'>
        <BookingDetails variant='active'> Button</BookingDetails>
        <Outlet />
      </div>
      <Navbar />
    </div>
  );
}
