import React from "react";
import PanduanZakat from "./panduanZakat";
import NiatZakat from "./NiatZakat";

const ArticleMal = () => {
  return (
    <>
      <article className=" mx-auto px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
        <header className="mb-8 border-b border-gray-200 pb-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Apa itu Zakat Mal?
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Mal berasal dari kata bahasa Arab yang artinya harta atau kekayaan
            (al-amwal, jamak dari kata mal) adalah “segala hal yang diinginkan
            manusia untuk disimpan dan dimiliki” (Lisan ul-Arab). Menurut Islam
            sendiri, harta merupakan sesuatu yang boleh atau dapat dimiliki dan
            digunakan (dimanfaatkan) sesuai kebutuhannya.
          </p>
        </header>
        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
          <p>
            Oleh karena itu dalam pengertiannya, zakat mal berarti zakat yang
            dikenakan atas segala jenis harta, yang secara zat maupun substansi
            perolehannya tidak bertentangan dengan ketentuan agama
          </p>

          <q>
            Ambillah zakat dari harta mereka (guna) menyucikan dan membersihkan
            mereka, dan doakanlah mereka karena sesungguhnya doamu adalah
            ketenteraman bagi mereka. Allah Maha Mendengar lagi Maha Mengetahui.
          </q>

          <p>
            Sebagai contoh, zakat mal terdiri atas simpanan kekayaan seperti
            uang, emas, surat berharga, penghasilan profesi, aset perdagangan,
            hasil barang tambang atau hasil laut, hasil sewa aset dan lain
            sebagainya.
          </p>

          <h2 className="font-bold text-2xl">Jenis-jenis Zakat Mal</h2>
          <p>
            Sebagaimana yang dijelaskan oleh Syaikh Dr. Yusuf Al-Qardhawi dalam
            kitabnya Fiqhuz-Zakah, zakat mal meliputi:
          </p>

          <ul>
            <li type="1">
              Zakat simpanan emas, perak, dan barang berharga lainnya
            </li>
            <li type="1">Zakat atas aset perdagangan</li>
            <li type="1">Zakat atas hewan ternak</li>
            <li type="1">Zakat atas hasil pertanian</li>
            <li type="1">Zakat atas hasil olahan tanaman dan hewan</li>
            <li type="1">Zakat atas hasil tambang dan tanaman laut</li>
            <li type="1">Zakat atas hasilk penyewaan aset</li>
            <li type="1">
              Zakat atas hasil jasa profesi, pendapatan, atau penhasilan
            </li>
            <li type="1">Zakat atas hasil saham atau obligasi</li>
          </ul>
          <p className="my-2">
            Begitupun dengan yang dijelaskan di dalam UU No. 23 Tahun 2011,
            zakat mal meliputi:
          </p>
          <ul>
            <li type="1">Emas, perak, dan logam mulia lainnya</li>
            <li type="1">Uang dan Surat Berharga lainnya</li>
            <li type="1">Perniagaan</li>
            <li type="1">Pertanian, perkebunan dan kehutanan</li>
            <li type="1">Peternakan dan perikanan</li>
            <li type="1">Pertambangan</li>
            <li type="1">Perindustrian</li>
            <li type="1">Pendapatan dan jasa</li>
            <li type="1">Rikaz</li>
          </ul>
          <h2 className="font-bold text-2xl">
            Syarat-syarat Harta dalam Zakat Mal
          </h2>
          <p>
            Syarat-syarat ini memastikan bahwa zakat hanya dikenakan pada harta
            yang sesuai dengan ketentuan syariat. Adapun syarat harta yang
            terkena kewajiban zakat mal sebagai berikut:
          </p>
          <ul>
            <li type="1">Kepemilikan penuh</li>
            <li type="1">Harta halal dan diperoleh secara halal</li>
            <li type="1">
              Harta yang dapat berkembang atau di produktifkan(dimanfaatkan)
            </li>
            <li type="1">Mencukupi nisab</li>
            <li type="1">Bebas dari hutang</li>
            <li type="1">Mencapai haul</li>
            <li type="1">Dapat ditunaikan saat panen</li>
          </ul>
        </div>
        <NiatZakat />
      </article>
      <PanduanZakat />
    </>
  );
};

export default ArticleMal;
