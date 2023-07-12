import { HiArrowCircleLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom"

type HeaderProps = {
    children: string;
}

export default function HeaderFunction(calledProps: HeaderProps) {

    const navigation = useNavigate();

    return ( 
        <header className=" ml items-center px-5 pb-6 pt-8 sticky top-0 z-10 bg-dark text-white m">
            <div className="position: relative items-center">
                    <button className="position: absolute " onClick={() => navigation(-1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <h1 className="flex justify-center typography-title" >{calledProps.children}</h1>
            </div>
        </header>
    );
}