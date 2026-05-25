import React from "react";
import { Link } from "react-router-dom";
import { kurbanData } from "../models/content";
const KurbanPage = () => {
  const formatter = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  return (
    <>
      <div className="mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 px-6 md:px-10 py-5">
          {kurbanData.map((k) => {
            return (
              <div
                key={k.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition duration-300 group"
              >
                {/* image */}
                <div className="overflow-hidden">
                  <img
                    src={k.image}
                    alt={k.title}
                    className="w-full h-60 object-cover "
                  />
                </div>

                {/* content */}
                <div className="p-6 flex flex-col gap-4">
                  <div className="space-y-2">
                    <p className="text-xl md:text-2xl font-bold text-slate-800 border-b border-slate-200 pb-2">
                      {k.title}
                    </p>

                    <p className="text-slate-600 text-sm md:text-base">
                      <span className="font-semibold text-green-600 ml-1">
                        {formatter(k.price)}
                      </span>
                      /Ekor
                    </p>

                    <p className="text-slate-600 text-sm md:text-base">
                      Bobot:
                      <span className="font-semibold ml-1">
                        {k.weight_min} - {k.weight_max} Kg
                      </span>
                    </p>
                  </div>

                  <Link
                    to={k.slug}
                    className="mt-auto text-center px-5 py-3 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition duration-300"
                  >
                    Kurban Sekarang
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

export default KurbanPage;
