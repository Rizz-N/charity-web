// src/pages/ZakatPenghasilan.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { LuCalculator, LuTrendingUp, LuCircleAlert } from "react-icons/lu";
import ArticleZakatP from "../components/ArticleZakatP";

const ZPenghasilan = () => {
  const [income, setIncome] = useState("");
  const [otherIncome, setOtherIncome] = useState("");
  const [gold, setGold] = useState("");

  const formatRupiah = (value) => {
    const number = value.replace(/\D/g, "");
    return new Intl.NumberFormat("id-ID").format(number);
  };
  const handleIncomeChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setIncome(value);
  };

  const handleOtherIncomeChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setOtherIncome(value);
  };

  const handleGoldChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setGold(value);
  };
  const annualIncome = (Number(income) || 0) + (Number(otherIncome) || 0);

  const nisabAmmount = (Number(gold) || 0) * 85;
  const monthlyNisab = nisabAmmount / 12;
  const eligible = annualIncome !== 0 && annualIncome >= monthlyNisab;
  const zakat = eligible ? annualIncome * 0.025 : 0;

  const resetForm = () => {
    setIncome("");
    setOtherIncome("");
    setGold("");
  };

  return (
    <>
      <div className="flex gap-4 flex-col md:flex-row">
        <div className="flex-2">
          <ArticleZakatP />
        </div>
        {/* calculator */}
        <div className="flex-1">
          <p className="text-xl text-slate-500 uppercase font-bold">
            Kalkulator zakat penghasilan
          </p>
          {/* form */}
          <div className="my-5 flex flex-col gap-3">
            <div>
              <label className="block text-md text-slate-500 mb-2 after:content-['*'] after:text-red-400 after:ml-1 ">
                Penghasilan/Gaji perbulan
              </label>
              <input
                type="text"
                inputMode="numeric"
                name=""
                id=""
                value={income ? `Rp ${formatRupiah(income)}` : ""}
                onChange={handleIncomeChange}
                placeholder="Rp 0"
                className="w-full rounded-xl border border-slate-200 py-3 px-1 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-md text-slate-500 mb-2 after:content-['*'] after:text-red-400 after:ml-1 ">
                Bonus/Pendapatan Lain
              </label>
              <input
                type="text"
                inputMode="numeric"
                name=""
                id=""
                value={otherIncome ? `Rp ${formatRupiah(otherIncome)}` : ""}
                onChange={handleOtherIncomeChange}
                placeholder="Rp 0"
                className="w-full rounded-xl border border-slate-200 py-3 px-1 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <span className="block text-md text-slate-500 mb-2 font-bold">
                jumlah pendapatan perbulan
              </span>
              <p className="w-full rounded-xl border border-slate-200 py-3 px-1">
                Rp {annualIncome.toLocaleString("id-ID")}
              </p>
            </div>

            <div>
              <label className="block text-md text-slate-500 mb-2 after:content-['*'] after:text-red-400 after:ml-1 ">
                harga emas saat ini (per gram)
              </label>
              <input
                type="text"
                inputMode="numeric"
                name=""
                id=""
                value={gold ? `Rp ${formatRupiah(gold)}` : ""}
                onChange={handleGoldChange}
                placeholder="Rp 0"
                className="w-full rounded-xl border border-slate-200 py-3 px-1 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
            <div>
              <span className="block text-md text-slate-500 mb-2 font-bold">
                Besar nisab zakat penghasilan perbulan
              </span>
              <p className="w-full rounded-xl border border-slate-200 py-3 px-1">
                Rp {monthlyNisab.toLocaleString("id-ID")}
              </p>
            </div>

            <div>
              <span className="block text-md text-slate-500 mb-2 font-bold">
                apakah saya wajib membayar zakat penghasilan?
              </span>
              <p className="w-full rounded-xl border border-slate-200 py-3 px-1">
                {eligible ? "YA" : "TIDAK"}
              </p>
            </div>

            <div>
              <span className="block text-md text-slate-500 mb-2 font-bold">
                jumlah yang harus saya bayar per bulan
              </span>
              <p className="w-full rounded-xl border border-slate-200 py-3 px-1">
                Rp {zakat.toLocaleString("id-ID")}
              </p>
            </div>

            <button
              onClick={resetForm}
              className="w-full text-slate-500 border-2 border-slate-500 font-bold rounded-xl py-3 hover:bg-slate-100 cursor-pointer"
            >
              Hitung ulang
            </button>
            <Link
              to={`/bayar/zakat/penghasilan/totalpay${zakat}`}
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

export default ZPenghasilan;
