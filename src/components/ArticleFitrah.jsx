import React from "react";

const ArticleFitrah = () => {
  return (
    <div>
      <article className="mx-auto px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
        {/* Header */}
        <header className="mb-10 border-b border-gray-200 pb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Apa itu Zakat Fitrah?
          </h1>

          <div className="mt-6 space-y-6 text-lg text-gray-700 leading-8">
            <p>
              Zakat fitrah (zakat al-fitr) adalah zakat yang diwajibkan atas
              setiap jiwa Muslim, baik laki-laki maupun perempuan, yang
              ditunaikan pada bulan Ramadan dan disempurnakan sebelum Hari Raya
              Idul Fitri.
            </p>

            <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-600">
              Rasulullah SAW mewajibkan zakat fitrah satu sha’ kurma atau satu
              sha’ gandum atas umat Muslim; baik hamba sahaya maupun merdeka,
              laki-laki maupun perempuan, kecil maupun besar. Beliau SAW
              memerintahkannya dilaksanakan sebelum orang-orang keluar untuk
              shalat.
              <footer className="mt-2 font-medium not-italic">
                (HR Bukhari Muslim)
              </footer>
            </blockquote>
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
          <p>
            Selain sebagai bentuk penyucian diri setelah menjalankan ibadah
            puasa di bulan Ramadhan, zakat fitrah juga merupakan wujud
            kepedulian sosial kepada masyarakat yang kurang mampu.
          </p>

          <p>
            Melalui zakat fitrah, kebahagiaan dan kemenangan di Hari Raya Idul
            Fitri diharapkan dapat dirasakan secara lebih merata, termasuk oleh
            masyarakat miskin yang membutuhkan.
          </p>

          <p>
            Zakat fitrah wajib ditunaikan bagi setiap jiwa, dengan syarat
            beragama Islam, hidup pada saat bulan Ramadhan, dan memiliki
            kelebihan rezeki atau kebutuhan pokok untuk malam dan Hari Raya Idul
            Fitri.
          </p>

          <p>
            Besarannya adalah beras atau makanan pokok seberat 2,5 kg atau 3,5
            liter per jiwa.
          </p>

          <p>
            Berdasarkan SK Ketua BAZNAS No. 14 Tahun 2026 tentang Nilai Zakat
            Fitrah dan Fidyah BAZNAS Tahun 1447 H/2026 M, ditetapkan bahwa
            besaran zakat fitrah adalah 2,5 kg atau 3,5 liter beras atau makanan
            pokok per jiwa, atau setara dengan uang senilai Rp50.000,00 per
            jiwa.
          </p>

          <p>
            Zakat fitrah dapat ditunaikan sejak awal bulan Ramadhan dan paling
            lambat sebelum pelaksanaan Shalat Idul Fitri.
          </p>

          <p>
            Adapun penyalurannya kepada mustahik (penerima zakat) dilakukan
            sebelum Shalat Idul Fitri, agar zakat fitrah dapat memberikan
            manfaat secara optimal bagi penerima.
          </p>

          <p>
            Zakat fitrah yang dihimpun oleh YBMI akan disalurkan kepada mustahik
            yang membutuhkan.
          </p>
        </div>
      </article>
    </div>
  );
};

export default ArticleFitrah;
