import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import BookingDetails from '../components/BookingDetails';
export function RootLayout() {
  return (
    <div className="bg-dark text-white flex flex-col justify-between m-auto w-[375px] h-[667px] rounded-3xl">
      <div className="pt-8 px-5 flex flex-col">
        <BookingDetails> 20.00 Dec </BookingDetails>
        <Outlet />
      </div>
      <Navbar />
    </div>
  );
}
