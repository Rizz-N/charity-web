import React, { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import { Link } from "react-router-dom";
import { data } from "../models/content";

const DonasiPage = () => {
  const options = ["Terbaru", "Terlama", "Sisa Hari Terdekat"];
  const filterData = data.filter((item) => item.type === "donasi");
  const [selected, setSelected] = useState("Terbaru");
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mt-20">
        {/* filter */}
        <div className="px-10 py-5 border-b border-gray-400 relative flex items-center justify-end gap-5">
          <p className="text-xl font-medium">Urutkan</p>

          {/* button */}
          <button
            onClick={() => setOpen(!open)}
            className="
          min-w- 42.5
          px-6
          py-3
          border-2
          border-blue-500
          rounded-full
          flex
          items-center
          justify-between
          text-blue-600
          font-semibold
          bg-white
        "
          >
            {selected}

            <LuChevronDown
              size={20}
              className={`transition ${open ? "rotate-180" : ""}`}
            />
          </button>

          {/* dropdown */}
          {open && (
            <div
              className="
            absolute
            top-24
            right-5
            w-70
            bg-white
            rounded-2xl
            shadow-xl
            border
            p-3
            z-50
          "
            >
              {options.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelected(item);
                    setOpen(false);
                  }}
                  className="
                w-full
                flex
                items-center
                gap-4
                px-4
                py-4
                rounded-xl
                hover:bg-gray-100
                transition
              "
                >
                  {/* radio */}
                  <div
                    className={`
                  w-5
                  h-5
                  rounded-full
                  border-2
                  flex
                  items-center
                  justify-center
                  ${selected === item ? "border-blue-500" : "border-gray-300"}
                `}
                  >
                    {selected === item && (
                      <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />
                    )}
                  </div>

                  <span className="text-lg text-gray-700">{item}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* card news */}
        <div className="px-6 md:px-10 mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filterData.map((d) => {
            return (
              <div
                key={d.id}
                className="bg-white flex flex-row md:flex-col rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition duration-300 group"
              >
                {/* image */}
                <div className="w-40 md:w-full md:h-52 shrink-0 overflow-hidden">
                  <img
                    src={d.thumbnail}
                    alt={d.title}
                    className="w-full h-full object-cover "
                  />
                </div>

                {/* content */}
                <div className="p-4 md:p-6 flex flex-col flex-1 gap-3">
                  <span className="text-xs md:text-sm text-blue-600 font-medium">
                    {d.createdAt}
                  </span>

                  <p className="text-base md:text-xl font-bold text-slate-800 line-clamp-2">
                    {d.title}
                  </p>

                  <p className="text-sm md:text-base text-slate-500 leading-relaxed line-clamp-3">
                    {d.excerpt}
                  </p>

                  <Link
                    to={`/donasi/${d.slug}`}
                    className="mt-auto w-fit px-4 py-2 text-xs md:text-sm rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DonasiPage;
