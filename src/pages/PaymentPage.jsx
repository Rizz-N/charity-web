import React, { useState } from "react";
import { useParams } from "react-router-dom";
import thumb from "../assets/main-hero.png";
import Breadcrumb from "../components/Breadcrumb";
import { data } from "../models/content";
import { paymentHandler } from "../services/handlerPay";

const PaymentPage = () => {
  const { slug } = useParams();
  const datas = data.find((item) => item.slug === slug);
  const nominalList = [10000, 20000, 50000, 100000, 200000, 500000];

  const [amount, setAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [atasNama, setAtasNama] = useState("");
  const [message, setMessage] = useState("");

  const resetForm = () => {
    setAmount("");
    setSelectedAmount(null);
    setName("");
    setEmail("");
    setPhone("");
    setAtasNama("");
    setMessage("");
  };
  // validasi form
  const isFormValid = amount && name && email && phone && atasNama && message;

  // pilih nominal
  const handleSelectAmount = (value) => {
    setSelectedAmount(value);
    setAmount(value);
  };

  if (!datas) {
    return <div>Tidak ada data</div>;
  }
  return (
    <>
      {/* <div className="mt-20 px-10">
        <Breadcrumb />
      </div> */}
      {/* hero */}
      <div
        key={datas.id}
        className="mt-20 bg-linear-to-r from-blue-500 to-blue-700 flex flex-col md:flex-row justify-center items-start gap-8 px-6 md:px-10 py-10 rounded-b-3xl"
      >
        <div className="w-full">
          <img
            src={datas.thumbnail}
            alt="image"
            className="w-full object-cover rounded-3xl shadow-xl"
          />
        </div>

        <div className="text-center md:text-left">
          <p className="text-white font-bold text-3xl md:text-5xl leading-tight">
            {datas.title}
          </p>

          <p className="text-blue-100 mt-4 text-sm md:text-lg">
            {datas.excerpt}
          </p>
        </div>
      </div>

      {/* payment section */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* left */}
          <div className="lg:col-span-2 bg-white border border-slate-100 rounded-3xl shadow-lg p-5 md:p-8 space-y-8">
            {/* nominal */}
            <div>
              <p className="text-xl font-bold text-slate-800 mb-4">
                Masukkan Nominal Sedekah
              </p>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  Rp
                </span>

                <input
                  type="number"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  placeholder="Contoh: 50000"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-10 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* quick amount */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-5">
                {nominalList.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleSelectAmount(item)}
                    className={`py-3 rounded-xl border font-medium transition duration-300
                    ${
                      selectedAmount === item
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white hover:bg-slate-100 border-slate-200"
                    }`}
                  >
                    Rp {item.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            {/* donor */}
            <div>
              <p className="text-xl font-bold text-slate-800 mb-4">
                Profil Donatur
              </p>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Nama lengkap"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="number"
                  placeholder="Nomor telephone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* atas nama */}
            <div>
              <p className="text-xl font-bold text-slate-800 mb-4">Atas Nama</p>

              <input
                type="text"
                placeholder="Atas nama donasi"
                value={atasNama}
                onChange={(e) => setAtasNama(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* doa */}
            <div>
              <p className="text-xl font-bold text-slate-800 mb-4">
                Dukungan atau Doa
              </p>

              <textarea
                rows={5}
                placeholder="Tulis doa atau dukungan..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none resize-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* right */}
          <div className="bg-white border border-slate-100 rounded-3xl shadow-lg p-5 md:p-8 h-fit sticky top-24">
            <p className="text-2xl font-bold text-slate-800 mb-6">Ringkasan</p>

            <div className="space-y-4">
              <div className="flex justify-between text-slate-600">
                <p>Nominal</p>

                <p className="font-semibold text-slate-800">
                  Rp {amount ? Number(amount).toLocaleString() : "0"}
                </p>
              </div>

              <div className="border-t pt-4 flex justify-between">
                <p className="font-bold text-lg">Total</p>

                <p className="font-bold text-2xl text-blue-600">
                  Rp {amount ? Number(amount).toLocaleString() : "0"}
                </p>
              </div>
            </div>

            {/* payment button */}
            <button
              disabled={!isFormValid}
              onClick={() =>
                paymentHandler.getTokenPay(
                  {
                    id: datas.p_id,
                    amount: amount,
                    name: name,
                    email: email,
                    phone: phone,
                  },
                  resetForm,
                )
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

            <p className="text-xs text-slate-400 text-center mt-4">
              Dengan berdonasi Anda membantu mereka yang membutuhkan.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
