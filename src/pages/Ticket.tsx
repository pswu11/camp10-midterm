import Barcode from 'react-barcode';
import { Button } from '../components/Button';
import { TicketInfo } from '../components/TicketInfo';

type TicketType = {
  id: string
  movieTitle: string
  date: string
  time: string
  price: number
  seat: string[]
}

const currentMovie: TicketType = {
  id: "13D53987xF",
  movieTitle: "Batman: The Doom That Came to Gotham",
  date: "06 Jun",
  time: "16:40",
  price: 42.3,
  seat: ["C-3", "C-4"]
}

export function Ticket() {
  return (
    <div className="w-full py-8 px-5">
      <div className='bg-white-dimmed-heavy rounded-3xl overflow-hidden'>
        <img src='https://image.tmdb.org/t/p/w500/7eccX0xay9pDj6ZQvU4cu3whw18.jpg'/>
        <h3 className='text-white font-700 text-[23px]'>{currentMovie.movieTitle}</h3>
        <div className='flex flex-col'>
          <span className='font-500 text-s text-dark'>Date</span>
          <span className='font-700 text-m text-white'>{currentMovie.date}</span>
        </div>
        <TicketInfo title='Date' info={currentMovie.date}/>
        <TicketInfo title='Time' info={currentMovie.time}/>
        <TicketInfo title='Seat' info={currentMovie.seat.join(", ")}/>

        <div>dot line is here</div>
        <Barcode value="359830823094" />
      </div>
      <Button className='mt-auto'>Back to Home</Button>
    </div>
  );
}
