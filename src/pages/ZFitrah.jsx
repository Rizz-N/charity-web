// src/pages/ZakatFitrah.jsx
import { useState } from "react";
import { LuUsers, LuWheat } from "react-icons/lu";
import { FaRupiahSign } from "react-icons/fa6";

const ZFitrah = () => {
  const [familyCount, setFamilyCount] = useState("");
  const [ricePrice, setRicePrice] = useState("15000");
  const [result, setResult] = useState(null);

  const RICE_PER_PERSON_KG = 2.5;
  const RICE_PER_PERSON_LITER = 3.5;

  const calculateFitrah = () => {
    const count = parseInt(familyCount) || 0;
    const pricePerKg = parseFloat(ricePrice) || 0;

    if (count <= 0) {
      alert("Masukkan jumlah jiwa");
      return;
    }

    const totalRiceKg = count * RICE_PER_PERSON_KG;
    const totalRiceLiter = count * RICE_PER_PERSON_LITER;
    const totalMoney = totalRiceKg * pricePerKg;

    setResult({
      count,
      riceKg: totalRiceKg,
      riceLiter: totalRiceLiter,
      money: totalMoney,
      ricePrice: pricePerKg,
    });
  };

  const reset = () => {
    setFamilyCount("");
    setResult(null);
    setRicePrice("15000");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 md:px-6 py-8">
      {/* header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-4xl font-bold text-emerald-700 flex items-center gap-3">
          <LuWheat className="w-7 h-7 md:w-9 md:h-9" />
          Zakat Fitrah
        </h1>

        <p className="text-sm md:text-base text-slate-500 mt-3 leading-relaxed">
          Hitung zakat fitrah berdasarkan jumlah jiwa dan harga beras setempat.
        </p>
      </div>

      {/* card */}
      <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-5 md:p-8">
        {/* info */}
        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 mb-6">
          <p className="font-semibold text-emerald-800 mb-2">
            📖 Ketentuan Zakat Fitrah
          </p>

          <ul className="list-disc list-inside text-sm text-emerald-700 space-y-1 leading-relaxed">
            <li>Wajib bagi setiap muslim yang mampu</li>
            <li>Ditunaikan sebelum shalat Idul Fitri</li>
            <li>2.5 kg atau 3.5 liter makanan pokok per jiwa</li>
            <li>Bisa dibayar dengan uang setara harga beras</li>
          </ul>
        </div>

        {/* form */}
        <div className="space-y-5">
          {/* family count */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
              <LuUsers className="w-4 h-4" />
              Jumlah Jiwa
            </label>

            <input
              type="number"
              value={familyCount}
              onChange={(e) => setFamilyCount(e.target.value)}
              placeholder="Contoh: 4"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* rice price */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
              <FaRupiahSign className="w-4 h-4" />
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
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-10 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={calculateFitrah}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-medium transition"
            >
              Hitung Zakat
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
        {result && (
          <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
            <h3 className="font-bold text-lg text-emerald-800 mb-4">
              Zakat untuk {result.count} Jiwa
            </h3>

            <div className="space-y-3 text-sm md:text-base">
              <div className="flex justify-between gap-4">
                <span className="text-slate-600">🌾 Beras (2.5 kg/jiwa)</span>

                <span className="font-semibold">{result.riceKg} kg</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-slate-600">
                  🍚 Beras (3.5 liter/jiwa)
                </span>

                <span className="font-semibold">
                  {result.riceLiter.toFixed(1)} liter
                </span>
              </div>

              <div className="pt-4 mt-4 border-t border-emerald-200">
                <p className="text-sm text-slate-500 mb-1">
                  Total zakat fitrah
                </p>

                <p className="text-2xl md:text-4xl font-bold text-emerald-700">
                  Rp{Math.round(result.money).toLocaleString()}
                </p>

                <p className="text-xs md:text-sm text-slate-500 mt-2">
                  Berdasarkan harga beras Rp
                  {result.ricePrice.toLocaleString()}/kg
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 text-center mt-5">
              Tunaikan zakat fitrah sebelum shalat Idul Fitri
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ZFitrah;
