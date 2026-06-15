import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const ArticleLayout = () => {
  const link = [
    { id: 1, name: "CREATE", path: "" },
    { id: 2, name: "UPDATE", path: "update" },
    { id: 3, name: "DELETE", path: "delete" },
  ];
  return (
    <>
      <div className="mt-20">
        <div className="bg-linear-to-r from-slate-500 to-slate-700 py-4 px-5 md:px-10 flex flex-nowrap gap-6 overflow-x-auto whitespace-nowrap text-white font-medium scrollbar-hide justify-center">
          {link.map((l) => {
            return (
              <NavLink
                key={l.id}
                to={l.path}
                className="hover:text-blue-200 transition"
              >
                {l.name}
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="px-10 mt-5">
        <Outlet />
      </div>
    </>
  );
};

export default ArticleLayout;
