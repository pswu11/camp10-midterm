import { cn } from '../lib/utils';

{
  // Usage Notes:
  //       const genreObj = {
  //   28: { "icon": "🤩", "name": "Action" },
  //   12: { "icon": "🫣", "name": "Abenteuer" },
  //   16: { "icon": "🫣", "name": "Animation" }
  // }
  // Object.entries(genreObj).map(([key,value], idx)=> {
  //   return (
  //     <GenreIcon genre={value} />
  //   )
  // })
}

type GenreIconProps = {
  isActive?: boolean;
  // genre: { icon: string; name: string };
  icon: string,
  title: string
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function GenreIcon({
  isActive = false,
  className,
  // genre,
  icon,
  title,
  ...props
}: GenreIconProps) {
  return (
    <div className="flex flex-col items-center">
      <button
        className={cn(
          'rounded-xl flex items-center justify-center h-14 w-14 text-[1.875rem]',
          isActive ? 'bg-white-dimmed' : 'bg-dark-light',
          className
        )}
        {...props}
      >
        {icon}
      </button>
      <p className="text-white-dimmed pt-2 font-700 text-s whitespace-nowrap">{title}</p>
    </div>
  );
}
