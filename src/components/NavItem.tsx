import { Link } from 'react-router-dom';

type NavItemProps = {
  link: string;
  icon: React.ReactNode;
};

export function NavItem({ link, icon }: NavItemProps) {
  return <Link className='text-[1.5rem] text-white-dimmed' to={link}>{icon}</Link>;
}
