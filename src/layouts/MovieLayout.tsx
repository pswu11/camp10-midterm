import { Outlet } from 'react-router-dom';

export function MovieLayout() {
  return (
    <div className="bg-dark text-white flex flex-col justify-between m-auto w-[375px] h-[667px] rounded-3xl">
      <div className="m-auto">
        <Outlet />
      </div>
    </div>
  );
}
