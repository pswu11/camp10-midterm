import Barcode from 'react-barcode';
import { Button } from '../components/Button';
import { TicketInfo } from '../components/TicketInfo';
import { Movie } from '../types/api';
import { useRouteLoaderData } from 'react-router-dom';
import { IMG_BASE_URL } from '../api/movies';

type TicketType = {
  id: string;
  movieId: number;
  date: string;
  time: string;
  price: number;
  seat: string[];
};

export function Ticket() {
  const { movie: currentMovie } = useRouteLoaderData('currentMovie') as {
    movie: Movie;
  };

  // the ticket info sould come from other booking steps
  const currentTicket: TicketType = {
    id: '325398732342', // a made-up 12-digit numbers
    movieId: currentMovie.id,
    date: '06 Jun',
    time: '16:40',
    price: 42.3,
    seat: ['C-3', 'C-4'],
  };

  return (
    <div className="w-full h-full py-8 px-5 flex flex-col gap-y-4">
      <div className="bg-white-dimmed-heavy rounded-3xl overflow-hidden flex-1 flex flex-col justify-between">
        <div>
          <img src={`${IMG_BASE_URL}${currentMovie.backdrop_path}`} className="h-40 w-full object-cover" />
          <h3 className="text-white font-700 text-[23px] mx-6 mb-3 mt-1 line-clamp-2">
            {currentMovie.title}
          </h3>
          <div className="flex flex-wrap gap-x-16 gap-y-4 ml-6">
            <TicketInfo title="Date" info={currentTicket.date} />
            <TicketInfo title="Time" info={currentTicket.time} />
            <TicketInfo title="Price" info={currentTicket.price.toString()} />
            <TicketInfo title="Seat" info={currentTicket.seat.join(', ')} />
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col relative h-12 justify-center">
            <div className="border border-dashed border-white border-t-2 border-b-0"></div>
            <div className="bg-dark rounded-full h-12 w-12 absolute -left-6"></div>
            <div className="bg-dark rounded-full h-12 w-12 absolute -right-6"></div>
          </div>
          <div className="w-full flex justify-center mb-3 -mt-3">
            <Barcode
              value={currentTicket.id}
              background="#FFFFFF00"
              lineColor="#FFFFFF"
              height={48}
            />
          </div>
        </div>
      </div>
      <Button className="mt-auto">Back to Home</Button>
    </div>
  );
}
