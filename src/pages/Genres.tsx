import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { GenreIcons } from '../components/GenreIcon';
import { Button } from '../components/Button';
import { useGenreStore } from '../stores/genre';

export function Genres() {
  const allGenres = useGenreStore(state => state.genres);
  const selectedGenres = Object.keys(allGenres).filter(
    genre => allGenres[genre].isSelected
  );

  return (
    <div className="bg-dark flex flex-col m-auto w-[375px] h-[667px] rounded-3xl pt-8 pb-6 px-5">
      <div className="flex relative items-center justify-center">
        <Link to="/" className="text-white text-xl absolute left-0">
          <MdOutlineKeyboardArrowLeft />
        </Link>
        <h2 className="text-white text-l font-700">Genres</h2>
      </div>
      <div className="w-full grid grid-cols-4 gap-y-8 mt-12 mb-auto">
        <GenreIcons variant="overview" />
      </div>
      <div className="text-white-dimmed text-m mt-auto">
        <span className="text-white">{selectedGenres.length}</span> genres
        selected.
      </div>
      <Link to="/" className="w-full mt-4">
        <Button className="w-full" size="small">
          Confirm Selected Genres
        </Button>
      </Link>
    </div>
  );
}
