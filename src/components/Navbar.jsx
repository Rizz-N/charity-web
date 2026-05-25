import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const sidebarRef = useRef();

  const navigation = [
    { id: 1, name: "Donasi", path: "donasi" },
    { id: 2, name: "Zakat", path: "zakat" },
    { id: 3, name: "Sedekah", path: "sedekah" },
    { id: 4, name: "Waqaf", path: "waqaf" },
    { id: 5, name: "Kurban", path: "kurban" },
  ];

  // close ketika klik luar sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      {/* navbar */}
      <div className="px-4 md:px-8 py-4 bg-linear-to-r from-blue-500 to-blue-700 flex items-center justify-between fixed top-0 left-0 w-full z-50 shadow-lg">
        {/* logo */}
        <NavLink to="/" className="uppercase text-2xl font-bold text-white">
          home
        </NavLink>

        {/* desktop nav */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {navigation.map((nav) => {
            return (
              <NavLink
                key={nav.id}
                to={nav.path}
                className={({ isActive }) =>
                  `
                  relative inline-block pb-2 text-white transition-all duration-300

                  after:content-['']
                  after:absolute
                  after:left-0
                  after:bottom-0
                  after:h-0.5
                  after:w-0
                  after:bg-white
                  after:transition-all
                  after:duration-300

                  hover:after:w-full

                  ${isActive ? "after:w-full font-semibold" : ""}
                  `
                }
              >
                {nav.name}
              </NavLink>
            );
          })}
        </div>

        {/* mobile button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white text-3xl"
        >
          <FiMenu />
        </button>
      </div>

      {/* overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-screen w-1/2 bg-white z-50 shadow-2xl transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* header */}
        <div className="flex items-center justify-between px-5 py-5 border-b">
          <p className="text-xl font-bold text-blue-700">Menu</p>

          <button
            onClick={() => setOpen(false)}
            className="text-3xl text-slate-600"
          >
            <FiX />
          </button>
        </div>

        {/* nav */}
        <div className="flex flex-col p-5">
          {navigation.map((nav) => {
            return (
              <NavLink
                key={nav.id}
                to={nav.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `
                  px-4 py-3 rounded-xl font-medium transition-all duration-300

                  ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }
                  `
                }
              >
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
