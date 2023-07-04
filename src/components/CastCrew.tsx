import Avatar from '../assets/Avatar.png';
import { Cast, Crew, Person } from '../types/api.ts';

export type CastAndCrewProps = {
  name?: string;
  image?: string;
};

export default function CastCrewFunction({
  name = 'Matt Damon',
  image = Avatar,
}: CastAndCrewProps) {
  return (
    <div className="flex justify-between">
      <div className="h-10 w-10 bg-dark-light flex items-center justify-center text-white">
        {image ? (
          <img className="h-full w-full" src={image} alt={name} />
        ) : (
          'blabla'
        )}
      </div>
      <h3>Character</h3>
    </div>
  );
}
