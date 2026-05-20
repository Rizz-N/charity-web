import React, { useState } from "react";
import { navigation, about, faq } from "../models/navigation";
import { NavLink } from "react-router-dom";
import {
  FaChevronDown,
  FaFacebookSquare,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-10 px-10 py-12 mt-10 bg-white border-t border-slate-200">
        <div>
          <p className="text-blue-700 font-bold text-2xl mb-4">HOME</p>
          <ul className="space-y-2">
            {navigation.map((n) => (
              <li key={n.id}>
                <NavLink
                  to={`/${n.path}`}
                  className="text-slate-600 hover:text-blue-700 transition duration-200"
                >
                  {n.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-blue-700 font-bold text-2xl mb-4">About US</p>
          <ul className="space-y-2">
            {about.map((a) => (
              <li key={a.id}>
                <NavLink
                  to={`/${a.path}`}
                  className="text-slate-600 hover:text-blue-700 transition duration-200"
                >
                  {a.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-blue-700 font-bold text-2xl mb-4">FAQ</p>
          <ul className="space-y-2">
            {faq.map((f) => (
              <li key={f.id}>
                <NavLink
                  to={`/${f.path}`}
                  className="text-slate-600 hover:text-blue-700 transition duration-200"
                >
                  {f.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-blue-700 font-bold text-2xl mb-4">Social Media</p>

          <div className="flex gap-4 text-3xl">
            <a
              href=""
              className="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-700 hover:text-white transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href=""
              className="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-700 hover:text-white transition duration-300"
            >
              <FaFacebookSquare />
            </a>

            <a
              href=""
              className="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-700 hover:text-white transition duration-300"
            >
              <FaYoutube />
            </a>
          </div>

          <p className="text-sm text-slate-400 mt-5">
            © 2026 Your Company. All rights reserved.
          </p>
        </div>
      </div>

      {/* accordion component */}
      <div className="px-4 py-3 md:hidden">
        {/* HEADER */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between w-full text-left"
        >
          <span className="font-semibold text-lg">HOME</span>

          <FaChevronDown
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* CONTENT */}
        <div
          className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${open ? "max-h-96 mt-3" : "max-h-0"}
        `}
        >
          <div className="flex flex-col gap-2">
            {navigation.map((n) => (
              <NavLink
                key={n.id}
                to={`/${n.path}`}
                className={`block px-3 py-2 rounded-lg text-sm transition`}
              >
                {n.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <footer className="px-2 text-center text-slate-400 font-medium">
        &copy; HOME 2026
      </footer>
    </>
  );
};

export default Footer;
