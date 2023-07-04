import Avatar from '../assets/Avatar.png';

export type Props = {
    name?: string;
    image?: string;
};

export default function CastCrewFunction({ name = 'Human Person', image = Avatar }: Props) {
    const initial = name.charAt(0).toUpperCase();

    return (
        <header className="flex justify-between">
            <div>
            <div className="h-10 w-10 rounded-full bg-dark-light flex items-center justify-center text-white">
                {image ? (
                <img className="h-full w-full rounded-full" src={image} alt={name} />
                ) : (
                    initial
                    )}
            </div>
                <h2>Actor Name</h2>
                <h3>Character</h3>
            </div>
        </header>
    );
}
