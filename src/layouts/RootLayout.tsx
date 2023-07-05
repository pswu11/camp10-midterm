import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
export function RootLayout() {
  return (
    <div className="bg-dark text-white flex flex-col justify-between m-auto w-[375px] h-[667px] rounded-3xl">
<<<<<<< HEAD
      <div className="pt-8 px-5 flex flex-col">
=======
      <div className="justify-start m-auto">
>>>>>>> refs/remotes/origin/20-create-the-cast-and-crew-info-display-component
        <Outlet />
      </div>
      <Navbar />
    </div>
  );
}
