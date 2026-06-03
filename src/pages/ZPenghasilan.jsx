// src/pages/ZakatPenghasilan.jsx
import { useState } from "react";
import { LuCalculator, LuTrendingUp, LuCircleAlert } from "react-icons/lu";
import ArticleZakatP from "../components/ArticleZakatP";

const ZPenghasilan = () => {
  const [income, setIncome] = useState("");
  const [otherIncome, setOtherIncome] = useState("");
  const [result, setResult] = useState(null);

  const GOLD_PRICE = 2799000; // Rp2.799.000 per gram
  const NISAB_GRAM = 85;
  const NISAB_AMOUNT = GOLD_PRICE * NISAB_GRAM; // Rp85.000.000 per tahun
  const MONTHLY_NISAB = NISAB_AMOUNT / 12; // Rp7.083.333

  const calculateZakat = () => {
    const monthlyIncome = parseFloat(income) || 0;
    const bonus = parseFloat(otherIncome) || 0;
    const totalMonthly = monthlyIncome + bonus;

    const annualIncome = totalMonthly * 12;

    if (annualIncome >= NISAB_AMOUNT) {
      const zakatAmount = totalMonthly * 0.025;
      setResult({
        eligible: true,
        zakat: zakatAmount,
        nisab: MONTHLY_NISAB,
        annualIncome: annualIncome,
        message: `Penghasilan bulanan Anda mencapai nisab (Rp${MONTHLY_NISAB.toLocaleString()}/bulan). Wajib zakat 2.5% dari penghasilan bulanan.`,
      });
    } else {
      setResult({
        eligible: false,
        zakat: 0,
        nisab: MONTHLY_NISAB,
        annualIncome: annualIncome,
        message: `Penghasilan tahunan Anda (Rp${annualIncome.toLocaleString()}) belum mencapai nisab Rp${NISAB_AMOUNT.toLocaleString()}. Belum wajib zakat.`,
      });
    }
  };

  const resetForm = () => {
    setIncome("");
    setOtherIncome("");
    setResult(null);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row ">
        <main>
          <ArticleZakatP />
        </main>
        {/* kalkulator */}

        <aside className="w-full">
          <div className="max-w-2xl mx-auto px-4 md:px-6 py-8">
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-emerald-700 mb-4 leading-tight">
              Kalkulator Zakat
            </h1>
            {/* card */}
            <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-5 md:p-8">
              {/* info */}
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex gap-3 mb-6">
                <LuCircleAlert className="w-5 h-5 text-amber-600 shrink-0 mt-1" />

                <div className="text-sm text-amber-800 space-y-1">
                  <p className="font-semibold">Informasi Nisab</p>

                  <p>
                    Nisab tahunan: Rp
                    {NISAB_AMOUNT.toLocaleString()}
                  </p>

                  <p>
                    Nisab bulanan: Rp
                    {MONTHLY_NISAB.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* form */}
              <div className="space-y-5">
                {/* income */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Penghasilan Bulanan
                  </label>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      Rp
                    </span>

                    <input
                      type="number"
                      value={income}
                      onChange={(e) => setIncome(e.target.value)}
                      placeholder="Contoh: 8000000"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-10 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                {/* other income */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Bonus / Pendapatan Lain
                  </label>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      Rp
                    </span>

                    <input
                      type="number"
                      value={otherIncome}
                      onChange={(e) => setOtherIncome(e.target.value)}
                      placeholder="Contoh: 2000000"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-10 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                {/* button */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={calculateZakat}
                    className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-medium transition"
                  >
                    <LuCalculator className="w-4 h-4" />
                    Hitung Zakat
                  </button>

                  <button
                    onClick={resetForm}
                    className="sm:w-32 border border-slate-200 hover:bg-slate-100 py-3 rounded-xl font-medium transition"
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* result */}
              {result && (
                <div
                  className={`mt-8 rounded-2xl p-5 border ${
                    result.eligible
                      ? "bg-emerald-50 border-emerald-200"
                      : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <h3 className="font-bold text-lg mb-4">Hasil Perhitungan</h3>

                  <div className="space-y-2 text-sm md:text-base">
                    <p>
                      <span className="font-semibold">Total Penghasilan:</span>{" "}
                      Rp
                      {(
                        (parseFloat(income) || 0) +
                        (parseFloat(otherIncome) || 0)
                      ).toLocaleString()}
                    </p>

                    <p>
                      <span className="font-semibold">Pendapatan Tahunan:</span>{" "}
                      Rp
                      {result.annualIncome.toLocaleString()}
                    </p>

                    <p>
                      <span className="font-semibold">Nisab:</span> Rp
                      {NISAB_AMOUNT.toLocaleString()}
                    </p>

                    <p className="text-slate-600">{result.message}</p>

                    {result.eligible && (
                      <div className="pt-4 mt-4 border-t border-emerald-200">
                        <p className="text-xl md:text-3xl font-bold text-emerald-700">
                          Rp
                          {Math.round(result.zakat).toLocaleString()}
                        </p>

                        <p className="text-sm text-slate-500 mt-1">
                          Total zakat yang harus dibayar
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* footer */}
            <p className="text-center text-xs md:text-sm text-slate-400 mt-5">
              Perhitungan menggunakan nisab emas 85 gram dengan kadar zakat 2.5%
            </p>
          </div>
        </aside>
      </div>
    </>
  );
};

export default ZPenghasilan;
