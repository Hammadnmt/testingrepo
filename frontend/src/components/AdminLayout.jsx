import { Outlet } from "react-router-dom";
import Sidebar from "./LeftPanel";
export default function AdminLayout() {
  return (
    <div className="md:flex">
      <Sidebar />
      <div className="flex overflow-y-scroll relative w-screen md:w-[calc(100vw-256px)] h-screen">
        {/* <div className="w-full md:w-64 bg-red text-white"> */}
        {/* </div> */}
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
