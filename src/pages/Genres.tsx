import { Link, useLoaderData } from 'react-router-dom';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { Genre } from '../types/api';
import { GenreIcon } from '../components/GenreIcon';
import { Button } from '../components/Button';

const genreObj = {
  28: { icon: '🤩', name: 'Action' },
  12: { icon: '🫣', name: 'Abenteuer' },
  16: { icon: '🫣', name: 'Animation' },
};

export function Genres() {
  const genres = useLoaderData() as Genre[];
  console.log(genres);
  return (
    <div className="bg-dark flex flex-col m-auto w-[375px] h-[667px] rounded-3xl pt-8 pb-6 px-5">
      <div className="flex relative items-center justify-center">
        <Link to="/" className="text-white text-xl absolute left-0">
          <MdOutlineKeyboardArrowLeft />
        </Link>
        <h2 className="text-white text-l font-700">Select Date & Time</h2>
      </div>
      <div className="w-full grid grid-cols-4">
        {genres.map((genre, idx) => {
          return <GenreIcon icon='🫣' title={genre.name} key={idx} />;
        })}
      </div>
      <Link to="/" className="mt-auto w-full">
        <Button className="w-full">Confirm Selected Genres</Button>
      </Link>
    </div>
  );
}
