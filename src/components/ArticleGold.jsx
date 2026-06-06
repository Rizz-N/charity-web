import React from "react";

const ArticleGold = () => {
  return (
    <div>
      <article className="mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 font-sans text-gray-800">
        {/* Header */}
        <header className="mb-10 border-b border-gray-200 pb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Apa itu Zakat Emas?
          </h1>

          <div className="mt-6 space-y-6 text-lg text-gray-700 leading-8">
            <p>
              Zakat emas dan uang merupakan salah satu kewajiban penting dalam
              ajaran Islam yang berkaitan langsung dengan kepemilikan harta.
              Dalam kehidupan modern saat ini, umat Islam semakin banyak
              menyimpan kekayaan dalam bentuk emas perhiasan, emas batangan,
              maupun uang tunai dan simpanan di bank. Oleh karena itu, pemahaman
              yang benar mengenai zakat emas dan uang menjadi sangat penting
              agar seorang muslim dapat menunaikan kewajibannya secara tepat
              sesuai syariat.
            </p>
          </div>
        </header>

        {/* Content */}
        <div
          className="
          prose
          prose-lg
          max-w-none
          prose-p:text-gray-700
          prose-p:leading-8
          prose-headings:text-gray-900
          prose-headings:font-bold
          prose-strong:text-gray-900
          prose-ul:my-6
          prose-ol:my-6
          prose-img:rounded-xl
          prose-img:shadow-md
          prose-blockquote:border-green-600
        "
        >
          <h2>Ketentuan Zakat Emas & Perak</h2>
          <ul>
            <li type="1">Mencapai Haul (Telah berumur 1 tahun)</li>
            <li type="1">
              Mencapai Nishab (Nishab zakat emas yakni 20 mitsqol atau 20 dinar.
              Satu dinar setara dengan 4,25 gram emas. Sehingga nishab zakat
              emas adalah 85 gram. Sedangkan nishab zakat perak adalah 200
              dirham atau 5 uqiyah. Satu dirham setara dengan 2,975 gram perak.
              Sehingga nishab zakat perak adalah 595 gram)
            </li>
            <li type="1">
              Besar Zakat 2,5 % (Jumlah Emas & Perak tersebut memiliki harga
              yang melampaui untuk zakat 2,5%)
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default ArticleGold;
