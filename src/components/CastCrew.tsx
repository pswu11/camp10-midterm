import Woman from '../assets/woman1.jpg';
import { Cast, Crew } from '../types/api.ts';

type CastCrewProps = {
  name?: string;
  image?: string;
  character?: string;
  job?: string;
};

export default function CastCrew({
  name = 'Angelina Jolie',
  character = 'Mrs. Smith',
  profile_path,
}: Cast) {
  return (
    <div className="flex flex-row gap-5">
      <div className="h-16 w-16 bg-dark-light">
        <img
          src={
            profile_path ||
            'https://images.unsplash.com/photo-1607317146126-64b09b69eb4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80'
          }
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className=" text-white font-700 text-m">{name}</h2>
        <h4 className="text-s text-white-dimmed">{character}</h4>
      </div>
    </div>
  );
}
