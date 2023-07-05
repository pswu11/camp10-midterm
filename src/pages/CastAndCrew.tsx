import CastCrew from '../components/CastCrew';
import { Cast } from '../types/api';

const movieCast: Cast[] = [
  {
    id: 1,
    name: 'Matt Damon',
    character: 'Will hunting',
    known_for_department: 'Acting',
    profile_path: '',
  },
  {
    id: 2,
    name: 'Robin Williams',
    character: 'Sean MacGuire',
    known_for_department: 'Acting',
    profile_path: '',
  },
];

export function CastAndCrew() {
  return (
    <div className="flex flex-col gap-5">
      {movieCast.map(person => (
        <CastCrew
          key={person.id}
          profile_path={person.profile_path}
          known_for_department={person.known_for_department}
          id={person.id}
          name={person.name}
          character={person.character}
        />
      ))}
    </div>
  );
}
