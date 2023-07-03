import { cn } from '../lib/utils';


        { // Usage Notes:

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
  variant?: 'default' | 'active';
  genre : {icon: string, name: string}
  } & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function GenreIcon({
  variant = 'default',
  className,
  genre,
  ...props
}: GenreIconProps) {
  const styles: Record<typeof variant, string> = {
    default: 'bg-dark-light',
    active: 'bg-white-dimmed',
  }

  return (
    <div className="flex flex-col items-center">
      <button 
        className={cn(
          'rounded-xl flex items-center justify-center h-14 w-14',
          styles[variant],
          className
        )}
        {...props}
      >
        {genre.icon}
      </button>
      <p className="text-white-dimmed font-700 text-s"> {genre.name} </p>
    </div>
  );
}
