// src/pages/ZakatFitrah.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { LuUsers, LuWheat } from "react-icons/lu";
import { FaRupiahSign, FaPlus, FaMinus } from "react-icons/fa6";
import ArticleFitrah from "../components/ArticleFitrah";

const ZFitrah = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrease = () => {
    setCount((prevCount) => Math.max(0, prevCount - 1));
  };
  const zakat = count * 50000;
  const reset = () => setCount(0);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-2">
          <ArticleFitrah />
        </div>
        {/* kalkulator zakat fitrah */}
        <div className="flex-1">
          <p className="text-xl text-slate-500 uppercase font-bold">
            Kalkulator zakat fitrah
          </p>
          {/* form */}
          <div className="my-5 flex flex-col gap-3">
            <div>
              <span className="block text-md text-slate-500 mb-2 font-bold">
                jumlah orang yang ingin membayar zakat
              </span>
              <div className="flex items-center gap-1 w-full border-2 border-slate-500 rounded-xl">
                <button
                  onClick={decrease}
                  className="flex-1 flex justify-center py-3 "
                >
                  <FaMinus />
                </button>
                <p className="flex-2 text-center py-3 border-x-2 border-slate-500">
                  {count}
                </p>
                <button
                  onClick={increase}
                  className="flex-1 flex justify-center py-3 "
                >
                  <FaPlus />
                </button>
              </div>
            </div>

            <div>
              <span className="block text-md text-slate-500 mb-2 font-bold">
                jumlah yang harus saya bayar
              </span>
              <p className="w-full rounded-xl border border-slate-200 py-3 px-1">
                Rp {zakat.toLocaleString("id-ID")}
              </p>
            </div>

            <button
              onClick={reset}
              className="w-full text-slate-500 border-2 border-slate-500 font-bold rounded-xl py-3 hover:bg-slate-100 cursor-pointer"
            >
              Hitung ulang
            </button>
            <Link
              to={`bayar`}
              state={{
                zakat,
                jenis: "zakat fitrah",
                type: "zft",
              }}
              className="w-full text-center text-white font-bold rounded-xl py-3 bg-linear-to-r from-blue-500 to-blue-700 hover:bg-linear-to-r hover:from-blue-400 hover:to-blue-600 cursor-pointer"
            >
              Bayar zakat
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZFitrah;
