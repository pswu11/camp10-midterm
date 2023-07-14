import { ReactNode } from 'react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

type HeaderProps = {
  title: string;
  rightIcon?: ReactNode;
};

export default function Header({ title, rightIcon }: HeaderProps) {
  const navigation = useNavigate();

  return (
    <header className="flex items-center justify-between text-white">
      <MdOutlineKeyboardArrowLeft
        className="w-6 h-6 cursor-pointer"
        onClick={() => navigation(-1)}
      />
      <h1 className="text-center font-700 leading-5">{title}</h1>
      {rightIcon ? rightIcon : <div className="w-6 h-6" />}
    </header>
  );
}
