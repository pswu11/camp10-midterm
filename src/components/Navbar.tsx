import { HiHome, HiFilm, HiBookmark, HiUser } from 'react-icons/hi';
import { NavItem } from './NavItem';
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
    <div className="flex justify-between items-center">
      {navItems.map(item => (
        <NavItem
          link={item.link}
          icon={cloneElement(item.icon, { className: 'h-3 w-3' })}
        />
      ))}
    </div>
  );
}
