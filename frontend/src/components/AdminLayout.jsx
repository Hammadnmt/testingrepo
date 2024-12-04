import { Outlet } from "react-router-dom";
import Sidebar from "./LeftPanel";
export default function AdminLayout() {
  return (
    <div className="flex h-screen">
      <div className="w-64 bg-indigo-700 text-white">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
