import React from "react";
import thumb from "../assets/main-hero.png";

const SedekahPage = () => {
  return (
    <>
      <div className="mt-20">
        <div className="relative w-full h-56 md:h-80 overflow-hidden rounded-b-3xl">
          {/* overlay */}
          <div className="absolute inset-0 bg-black/40 z-10" />

          {/* image */}
          <img
            src={thumb}
            alt="image"
            className="w-full h-full object-cover grayscale-40 scale-105"
          />

          {/* text */}
          <div className="absolute inset-0 z-20 flex items-end">
            <p className="px-6 md:px-10 pb-6 md:pb-10 text-white font-bold text-2xl md:text-5xl leading-tight max-w-2xl">
              Mari Bersedekah
              <br />
              Melalui Kami
            </p>
          </div>
        </div>

        <div className="mt-5 px-10 flex flex-col md:flex-row-reverse gap-5 ">
          <div className="w-100">
            <button className="bg-blue-600 hover:bg-blue-400 rounded-md px-4 py-2 font-medium text-white">
              Sedekah Sekarang
            </button>
          </div>
          <div className="space-y-5 text-justify text-slate-700 leading-relaxed md:text-lg">
            <p>
              Tidak semua orang memiliki kesempatan untuk menikmati hidup dengan
              tenang. Di saat sebagian dari kita dapat makan dengan layak, tidur
              dengan nyaman, dan menjalani hari tanpa rasa takut, ada banyak
              saudara di luar sana yang harus berjuang hanya untuk bertahan
              hingga esok hari.
            </p>

            <p>
              Ada anak-anak yang menahan lapar demi melihat ibunya tetap
              tersenyum. Ada orang tua yang menyembunyikan lelahnya agar
              keluarganya tetap merasa kuat. Dan ada banyak harapan kecil yang
              perlahan memudar karena keadaan yang tidak berpihak.
            </p>

            <p>
              Mereka bukan sekadar cerita yang lewat di layar ponsel kita.
              Mereka adalah manusia yang memiliki mimpi, harapan, dan keinginan
              sederhana untuk hidup lebih baik.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-slate-800 pt-3">
              Mengapa Bantuan Anda Sangat Berarti?
            </h3>

            <p>
              Sedekah bukan hanya tentang memberi materi, tetapi tentang
              menghadirkan harapan bagi mereka yang hampir kehilangan alasan
              untuk percaya bahwa dunia masih peduli. Setiap bantuan yang Anda
              berikan adalah bukti bahwa masih ada hati yang mau menguatkan dan
              menemani perjuangan mereka.
            </p>

            <p>
              Mungkin bagi kita itu hanya sebagian kecil rezeki. Namun bagi
              mereka, bantuan itu bisa menjadi makanan untuk keluarga, biaya
              sekolah anak, atau bahkan alasan untuk tetap bertahan menghadapi
              hidup.
            </p>

            <p className="italic font-medium text-slate-800">
              “Kebaikan sekecil apa pun tidak akan pernah sia-sia, karena selalu
              ada hati yang tersentuh dan kehidupan yang berubah karenanya.”
            </p>

            <p className="font-bold text-lg">Mari berbagi kebaikan hari ini.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SedekahPage;
