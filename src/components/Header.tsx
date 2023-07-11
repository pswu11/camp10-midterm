import { HiArrowCircleLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom"

type HeaderProps = {
    children: string;
}

export default function HeaderFunction(calledProps: HeaderProps) {

    const navigation = useNavigate();

    return ( 
        <header className="flex justify-between ml items-center px-5 pb-6 pt-8 sticky top-0 z-10 bg-dark text-white m">
                <button onClick={() => navigation(-1)}>
                    <HiArrowCircleLeft />
                </button>
                <h1 className="typography-title" >{calledProps.children}</h1>
        </header>
    );
}