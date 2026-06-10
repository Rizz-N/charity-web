// src/pages/ZakatEmas.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import ArticleGold from "../components/ArticleGold";

const ZEmas = () => {
  const [gold, setGold] = useState("");
  const [silver, setSilver] = useState("");

  const [goldPrice, setGoldPice] = useState("1140000");
  //
  const silverPrice = 13600;

  const formatRupiah = (value) => {
    const number = value.replace(/\D/g, "");
    return new Intl.NumberFormat("id-ID").format(number);
  };
  const handleChange = (setter) => (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setter(value);
  };
  const goldWeight = Number(gold) || 0;
  const eligible = goldWeight >= 85;
  const totalWealth = goldWeight * Number(goldPrice) || 0;
  const zakat = eligible ? totalWealth * 0.025 : 0;

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-2">
          <ArticleGold />
        </div>

        {/* calculator */}
        <div className="flex-1">
          <p className="text-xl text-slate-500 uppercase font-bold">
            Kalkulator zakat emas
          </p>
          {/* form */}
          <div className="my-5 flex flex-col gap-3">
            <div>
              <label className="block text-md text-slate-500 mb-2 after:content-['*'] after:text-red-400 after:ml-1 ">
                Emas Yang dimiliki (dalam betuk gr)
              </label>
              <input
                type="text"
                inputMode="numeric"
                name=""
                id=""
                value={gold}
                onChange={handleChange(setGold)}
                placeholder="0 gr"
                className="w-full rounded-xl border border-slate-200 py-3 px-1 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-md text-slate-500 mb-2 after:content-['*'] after:text-red-400 after:ml-1 ">
                Harga emas saat ini
              </label>
              <input
                type="text"
                inputMode="numeric"
                name=""
                id=""
                value={goldPrice ? `Rp ${formatRupiah(goldPrice)}` : "Rp 0"}
                onChange={handleChange(setGoldPice)}
                placeholder="Rp 0"
                className="w-full rounded-xl border border-slate-200 py-3 px-1 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <span className="block text-md text-slate-500 mb-2 font-bold">
                apakah saya wajib membayar zakat emas?
              </span>
              <p className="w-full rounded-xl border border-slate-200 py-3 px-1">
                {eligible ? "YA" : "TIDAK"}
              </p>
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
              onClick={() => setGold(0)}
              className="w-full text-slate-500 border-2 border-slate-500 font-bold rounded-xl py-3 hover:bg-slate-100 cursor-pointer"
            >
              Hitung ulang
            </button>
            <Link
              to={`bayar`}
              state={{
                zakat,
                jenis: "zakat emas",
                type: "ze",
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

export default ZEmas;
