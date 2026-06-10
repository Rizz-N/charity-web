import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BiHome } from "react-icons/bi";

const Breadcrumb = () => {
  const location = useLocation();

  // ambil path dan pecah
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="flex items-center gap-2 pb-4 text-sm flex-wrap ml-5">
      {/* home */}
      <Link to="/" className="text-slate-500 hover:text-black transition">
        <BiHome className="text-lg" />
      </Link>

      {/* dynamic breadcrumb */}
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        const isLast = index === pathnames.length - 1;

        return (
          <React.Fragment key={to}>
            <span className="text-slate-400">/</span>

            {isLast ? (
              <span className="text-slate-700 capitalize">
                {decodeURIComponent(value).replace(/-/g, " ")}
              </span>
            ) : (
              <Link
                to={to}
                className="text-slate-500 hover:text-black transition capitalize"
              >
                {decodeURIComponent(value)}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
