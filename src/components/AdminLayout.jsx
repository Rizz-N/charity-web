import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <main className="flex-1 p-6 transition-all duration-300">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
