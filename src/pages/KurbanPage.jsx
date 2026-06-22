import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FaWhatsapp, FaFacebook, FaShareAlt, FaLink } from "react-icons/fa";
import { kurbanData } from "../models/content";
const KurbanPage = () => {
  const [openShare, setOpenShare] = useState(null);
  const formatter = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  // const BASE_URL = "";
  const getShareUrl = (slug) => {
    return `${window.location.origin}${slug}`;
  };

  const getShareText = (slug) => {
    return ` AYO QURBAN di YBMI 

Mari berpartisipasi dalam ibadah qurban melalui Yayasan Berkembang Mandiri Indonesia.

${getShareUrl(slug)}`;
  };

  const copyLink = async (slug) => {
    await navigator.clipboard.writeText(getShareUrl(slug));
    toast("Link berhasil disalin");
  };

  useEffect(() => {
    const closeShare = () => setOpenShare(null);

    document.addEventListener("click", closeShare);

    return () => {
      document.removeEventListener("click", closeShare);
    };
  }, []);

  const data = JSON.parse(localStorage.getItem("products")) || [];

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

                  <div className="flex justify-between items-center mt-auto">
                    <div className="relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenShare(openShare === k.id ? null : k.id);
                        }}
                        className="p-3 rounded-full cursor-pointer border border-slate-200 hover:bg-blue-100"
                      >
                        <FaShareAlt />
                      </button>

                      {openShare === k.id && (
                        <div
                          className="absolute bottom-14 left-0 bg-white shadow-xl border rounded-2xl p-3 flex gap-4 z-50"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {/* WA */}
                          <a
                            href={`https://wa.me/?text=${encodeURIComponent(
                              getShareText(k.slug),
                            )}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-green-500 text-2xl"
                          >
                            <FaWhatsapp />
                          </a>

                          {/* FB */}
                          <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                              getShareUrl(k.slug),
                            )}&quote=${encodeURIComponent(
                              " AYO QURBAN di YBMI ",
                            )}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 text-2xl"
                          >
                            <FaFacebook />
                          </a>

                          {/* Copy */}
                          <button
                            onClick={() => copyLink(k.slug)}
                            className="text-slate-600 text-2xl"
                          >
                            <FaLink />
                          </button>
                        </div>
                      )}
                    </div>

                    <Link
                      to={`bayar/${k.slug}`}
                      className="px-5 py-3 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition duration-300"
                    >
                      Kurban Sekarang
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
          {data.map((k) => {
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

                  <div className="flex justify-between items-center mt-auto">
                    <div className="relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenShare(openShare === k.id ? null : k.id);
                        }}
                        className="p-3 rounded-full cursor-pointer border border-slate-200 hover:bg-blue-100"
                      >
                        <FaShareAlt />
                      </button>

                      {openShare === k.id && (
                        <div
                          className="absolute bottom-14 left-0 bg-white shadow-xl border rounded-2xl p-3 flex gap-4 z-50"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {/* WA */}
                          <a
                            href={`https://wa.me/?text=${encodeURIComponent(
                              getShareText(k.slug),
                            )}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-green-500 text-2xl"
                          >
                            <FaWhatsapp />
                          </a>

                          {/* FB */}
                          <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                              getShareUrl(k.slug),
                            )}&quote=${encodeURIComponent(
                              " AYO QURBAN di YBMI ",
                            )}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 text-2xl"
                          >
                            <FaFacebook />
                          </a>

                          {/* Copy */}
                          <button
                            onClick={() => copyLink(k.slug)}
                            className="text-slate-600 text-2xl"
                          >
                            <FaLink />
                          </button>
                        </div>
                      )}
                    </div>

                    <Link
                      to={`bayar/${k.slug}`}
                      className="px-5 py-3 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition duration-300"
                    >
                      Kurban Sekarang
                    </Link>
                  </div>
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
