// src/pages/ZakatEmas.jsx
import { useState } from "react";
import { LuGem, LuWeight, LuTrendingUp } from "react-icons/lu";

const ZEmas = () => {
  const [goldGram, setGoldGram] = useState("");
  const [silverGram, setSilverGram] = useState("");
  const [result, setResult] = useState(null);

  const GOLD_PRICE = 1000000;
  const SILVER_PRICE = 15000;
  const GOLD_NISAB = 85;
  const ZAKAT_RATE = 0.025;

  const calculateZakat = () => {
    const goldAmount = parseFloat(goldGram) || 0;
    const silverAmount = parseFloat(silverGram) || 0;

    const goldValue = goldAmount * GOLD_PRICE;
    const silverValue = silverAmount * SILVER_PRICE;
    const totalValue = goldValue + silverValue;

    if (goldAmount >= GOLD_NISAB) {
      const zakatGoldGram = goldAmount * ZAKAT_RATE;
      const zakatGoldValue = zakatGoldGram * GOLD_PRICE;
      setResult({
        eligible: true,
        goldGram: goldAmount,
        zakatGram: zakatGoldGram,
        zakatValue: zakatGoldValue,
        totalValue: totalValue,
        message: `Emas yang Anda miliki (${goldAmount} gram) telah mencapai nisab (85 gram). Wajib zakat emas.`,
      });
    } else {
      setResult({
        eligible: false,
        goldGram: goldAmount,
        nisabGram: GOLD_NISAB,
        message: `Emas Anda ${goldAmount} gram belum mencapai nisab ${GOLD_NISAB} gram. Belum wajib zakat emas.`,
      });
    }
  };

  const reset = () => {
    setGoldGram("");
    setSilverGram("");
    setResult("");
  };

  return (
    <>
      <div className="max-w-2xl mx-auto px-4 md:px-6 py-8">
        {/* header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-amber-700 flex items-center gap-3">
            <LuGem className="w-7 h-7 md:w-9 md:h-9" />
            Zakat Emas & Perak
          </h1>

          <p className="text-sm md:text-base text-slate-500 mt-3 leading-relaxed">
            Hitung zakat emas dan perak berdasarkan jumlah gram yang dimiliki
            selama 1 tahun.
          </p>
        </div>

        {/* card */}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-5 md:p-8">
          {/* info */}
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex gap-3 mb-6">
            <LuWeight className="w-5 h-5 text-amber-600 shrink-0 mt-1" />

            <div className="text-sm text-amber-800 space-y-1">
              <p className="font-semibold">Ketentuan Zakat</p>

              <p>Nisab emas: 85 gram</p>

              <p>Kadar zakat: 2.5%</p>

              <p>Haul kepemilikan: 1 tahun</p>

              <p>Harga emas: Rp{GOLD_PRICE.toLocaleString()}/gram</p>
            </div>
          </div>

          {/* form */}
          <div className="space-y-5">
            {/* gold */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Jumlah Emas (gram)
              </label>

              <input
                type="number"
                value={goldGram}
                onChange={(e) => setGoldGram(e.target.value)}
                placeholder="Contoh: 100"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {/* silver */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Jumlah Perak (opsional)
              </label>

              <input
                type="number"
                value={silverGram}
                onChange={(e) => setSilverGram(e.target.value)}
                placeholder="Perak nisab 595 gram"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
              />

              <p className="text-xs text-slate-400 mt-2">
                Nisab perak setara 595 gram
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {/* button */}
              <button
                onClick={calculateZakat}
                className=" flex-1 w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-xl font-medium transition"
              >
                <LuTrendingUp className="w-4 h-4" />
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
            <div
              className={`mt-8 rounded-2xl p-5 border ${
                result.eligible
                  ? "bg-amber-50 border-amber-200"
                  : "bg-slate-50 border-slate-200"
              }`}
            >
              <h3 className="font-bold text-lg mb-4">Hasil Perhitungan</h3>

              {result.eligible ? (
                <div className="space-y-3">
                  <p className="text-slate-700">{result.message}</p>

                  <div className="pt-4 border-t border-amber-200">
                    <p className="text-sm text-slate-500 mb-1">
                      Zakat yang harus dibayar
                    </p>

                    <p className="text-2xl md:text-4xl font-bold text-amber-700">
                      {result.zakatGram.toFixed(2)} gram
                    </p>

                    <p className="text-lg md:text-2xl font-semibold text-emerald-700 mt-2">
                      Rp{Math.round(result.zakatValue).toLocaleString()}
                    </p>

                    {result.goldGram > 0 && (
                      <p className="text-sm text-slate-500 mt-2">
                        (2.5% × {result.goldGram} gram emas)
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <p className="text-slate-600">{result.message}</p>
              )}
            </div>
          )}
        </div>

        {/* footer */}
        <p className="text-center text-xs md:text-sm text-slate-400 mt-5">
          Perhitungan menggunakan standar nisab emas 85 gram
        </p>
      </div>
    </>
  );
};

export default ZEmas;
