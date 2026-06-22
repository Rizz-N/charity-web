import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ProductLayout = () => {
  const link = [
    { id: 1, name: "CREATE", path: "create" },
    { id: 2, name: "MANAGE", path: "manage" },
  ];
  return (
    <>
      <div>
        <div className="bg-linear-to-r from-slate-900 to-slate-700 py-4 px-5 md:px-10 flex gap-6  text-white  justify-between">
          <p className="text-2xl font-bold">Manage Product</p>
          <div className="flex gap-3 px-4 py-1 rounded-lg">
            {link.map((l) => {
              return (
                <NavLink
                  key={l.id}
                  to={l.path}
                  className={({ isActive }) =>
                    ` text-white ${isActive ? "border-b border-white" : "hover:border-b hover:border-white"}`
                  }
                >
                  {l.name}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
      <div className="m-5">
        <Outlet />
      </div>
    </>
  );
};

export default ProductLayout;
