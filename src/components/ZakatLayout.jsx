import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const ZakatLayout = () => {
  const link = [
    { id: 1, name: "Penghasilan", path: "" },
    { id: 2, name: "Mal", path: "zakat/mal" },
    { id: 3, name: "Fitrah", path: "zakat/fitrah" },
    { id: 4, name: "Fidyah", path: "zakat/fidyah" },
    { id: 5, name: "Emas", path: "zakat/emas" },
  ];
  return (
    <>
      <div>
        <div className="md:px-10 px-5 py-5 text-blue-700 font-bold text-xl md:text-4xl uppercase">
          <p>
            Tunaikan zakat sucikan jiwa <br />
            <span className="text-yellow-300">sempurnakan ibadah</span>
          </p>
        </div>
        <div className="bg-linear-to-r from-blue-500 to-blue-700 py-4 px-5 md:px-10 flex flex-nowrap gap-6 overflow-x-auto whitespace-nowrap text-white font-medium scrollbar-hide justify-center">
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

export default ZakatLayout;
