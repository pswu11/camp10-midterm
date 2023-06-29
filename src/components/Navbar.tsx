import { HiHome, HiFilm, HiBookmark, HiUser } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { cloneElement } from 'react';

const navItems = [
  {
    link: '/',
    icon: <HiHome />,
  },
  {
    link: '/movies',
    icon: <HiFilm />,
  },
  {
    link: '/bookmarks',
    icon: <HiBookmark />,
  },
  {
    link: '',
    icon: <HiUser />,
  },
];

export function Navbar() {
  return (
    <div className="">
      <HiUser className="" />
      {navItems.map(item => (
        <Link to={item.link}>
          {navItems.map(item => cloneElement(item.icon, { className: true }))}
        </Link>
      ))}
    </div>
  );
}
