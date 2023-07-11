import CastCrew from '../components/CastCrew';
import { Cast, Credits, Crew } from '../types/api';
import { Tab } from '@headlessui/react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Fragment } from 'react';
import { useLoaderData } from 'react-router-dom';

const castAndCrew: Credits = {
  id: 1003579,
  cast: [
    {
      id: 206757,
      known_for_department: 'Acting',
      name: 'David Giuntoli',
      profile_path: '/xxtB8TfKLMw9Utx5v2b3Z0nu5VL.jpg',
      character: 'Batman / Bruce Wayne (voice)',
    },
    {
      id: 58791,
      known_for_department: 'Acting',
      name: 'Patrick Fabian',
      profile_path: '/ziTKeEraEksMQBg02adD22JJXb0.jpg',
      character: 'Harvey Dent / Two-Face (voice)',
    },
  ],
  crew: [
    {
      id: 10949,
      known_for_department: 'Production',
      name: 'Michael Uslan',
      profile_path: '/cXiiH0SSk5UHCvHOVAhHX7tNuls.jpg',
      job: 'Executive Producer',
    },
    {
      id: 66266,
      known_for_department: 'Writing',
      name: 'Mike Mignola',
      profile_path: '/cCYHC9bpVv8tfEzQ2dqlEEGOjX0.jpg',
      job: 'Comic Book',
    },
  ],
};

const tabs = ['Cast', 'Crew'];

export function CastAndCrew() {
  const credits = useLoaderData() as Credits

  return (
    <div className="h-full w-full px-5 py-8 flex flex-col">
      <div className="flex relative items-center justify-center">
        <Link to="/" className="text-white text-xl absolute left-0">
          <MdOutlineKeyboardArrowLeft />
        </Link>
        <h2 className="text-white text-l font-700">Select Date & Time</h2>
      </div>
      <Tab.Group>
        <Tab.List className="flex justify-between mt-8 mb-6">
          {tabs.map(tab => (
            <Tab as={Fragment}>
              {({ selected }) => (
                <Button
                  variant="secondary"
                  size="tiny"
                  className={`${
                    selected
                      ? 'ring-1 ring-white bg-white-dimmed'
                      : 'text-white-dimmed'
                  }`}
                >
                  {tab}
                </Button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="overflow-y-scroll">
          <Tab.Panel className='space-y-4 container-snap snap-mandatory overflow-y-scroll'>
            {credits.cast.map((person: Cast) => (
              <CastCrew person={person} key={person.id} />
            ))}
          </Tab.Panel>
          <Tab.Panel className='space-y-4'>
            {credits.crew.map((person: Crew) => (
              <CastCrew key={person.id} person={person} />
            ))}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
