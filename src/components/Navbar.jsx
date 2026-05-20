import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const navigation = [
    { id: 1, name: "Donasi", path: "donasi" },
    { id: 2, name: "Zakat", path: "zakat" },
    { id: 3, name: "Sedekah", path: "sedekah" },
    { id: 4, name: "Waqaf", path: "waqaf" },
    { id: 5, name: "Kurban", path: "kurban" },
  ];
  return (
    <>
      <div className="px-2 py-5 bg-linear-to-r from-blue-500 to-blue-700 flex items-center justify-between fixed top-0 left-0 w-full z-100 shadow-lg/50">
        <NavLink to={"/"} className="uppercase text-2xl">
          home
        </NavLink>
        <div className="gap-5 justify-between font-medium hidden sm:flex">
          {navigation.map((nav) => {
            return (
              <NavLink key={nav.id} to={nav.path}>
                {nav.name}
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
