import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Card = ({ Icon, title, desc, path }) => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <div className="flex items-center gap-2 text-2xl text-blue-800">
          {<Icon />}
          <p>{title}</p>
        </div>
        <p className="text-gray-500 text-shadow-sm text-sm md:text-[1rem]">
          {desc}
        </p>
      </div>
      <NavLink
        className="text-blue-800 mt-auto hover:text-blue-500 flex items-center gap-2 pt-2"
        to={path}
      >
        Mulai {title}
        <MdOutlineKeyboardDoubleArrowRight />
      </NavLink>
    </div>
  );
};

export default Card;
