import { Outlet } from "react-router-dom";

export function MovieLayout() {
  return (
    <div>
      This is movie layout.
      <Outlet/>
    </div>
  );
}
