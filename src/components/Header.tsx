import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
  children: string;
};

export default function Header(title: HeaderProps) {
  const navigation = useNavigate();

  return (
    <header className="grid grid-cols-3 text-white">
      <IoIosArrowBack className="ml-2 w-6 h-6" onClick={() => navigation(-1)}/>
      <h1 className="text-center font-700 leading-5">{title.children}</h1>
    </header>
  );
}
