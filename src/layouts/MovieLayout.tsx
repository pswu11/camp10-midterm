import { Outlet } from "react-router-dom";

export function MovieLayout() {
  return (
    <div className="px-5 py-6 bg-dark text-white">
      This is movie layout.
      <Outlet/>
    </div>
  );
}
