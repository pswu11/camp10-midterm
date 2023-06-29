import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';

type NavItemProps = {
  link: string;
  icon: React.ReactNode;
};

export function NavItem({ link, icon }: NavItemProps) {
  return (
    <NavLink
      className={({ isActive }) => {
        return `${isActive ? 'text-white' : 'text-white-dimmed'} text-[1.5rem]`;
      }}
      to={link}
    >
      {icon}
    </NavLink>
  );
}
