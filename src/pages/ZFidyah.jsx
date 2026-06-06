// src/pages/Fidyah.jsx
import { useState } from "react";
import {
  LuCalendar,
  LuUtensilsCrossed,
  LuCalculator as CalcIcon,
} from "react-icons/lu";
import ArticleFidyah from "../components/ArticleFidyah";

const ZFidyah = () => {
  const [daysMissed, setDaysMissed] = useState("");
  const [ricePrice, setRicePrice] = useState("15000");
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState("");

  const RICE_PER_DAY_KG = 0.75; // 1 mud = 0.75 kg
  const RICE_PER_DAY_LITER = 1.05;

  const calculateFidyah = () => {
    const days = parseInt(daysMissed) || 0;
    const pricePerKg = parseFloat(ricePrice) || 0;

    if (days <= 0) {
      setMessage("Masukkan jumlah hari puasa yang ditinggalkan");
      return;
    } else {
      setMessage("");
    }

    const totalRiceKg = days * RICE_PER_DAY_KG;
    const totalRiceLiter = days * RICE_PER_DAY_LITER;
    const totalMoney = totalRiceKg * pricePerKg;

    setResult({
      days: days,
      riceKg: totalRiceKg,
      riceLiter: totalRiceLiter,
      money: totalMoney,
    });
  };

  const reset = () => {
    setDaysMissed("");
    setRicePrice("");
    setResult("");
    setMessage("");
  };

  return (
    <>
      <div>
        <ArticleFidyah />
      </div>

      {/* calculator */}
      <div className="max-w-2xl mx-auto px-4 md:px-6 py-8">
        {/* header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-cyan-700 flex items-center gap-3">
            <LuUtensilsCrossed className="w-7 h-7 md:w-9 md:h-9" />
            Fidyah Puasa
          </h1>

          <p className="text-sm md:text-base text-slate-500 mt-3 leading-relaxed">
            Hitung jumlah fidyah berdasarkan hari puasa yang ditinggalkan dan
            harga beras setempat.
          </p>
        </div>

        {/* card */}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-5 md:p-8">
          {/* info */}
          <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-4 mb-6">
            <p className="font-semibold text-cyan-800 mb-2">
              🍽️ Tentang Fidyah
            </p>

            <div className="space-y-2 text-sm text-cyan-700 leading-relaxed">
              <p>
                Fidyah adalah tebusan bagi orang yang tidak mampu berpuasa
                karena sakit menahun, usia lanjut, atau kondisi tertentu.
              </p>

              <p>
                Kadar fidyah: 1 mud (±0.75 kg makanan pokok) per hari puasa.
              </p>
            </div>
          </div>

          {/* form */}
          <div className="space-y-5">
            {/* days */}
            <div>
              <label className=" text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                <LuCalendar className="w-4 h-4" />
                Jumlah Hari Puasa
              </label>

              <input
                type="number"
                value={daysMissed}
                onChange={(e) => setDaysMissed(e.target.value)}
                placeholder="Contoh: 10"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            {/* rice price */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Harga Beras per Kg
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  Rp
                </span>

                <input
                  type="number"
                  value={ricePrice}
                  onChange={(e) => setRicePrice(e.target.value)}
                  placeholder="Harga beras setempat"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-10 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

            {/* button */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={calculateFidyah}
                className=" flex-1 w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-xl font-medium transition"
              >
                <CalcIcon className="w-4 h-4" />
                Hitung Fidyah
              </button>
              <button
                onClick={reset}
                className="sm:w-32 border border-slate-200 hover:bg-slate-100 py-3 rounded-xl font-medium transition"
              >
                Reset
              </button>
            </div>
          </div>

          {/* result */}
          {message && (
            <div className="mt-8 rounded-2xl border border-cyan-100 bg-cyan-50 p-5">
              {message}
            </div>
          )}
          {result && (
            <div className="mt-8 rounded-2xl border border-cyan-100 bg-cyan-50 p-5">
              <h3 className="font-bold text-lg text-cyan-800 mb-4">
                Fidyah untuk {result.days} Hari
              </h3>

              <div className="space-y-3 text-sm md:text-base">
                <div className="flex justify-between gap-4">
                  <span className="text-slate-600">
                    🌾 Beras (0.75 kg/hari)
                  </span>

                  <span className="font-semibold">
                    {result.riceKg.toFixed(2)} kg
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-slate-600">🍚 Setara liter</span>

                  <span className="font-semibold">
                    {result.riceLiter.toFixed(2)} liter
                  </span>
                </div>

                <div className="pt-4 mt-4 border-t border-cyan-200">
                  <p className="text-sm text-slate-500 mb-1">Total fidyah</p>

                  <p className="text-2xl md:text-4xl font-bold text-cyan-700">
                    Rp{Math.round(result.money).toLocaleString()}
                  </p>

                  <p className="text-xs md:text-sm text-slate-500 mt-2">
                    Berdasarkan harga beras Rp
                    {ricePrice.toLocaleString()}/kg
                  </p>
                </div>
              </div>

              {/* payment info */}
              <div className="mt-5 bg-white rounded-xl p-4 border border-cyan-100">
                <p className="font-semibold text-sm mb-2 text-cyan-800">
                  📌 Cara Pembayaran
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Berikan makanan pokok sebanyak{" "}
                  <span className="font-semibold">
                    {result.riceKg.toFixed(2)} kg
                  </span>{" "}
                  atau uang sebesar{" "}
                  <span className="font-semibold">
                    Rp{Math.round(result.money).toLocaleString()}
                  </span>{" "}
                  kepada fakir miskin.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* footer */}
        <p className="text-center text-xs md:text-sm text-slate-400 mt-5">
          Perhitungan fidyah berdasarkan standar 1 mud makanan pokok per hari
        </p>
      </div>
    </>
  );
};

export default ZFidyah;
