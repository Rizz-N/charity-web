// src/pages/ZakatMaal.jsx
import { useState } from "react";
import { LuCalendar, LuCircleAlert } from "react-icons/lu";
import { FaRupiahSign } from "react-icons/fa6";

const ZMaal = () => {
  const [savings, setSavings] = useState("");
  const [gold, setGold] = useState("");
  const [business, setBusiness] = useState("");
  const [result, setResult] = useState(null);

  const GOLD_PRICE = 1000000;
  const NISAB_GRAM = 85;
  const NISAB_AMOUNT = GOLD_PRICE * NISAB_GRAM;

  const calculateZakat = () => {
    const totalWealth =
      (parseFloat(savings) || 0) +
      (parseFloat(gold) * GOLD_PRICE || 0) +
      (parseFloat(business) || 0);

    if (totalWealth >= NISAB_AMOUNT) {
      const zakatAmount = totalWealth * 0.025;
      setResult({
        eligible: true,
        totalWealth: totalWealth,
        zakat: zakatAmount,
        nisab: NISAB_AMOUNT,
        message: `Alhamdulillah, total harta Anda telah mencapai nisab. Wajib mengeluarkan zakat maal.`,
      });
    } else {
      setResult({
        eligible: false,
        totalWealth: totalWealth,
        zakat: 0,
        nisab: NISAB_AMOUNT,
        message: `Total harta Anda (Rp${totalWealth.toLocaleString()}) belum mencapai nisab Rp${NISAB_AMOUNT.toLocaleString()}. Belum wajib zakat.`,
      });
    }
  };

  return (
    <>
      <div className="max-w-2xl mx-auto px-4 md:px-6 py-8">
        {/* header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-emerald-700 flex items-center gap-3">
            <FaRupiahSign className="w-7 h-7 md:w-9 md:h-9" />
            Zakat Maal
          </h1>

          <p className="text-sm md:text-base text-slate-500 mt-3 leading-relaxed">
            Hitung zakat harta berdasarkan tabungan, emas, dan investasi yang
            dimiliki.
          </p>
        </div>

        {/* card */}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-5 md:p-8">
          {/* info */}
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex gap-3 mb-6">
            <LuCalendar className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />

            <div className="text-sm text-amber-800">
              <p className="font-semibold mb-2">Syarat Zakat Maal</p>

              <ul className="space-y-1 list-disc list-inside">
                <li>Harta telah mencapai haul (1 tahun)</li>

                <li>
                  Nisab setara 85 gram emas: Rp{NISAB_AMOUNT.toLocaleString()}
                </li>

                <li>Kadar zakat sebesar 2.5%</li>
              </ul>
            </div>
          </div>

          {/* form */}
          <div className="space-y-5">
            {/* savings */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Tabungan & Deposito
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  Rp
                </span>

                <input
                  type="number"
                  value={savings}
                  onChange={(e) => setSavings(e.target.value)}
                  placeholder="Jumlah tabungan"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-10 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* gold */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Emas & Perak (gram)
              </label>

              <input
                type="number"
                value={gold}
                onChange={(e) => setGold(e.target.value)}
                placeholder="Contoh: 100"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
              />

              <p className="text-xs text-slate-400 mt-2">
                Harga emas: Rp{GOLD_PRICE.toLocaleString()}/gram
              </p>
            </div>

            {/* business */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Harta Dagang / Investasi
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  Rp
                </span>

                <input
                  type="number"
                  value={business}
                  onChange={(e) => setBusiness(e.target.value)}
                  placeholder="Modal + keuntungan"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-10 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* button */}
            <button
              onClick={calculateZakat}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-medium transition"
            >
              Hitung Zakat Maal
            </button>
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
                  <span className="font-semibold">Total Harta:</span> Rp
                  {result.totalWealth.toLocaleString()}
                </p>

                <p>
                  <span className="font-semibold">Nisab:</span> Rp
                  {result.nisab.toLocaleString()}
                </p>

                <p className="text-slate-600">{result.message}</p>

                {result.eligible && (
                  <div className="pt-4 mt-4 border-t border-emerald-200">
                    <p className="text-xl md:text-3xl font-bold text-emerald-700">
                      Rp{Math.round(result.zakat).toLocaleString()}
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
      </div>
    </>
  );
};

export default ZMaal;
