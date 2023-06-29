import { Link } from 'react-router-dom';

type NavItemProps = {
  link: string;
  icon: React.ReactNode;
};

export function NavItem({ link, icon }: NavItemProps) {
  return <Link to={link}>{icon}</Link>;
}
