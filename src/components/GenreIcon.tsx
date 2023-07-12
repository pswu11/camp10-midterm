import { cn } from '../lib/utils';
import { useGenreStore } from '../stores/genre';

type GenreIconProps = {
  genre: string;
  fromOverview?: boolean;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function GenreIcon({
  genre,
  fromOverview,
  className,
  ...props
}: GenreIconProps) {
  const { icon, isSelected, id } = useGenreStore(state => state.genres[genre]);
  const selectGenre = useGenreStore(state => state.selectGenre);

  return (
    <div className="flex flex-col items-center">
      <button
        className={cn(
          'rounded-xl flex items-center justify-center h-14 w-14 text-[1.875rem]',
          isSelected ? 'bg-white-dimmed' : 'bg-dark-light',
          className
        )}
        onClick={() => selectGenre(genre, fromOverview)}
        {...props}
      >
        {icon}
      </button>
      <p className="text-white-dimmed pt-2 font-700 text-s whitespace-nowrap">
        {genre}
      </p>
    </div>
  );
}

export function GenreIcons({
  variant = 'home',
}: {
  variant?: 'home' | 'overview';
}) {
  const allGenres = useGenreStore(state => state.genres);
  const homePageGenres = useGenreStore(state => state.homePageGenres);

  const genres =
    variant === 'home' ? homePageGenres : Object.keys(allGenres).slice(0, 16);

  return (
    <>
      {genres.map(genre => (
        <GenreIcon
          key={genre}
          genre={genre}
          fromOverview={variant === 'overview'}
        />
      ))}
    </>
  );
}
