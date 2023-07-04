import Woman from '../assets/woman1.jpg'
import { Cast, Crew, Person } from '../types/api.ts'

export type CastCrewProps = {
    name?: string;
    image?: string;
    character?: string;
};

export default function CastCrew({ 
    name = 'Angelina Jolie', 
    image = Woman, 
    character = 'Mrs. Smith' 
}: CastCrewProps) {

    return (
        <header className="flex flex-row gap-5 m-2">
            <div className="h-16 w-16 rounded-full bg-red flex items-center justify-center text-white">
                    {image ? (
                    <img className="h-full w-full object-cover" src={image} alt={name} />
                    ) : (
                        initial
                    )}
            </div>
            <div className='flex flex-col justify-center'>
                <h2>
                    {name}
                </h2>
                <h4 className='text-m text-white-dimmed'>
                    {character}
                </h4>
            </div>
        </header>
    );
}
