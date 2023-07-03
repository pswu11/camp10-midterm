import Avatar from '../assets/Avatar.png';

export type Props = {
    name?: string;
    image?: string;
};

function UserInfo({ name = 'Human Person', image = Avatar, ...props }: Props) {
    return (
        <header className="flex justify-between bg-dark">
            <div className="flex flex-col justify-between">
                <h3 className="text-white text-s font-700 opacity-40">Welcome {name} 👋</h3>
                <h1 className="text-white text-m font-700">Let's relax and watch a movie!</h1>
            </div>
            <div>
                <img className="h-10 w-10" src={image}></img>
            </div>
        </header>
    );
}

export default UserInfo;