import { Outlet } from "react-router";
import { Header } from "../header";

export function Layout() {
  return (
    <div className="bg-gray-100">
      <Header />
      <Outlet />
    </div>
  );
}
