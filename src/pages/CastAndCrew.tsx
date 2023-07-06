import CastCrew from '../components/CastCrew';
import { Cast, Credits, Crew } from '../types/api';

const castAndCrew: Credits = {
  id: 1003579,
  cast: [
    {
      adult: false,
      gender: 2,
      id: 206757,
      known_for_department: 'Acting',
      name: 'David Giuntoli',
      original_name: 'David Giuntoli',
      popularity: 8.322,
      profile_path: '/xxtB8TfKLMw9Utx5v2b3Z0nu5VL.jpg',
      cast_id: 13,
      character: 'Batman / Bruce Wayne (voice)',
      credit_id: '639152c0b9a0bd008451c286',
      order: 0,
    },
    {
      adult: false,
      gender: 2,
      id: 58791,
      known_for_department: 'Acting',
      name: 'Patrick Fabian',
      original_name: 'Patrick Fabian',
      popularity: 16.663,
      profile_path: '/ziTKeEraEksMQBg02adD22JJXb0.jpg',
      cast_id: 2,
      character: 'Harvey Dent / Two-Face (voice)',
      credit_id: '639150adb9a0bd008451c148',
      order: 1,
    },
  ],
  crew: [
    {
      adult: false,
      gender: 2,
      id: 10949,
      known_for_department: 'Production',
      name: 'Michael Uslan',
      original_name: 'Michael Uslan',
      popularity: 4.208,
      profile_path: '/cXiiH0SSk5UHCvHOVAhHX7tNuls.jpg',
      credit_id: '639155086476540084d5f23c',
      department: 'Production',
      job: 'Executive Producer',
    },
    {
      adult: false,
      gender: 2,
      id: 66266,
      known_for_department: 'Writing',
      name: 'Mike Mignola',
      original_name: 'Mike Mignola',
      popularity: 3.633,
      profile_path: '/cCYHC9bpVv8tfEzQ2dqlEEGOjX0.jpg',
      credit_id: '62dcad3f2866fa00c5d97ac6',
      department: 'Writing',
      job: 'Comic Book',
    },
  ],
};

export function CastAndCrew() {
  return (
    <div className="flex flex-col gap-4">
      {castAndCrew.cast.map((person: Cast) => (
        <CastCrew person={person} key={person.id} />
      ))}
      {castAndCrew.crew.map((person: Crew) => (
        <CastCrew key={person.id} person={person} />
      ))}
    </div>
  );
}
