import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
  children: string;
};

export default function HeaderFunction(calledProps: HeaderProps) {
  const navigation = useNavigate();

  return (
    <header className="flex items-center justify-center px-5 pb-6 pt-8 sticky top-0 z-10 bg-dark text-white">
      <button
        className="flex items-center absolute left-4 sm:left-8"
        onClick={() => navigation(-1)}
      >
        <IoIosArrowBack className="w-6 h-6" />
      </button>
      <h1 className="text-center typography-title">{calledProps.children}</h1>
    </header>
  );
}
