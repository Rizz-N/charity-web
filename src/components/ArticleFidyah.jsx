import React from "react";

const ArticleFidyah = () => {
  return (
    <div>
      <article className="mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 font-sans text-gray-800">
        {/* Header */}
        <header className="mb-10 border-b border-gray-200 pb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Apa itu Zakat Fidyah?
          </h1>

          <div className="mt-6 space-y-6 text-lg text-gray-700 leading-8">
            <p>
              Fidyah diambil dari kata “fadaa” artinya mengganti atau menebus.
              Bagi beberapa orang yang tidak mampu menjalankan ibadah puasa
              dengan kriteria tertentu, diperbolehkan tidak berpuasa serta tidak
              harus menggantinya di lain waktu. Namun, sebagai gantinya
              diwajibkan untuk membayar fidyah.
            </p>

            <p>
              Ada ketentuan tentang siapa saja yang boleh tidak berpuasa. Hal
              ini tertuang dalam surat Al-Baqarah ayat 184.
            </p>

            <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-600">
              (yaitu) dalam beberapa hari yang tertentu. Maka barangsiapa
              diantara kamu ada yang sakit atau dalam perjalanan (lalu ia
              berbuka), maka (wajiblah baginya berpuasa) sebanyak hari yang
              ditinggalkan itu pada hari-hari yang lain. Dan wajib bagi
              orang-orang yang berat menjalankannya (jika mereka tidak berpuasa)
              membayar fidyah, (yaitu): memberi makan seorang miskin.
              Barangsiapa yang dengan kerelaan hati mengerjakan kebajikan, maka
              itulah yang lebih baik baginya. Dan berpuasa lebih baik bagimu
              jika kamu mengetahui
              <footer className="mt-2 font-medium not-italic">
                (Q.S. Al Baqarah: 184)
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
          <p>Adapun kriteria orang yang bisa membayar fidyah diantaranya:</p>
          <ul>
            <li type="1">Orang tua yang tidak memungkinkan berpuasa</li>
            <li type="1">Orang sakit parah yang kecil kemungkinannya sembuh</li>
            <li type="1">
              Ibu hamil atau menyusui yang tidak berpuasa khawatir dengan
              kondisi diri atau bayinya(atas rekomendasi dokter)
            </li>
          </ul>
          <p>
            Fidyah wajib dilakukan untuk mengganti ibadah puasa dengan membayar
            sesuai jumlah hari puasa yang ditinggalkan untuk satu orang.
            Nantinya, makanan itu disumbangkan kepada fakir miskin dan akan
            diserahkan dalam bentuk makanan siap saji, sehingga mereka bisa
            langsung menyantap makanan tersebut.
          </p>
          <p>
            Berdasarkan SK Ketua BAZNAS No. 14 Tahun 2026 tentang Nilai Zakat
            Fitrah dan Fidyah BAZNAS Tahun 1447 H/2026 M, ditetapkan bahwa nilai
            fidyah dalam bentuk uang adalah sebesar Rp65.000,- per jiwa atau per
            hari puasa yang ditinggalkan.
          </p>
          <p>
            Pembayaran fidyah dapat dilakukan setelah diketahui jumlah hari
            puasa yang ditinggalkan, baik dibayarkan secara bertahap maupun
            sekaligus. Melalui YBMI, fidyah akan disalurkan kepada mustahik yang
            berhak agar manfaatnya tepat sasaran.
          </p>
        </div>
      </article>
    </div>
  );
};

export default ArticleFidyah;
