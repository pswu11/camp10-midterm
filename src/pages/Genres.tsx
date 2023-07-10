import { Link, useLoaderData } from 'react-router-dom';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { Genre } from '../types/api';
import { GenreIcon } from '../components/GenreIcon';
import { Button } from '../components/Button';
import { useGenreStore } from '../stores/genres';
import { useState } from 'react';

const genreObj: Record<string, string> = {
  Action: '🧨',
  Adventure: '🥾',
  Animation: '🦁',
  Comedy: '🚔',
  Crime: '🕵️',
  Documentary: '🎥',
  Drama: '🎭',
  Family: '👪',
  Fantasy: '🦄',
  History: '⌛',
  Horror: '🪚',
  Music: '🎧',
  Mystery: '🪄',
  Romance: '💌',
  'Science Fiction': '🛸',
  Thriller: '😨',
};

type GenreProps = {
  icon: string;
  isSelected: boolean;
  id: number;
  name: string;
};

export function Genres() {
  const genres = useLoaderData() as Genre[];
  const { selectedGenres, setSelectedGenres } = useGenreStore();
  const initGenreEntries: GenreProps[] = genres
    .filter(item => genreObj[item.name])
    .map(g => {
      return {
        ...g,
        icon: genreObj[g.name],
        isSelected: selectedGenres.some(item => item.name === g.name),
      };
    });
  const [genreEntries, setGenreEntries] = useState(initGenreEntries);

  const handleGenreIcon = (genre: GenreProps) => {
    let updatedGenreEntries: GenreProps[] = [];
    updatedGenreEntries = genreEntries.map(g => {
      if (g.name === genre.name) {
        const selectedGenre = {
          ...g,
          isSelected: !genre.isSelected,
        };
        if (!genre.isSelected) {
          setSelectedGenres([...selectedGenres, selectedGenre]);
        } else {
          setSelectedGenres(
            selectedGenres.filter(item => item.name !== genre.name)
          );
        }
        return selectedGenre;
      } else {
        return g;
      }
    });
    setGenreEntries(updatedGenreEntries);
  };

  return (
    <div className="bg-dark flex flex-col m-auto w-[375px] h-[667px] rounded-3xl pt-8 pb-6 px-5">
      <div className="flex relative items-center justify-center">
        <Link to="/" className="text-white text-xl absolute left-0">
          <MdOutlineKeyboardArrowLeft />
        </Link>
        <h2 className="text-white text-l font-700">Genres</h2>
      </div>
      <div className="w-full grid grid-cols-4 gap-y-8 mt-12 mb-auto">
        {genreEntries.map((genre, idx) => {
          return (
            <GenreIcon
              icon={genreObj[genre.name]}
              title={genre.name}
              key={idx}
              isActive={genre.isSelected}
              onClick={() => handleGenreIcon(genre)}
            />
          );
        })}
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
