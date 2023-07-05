import Woman from '../assets/woman1.jpg';
import { Cast } from '../types/api.ts';

const movieCast: Cast = [
  {
    id: 1,
    name: 'Matt Damon',
    // character: 'Will hunting',
    known_for_department: 'Acting',
    profile_path: '/',
  },
  {
    id: 2,
    name: 'Robin Williams',
    character: 'Sean MacGuire',
    known_for_department: 'Acting',
    profile_path: '/',
  },
];

export type CastCrewProps = {
  name: string;
  image?: string;
  character?: string;
};

export function CastCrew({
  name = 'Angelina Jolie',
  character = 'Mrs. Smith',
  image = Woman,
}: CastCrewProps) {
  const initial = name.charAt(0).toUpperCase();
  return (
    <header className="flex flex-row gap-5 m-2">
      <div className="h-16 w-16 bg-dark-light flex items-center justify-center">
        {image ? (
          <img className="h-full w-full object-cover" src={image} alt={name} />
        ) : (
          initial
        )}
      </div>
      <div className="flex flex-col justify-center">
        <h2 className=" text-white font-700 text-m">{name}</h2>
        <h4 className="text-s text-white-dimmed">{character}</h4>
      </div>
    </header>
  );
}
