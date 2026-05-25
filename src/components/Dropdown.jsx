import React from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const Dropdown = ({ title, data, openId, setOpenId, id }) => {
  const isOpen = openId === id;

  const handleToggle = () => {
    setOpenId(isOpen ? null : id);
  };

  return (
    <div className="px-4 py-3 md:hidden">
      {/* HEADER */}
      <button
        onClick={handleToggle}
        className="flex items-center justify-between w-full text-left"
      >
        <span className="font-semibold text-lg">{title}</span>

        <FaChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* CONTENT */}
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-96 mt-3" : "max-h-0"}
        `}
      >
        <div className="flex flex-col gap-2">
          {data.map((n) => (
            <NavLink
              key={n.id}
              to={`/${n.path}`}
              className="block px-3 py-2 rounded-lg text-sm transition"
            >
              {n.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
