import React, { useState } from "react";
import NiatZakat from "../components/NiatZakat";
import Breadcrumb from "../components/Breadcrumb";
import { paymentHandler } from "../services/handlerPay";
import { useLocation } from "react-router-dom";

const Paymentzakat = () => {
  const location = useLocation();
  const [zakat, setZakat] = useState(location.state?.zakat?.toString() || "");
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");

  const { type, jenis } = location.state || 0;

  const formatRupiah = (value) => {
    const number = value.replace(/\D/g, "");
    return new Intl.NumberFormat("id-ID").format(number);
  };

  const handleZakatChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setZakat(value);
  };

  const handleTelephoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setTelephone(value);
  };

  const total = zakat + 4000;
  const isFormValid = name && telephone && email;

  return (
    <>
      <div className="mt-20">
        <Breadcrumb />
        {/* header */}
        <div className="w-full bg-slate-100 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 flex flex-col items-center justify-center py-6 px-8 border-b md:border-b-0 md:border-r border-slate-300">
              <p className="text-sm text-blue-600 font-medium text-center">
                Kamu akan berzakat untuk
              </p>
              <p className="text-xl font-bold text-center mt-1">{jenis}</p>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center py-6 px-8">
              <p className="text-sm text-blue-600 font-medium text-center">
                Total zakat yang akan kamu bayarkan
              </p>
              <p className="text-xl font-bold text-center mt-1">Rp {zakat}</p>
            </div>
          </div>
        </div>
        {/* form */}
        <div className="w-full flex justify-center ">
          <div className="mt-10 px-5 flex flex-col gap-4 md:max-w-2xl">
            <div>
              <label className="block text-md font-bold text-slate-500 mb-2 after:content-['*'] after:text-red-400 after:ml-1 ">
                Masukan nominal zakat
              </label>
              <input
                type="text"
                inputMode="numeric"
                name=""
                id=""
                value={zakat ? `Rp ${formatRupiah(zakat)}` : ""}
                onChange={handleZakatChange}
                placeholder="Rp 0"
                className="w-full rounded-xl border border-slate-200 py-3 px-1 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-md text-slate-500 mb-2 after:content-['*'] after:text-red-400 after:ml-1 ">
                Masukan profile muzaki
              </label>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="w-full rounded-xl border border-slate-200 py-3 px-1 focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full rounded-xl border border-slate-200 py-3 px-1 focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <input
                  type="text"
                  inputMode="numeric"
                  value={telephone}
                  onChange={handleTelephoneChange}
                  placeholder="telephone"
                  className="w-full rounded-xl border border-slate-200 py-3 px-1 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              <div className="mt-10">
                <span className="block text-md text-slate-500 mb-2 font-bold">
                  Total
                </span>
                <p className="w-full rounded-xl border border-slate-200 bg-slate-100 py-3 px-1">
                  Rp {zakat.toLocaleString("id-ID")}
                </p>
              </div>

              <NiatZakat />

              <button
                disabled={!isFormValid}
                onClick={() =>
                  paymentHandler.getTokenPay({
                    id: type,
                    amount: total,
                    name: name,
                    email: email,
                    phone: telephone,
                  })
                }
                className={`w-full mt-8 py-4 rounded-2xl font-semibold text-white transition duration-300
              ${
                isFormValid
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-blue-300 cursor-not-allowed"
              }`}
              >
                Lanjutkan Pembayaran
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Paymentzakat;
