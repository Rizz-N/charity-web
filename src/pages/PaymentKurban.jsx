import React, { useState } from "react";
import { paymentHandler } from "../services/handlerPay";
import { useParams } from "react-router-dom";
import { kurbanData } from "../models/content";
import Breadcrumb from "../components/Breadcrumb";
import { FaPlus, FaMinus } from "react-icons/fa6";

const PaymentKurban = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [atasNama, setAtasNama] = useState("");
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(1);

  const { slug } = useParams();

  const increase = () => {
    if (count < datas.stock) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  const decrease = () => {
    setCount((prevCount) => Math.max(1, prevCount - 1));
  };
  const reset = () => setCount(0);

  const serviceFee = 4000;

  const datas = kurbanData.find((item) => item.slug === slug);
  const amount = datas ? datas.price * count : 0;
  const fixAmount = datas ? datas.price * count + serviceFee : 0;

  const isFormValid = name && email && phone && atasNama;

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setAtasNama("");
    setMessage("");
    setCount(1);
  };

  return (
    <>
      <div className="mt-20">
        <Breadcrumb />
      </div>
      <div
        key={datas.id}
        className="bg-linear-to-r  from-blue-500 to-blue-700 flex flex-col md:flex-row justify-center items-center md:items-start gap-8 px-6 md:px-10 py-10 rounded-b-3xl"
      >
        <div>
          <img
            src={datas.image}
            alt="image"
            className="w-full min-w-62.5 max-w-112.5 h-75 object-cover rounded-3xl shadow-xl"
          />
        </div>

        <div className="text-center md:text-left">
          <p className="text-white font-bold text-3xl md:text-5xl leading-tight">
            {datas.title}
          </p>

          <p className="text-blue-100 mt-4 text-sm md:text-lg">
            {datas.description}
          </p>
        </div>
      </div>

      {/* payment section */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT */}
          <div className="lg:col-span-2 bg-white border border-slate-100 rounded-3xl shadow-lg p-6 md:p-8 space-y-8">
            {/* Informasi Kurban */}
            <div>
              <p className="text-xl font-bold text-slate-800 mb-4">
                Informasi Kurban
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
                  <p className="text-sm text-slate-500">Harga</p>
                  <p className="font-bold text-blue-600 text-lg">
                    Rp {datas.price.toLocaleString("id-ID")}
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
                  <p className="text-sm text-slate-500">Berat</p>
                  <p className="font-bold text-blue-600 text-lg">
                    {datas.weight_min} - {datas.weight_max} Kg
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
                  <p className="text-sm text-slate-500">Stok Tersedia</p>
                  <p className="font-bold text-blue-600 text-lg">
                    {datas.stock} Ekor
                  </p>
                </div>
              </div>
            </div>

            {/* Jumlah Kurban */}
            <div>
              <p className="text-xl font-bold text-slate-800 mb-4">
                Jumlah Hewan Kurban
              </p>

              <div className="flex items-center overflow-hidden rounded-2xl border border-slate-200 w-fit">
                <button
                  onClick={decrease}
                  className="w-14 h-14 flex items-center justify-center hover:bg-slate-100"
                >
                  <FaMinus />
                </button>

                <div className="w-20 text-center font-bold text-xl">
                  {count}
                </div>

                <button
                  onClick={increase}
                  className="w-14 h-14 flex items-center justify-center hover:bg-slate-100"
                >
                  <FaPlus />
                </button>
              </div>

              <div className="mt-5 rounded-2xl bg-blue-50 border border-blue-100 p-5">
                <p className="text-sm text-slate-500">Estimasi Total Kurban</p>

                <p className="text-3xl font-bold text-blue-600 mt-1">
                  Rp {amount.toLocaleString("id-ID")}
                </p>
              </div>
            </div>

            {/* Profil Donatur */}
            <div>
              <p className="text-xl font-bold text-slate-800 mb-4">
                Profil Pekurban
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
                  type="tel"
                  placeholder="Nomor Telepon"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Atas Nama */}
            <div>
              <p className="text-xl font-bold text-slate-800 mb-4">
                Atas Nama Pekurban
              </p>

              <input
                type="text"
                placeholder="Nama yang akan dicantumkan"
                value={atasNama}
                onChange={(e) => setAtasNama(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Doa */}
            <div>
              <p className="text-xl font-bold text-slate-800 mb-4">
                Doa dan Harapan
              </p>

              <textarea
                rows={5}
                placeholder="Tuliskan doa atau harapan Anda..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none resize-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white border border-slate-100 rounded-3xl shadow-lg p-6 h-fit sticky top-24">
            <p className="text-2xl font-bold text-slate-800 mb-6">
              Ringkasan Kurban
            </p>

            <div className="space-y-4">
              <div className="flex justify-between text-lg md:text-sm">
                <p className="text-slate-500">Jenis Hewan</p>
                <p className="font-semibold">{datas.title}</p>
              </div>

              <div className="flex justify-between">
                <p className="text-slate-500">Harga / Ekor</p>
                <p className="font-semibold">
                  Rp {datas.price.toLocaleString("id-ID")}
                </p>
              </div>

              <div className="flex justify-between">
                <p className="text-slate-500">Jumlah</p>
                <p className="font-semibold">{count} Ekor</p>
              </div>

              <div className="flex justify-between">
                <p className="text-slate-500">Berat</p>
                <p className="font-semibold">
                  {datas.weight_min}-{datas.weight_max} Kg
                </p>
              </div>

              <div className="flex justify-between">
                <p className="text-slate-500">Biaya Layanan</p>
                <p className="font-semibold">
                  Rp {serviceFee.toLocaleString("id-ID")}
                </p>
              </div>

              <div className="border-t pt-4 flex justify-between">
                <p className="font-bold text-lg md:text-sm">Total Pembayaran</p>

                <p className="font-bold text-2xl md:text-sm text-blue-600">
                  Rp {fixAmount.toLocaleString("id-ID")}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-green-50 border border-green-100 p-4">
              <p className="text-green-700 text-sm">
                Tersedia {datas.stock} hewan kurban siap disalurkan
              </p>
            </div>

            <button
              disabled={!isFormValid}
              onClick={() =>
                paymentHandler.getTokenPay(
                  {
                    id: datas.p_id,
                    amount: fixAmount,
                    name,
                    email,
                    phone,
                    // count,
                    // atasNama,
                    // message,
                  },
                  resetForm,
                )
              }
              className={`w-full mt-6 py-4 rounded-2xl font-semibold text-white transition
          ${
            isFormValid
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-blue-300 cursor-not-allowed"
          }`}
            >
              Lanjutkan Pembayaran
            </button>

            <p className="text-xs text-slate-400 text-center mt-4">
              Data pembayaran akan diproses melalui Midtrans.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentKurban;
