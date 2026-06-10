// src/pages/ZakatMaal.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { LuCalendar, LuCircleAlert } from "react-icons/lu";
import { FaRupiahSign } from "react-icons/fa6";
import Articlemal from "../components/ArticleMal";

const ZMaal = () => {
  const [wealth, setWealth] = useState("");
  const [metal, setMetal] = useState("");
  const [securitas, setSecuritas] = useState("");
  const [property, setProperty] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [collection, setCollection] = useState("");
  const [trade, setTrade] = useState("");
  const [other, setOther] = useState("");
  const [debt, setDebt] = useState("");
  const [gold, setGold] = useState("");

  const formatRupiah = (value) => {
    const number = value.replace(/\D/g, "");
    return new Intl.NumberFormat("id-ID").format(number);
  };
  const handleChange = (setter) => (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setter(value);
  };

  const totalWealth =
    (Number(wealth) || 0) +
    (Number(metal) || 0) +
    (Number(securitas) || 0) +
    (Number(property) || 0) +
    (Number(vehicle) || 0) +
    (Number(collection) || 0) +
    (Number(trade) || 0) +
    (Number(other) || 0) +
    (Number(debt) || 0);

  const nisabAmmount = (Number(gold) || 0) * 85;
  const eligible = totalWealth !== 0 && totalWealth >= nisabAmmount;
  const zakat = eligible ? totalWealth * 0.025 : 0;

  const resetForm = () => {
    setWealth("");
    setMetal("");
    setSecuritas("");
    setProperty("");
    setVehicle("");
    setCollection("");
    setTrade("");
    setOther("");
    setDebt("");
  };
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-2">
          <Articlemal />
        </div>
        <div className="flex-1">
          <p className="text-xl text-slate-500 uppercase font-bold">
            Kalkulator zakat mal
          </p>
          {/* form */}
          <div className="my-5 flex flex-col gap-3">
            <div>
              <label className="block text-md text-slate-500 mb-2 after:content-['*'] after:text-red-400 after:ml-1 ">
                Harta dalam bentuk tabungan/giro/deposito
              </label>
              <input
                type="text"
                inputMode="numeric"
                name=""
                id=""
                value={wealth ? `Rp ${formatRupiah(wealth)}` : "Rp 0"}
                onChange={handleChange(setWealth)}
                placeholder="Rp 0"
                className="w-full rounded-xl border border-slate-200 py-3 px-1 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-md text-slate-500 mb-2  ">
                Harta dalam bentuk logam mulia
              </label>
              <input
                type="text"
                inputMode="numeric"
                name=""
                id=""
                value={metal ? `Rp ${formatRupiah(metal)}` : "Rp 0"}
                onChange={handleChange(setMetal)}
                placeholder="Rp 0"
                className="w-full rounded-xl border border-slate-200 py-3 px-1 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-md text-slate-500 mb-2  ">
                Harta dalam bentuk surat berharga
              </label>
              <input
                type="text"
                inputMode="numeric"
                name=""
                id=""
                value={securitas ? `Rp ${formatRupiah(securitas)}` : "Rp 0"}
                onChange={handleChange(setSecuritas)}
                placeholder="Rp 0"
                className="w-full rounded-xl border border-slate-200 py-3 px-1 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-md text-slate-500 mb-2  ">
                Harta dalam bentuk property
              </label>
              <input
                type="text"
                inputMode="numeric"
                name=""
                id=""
                value={property ? `Rp ${formatRupiah(property)}` : "Rp 0"}
                onChange={handleChange(setProperty)}
                placeholder="Rp 0"
                className="w-full rounded-xl border border-slate-200 py-3 px-1 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-md text-slate-500 mb-2  ">
                Harta dalam bentuk kendaraan
              </label>
              <input
                type="text"
                inputMode="numeric"
                name=""
                id=""
                value={vehicle ? `Rp ${formatRupiah(vehicle)}` : "Rp 0"}
                onChange={handleChange(setVehicle)}
                placeholder="Rp 0"
                className="w-full rounded-xl border border-slate-200 py-3 px-1 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-md text-slate-500 mb-2  ">
                Harta dalam bentuk koleksi seni dan barang antik
              </label>
              <input
                type="text"
                inputMode="numeric"
                name=""
                id=""
                value={collection ? `Rp ${formatRupiah(collection)}` : "Rp 0"}
                onChange={handleChange(setCollection)}
                placeholder="Rp 0"
                className="w-full rounded-xl border border-slate-200 py-3 px-1 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-md text-slate-500 mb-2  ">
                Harta dalam bentuk stock barang dagang
              </label>
              <input
                type="text"
                inputMode="numeric"
                name=""
                id=""
                value={trade ? `Rp ${formatRupiah(trade)}` : "Rp 0"}
                onChange={handleChange(setTrade)}
                placeholder="Rp 0"
                className="w-full rounded-xl border border-slate-200 py-3 px-1 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-md text-slate-500 mb-2  ">
                Harta dalam bentuk lainnya
              </label>
              <input
                type="text"
                inputMode="numeric"
                name=""
                id=""
                value={other ? `Rp ${formatRupiah(other)}` : "Rp 0"}
                onChange={handleChange(setOther)}
                placeholder="Rp 0"
                className="w-full rounded-xl border border-slate-200 py-3 px-1 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-md text-slate-500 mb-2  ">
                Harta dalam bentuk piutang lancar
              </label>
              <input
                type="text"
                inputMode="numeric"
                name=""
                id=""
                value={debt ? `Rp ${formatRupiah(debt)}` : "Rp 0"}
                onChange={handleChange(setDebt)}
                placeholder="Rp 0"
                className="w-full rounded-xl border border-slate-200 py-3 px-1 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <span className="block text-md text-slate-500 mb-2 font-bold">
                jumlah harta
              </span>
              <p className="w-full rounded-xl border border-slate-200 py-3 px-1">
                Rp {totalWealth.toLocaleString("id-ID")}
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
                value={gold ? `Rp ${formatRupiah(gold)}` : "Rp 0"}
                onChange={handleChange(setGold)}
                placeholder="Rp 0"
                className="w-full rounded-xl border border-slate-200 py-3 px-1 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
            <div>
              <span className="block text-md text-slate-500 mb-2 font-bold">
                Besar nisab zakat mal pertahun
              </span>
              <p className="w-full rounded-xl border border-slate-200 py-3 px-1">
                Rp {nisabAmmount.toLocaleString("id-ID")}
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
                jumlah yang harus saya bayar pertahun
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
              to={`bayar`}
              state={{
                zakat,
                jenis: "zakat mal",
                type: "zm",
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

export default ZMaal;
