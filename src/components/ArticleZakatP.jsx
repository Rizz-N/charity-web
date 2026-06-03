import React from "react";
import PanduanZakat from "./panduanZakat";
import NiatZakat from "./NiatZakat";
const niatZakat =
  "https://baznas.go.id/assets/images/zakat/banner-niat-zakat-mal.jpg";
const ArticleZakatP = () => {
  return (
    <>
      <article className=" mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 font-sans text-gray-800">
        <header className="mb-8 border-b border-gray-200 pb-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Apa itu Zakat Penghasilan?
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Zakat Penghasilan atau yang dikenal juga sebagai Zakat Pendapatan
            adalah bagian dari zakat mal yang wajib dikeluarkan atas harta yang
            berasal dari pendapatan atau penghasilan rutin dari pekerjaan yang
            tidak melanggar syariah.{" "}
            <strong className="text-gray-800">
              Nisab zakat penghasilan sebesar 85 gram emas per tahun
            </strong>{" "}
            dengan kadar zakat penghasilan senilai{" "}
            <strong className="text-gray-800">2,5%</strong>.
          </p>
        </header>
        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
          <p>
            Fatwa Majelis Ulama Indonesia (MUI) menjelaskan, penghasilan yang
            dimaksud ialah setiap pendapatan seperti gaji, honorarium, upah,
            jasa, dan lain-lainnya yang diperoleh dengan cara halal, baik rutin
            seperti pejabat negara, pegawai, karyawan, maupun tidak rutin
            seperti dokter, pengacara, dan konsultan, serta penghasilan dari
            pekerjaan bebas lainnya.
          </p>

          <h2>Nisab dan Kadar Zakat Penghasilan</h2>
          <p>
            Zakat penghasilan dikeluarkan dari harta yang dimiliki pada saat
            penghasilan diterima oleh seseorang yang sudah wajib zakat.
          </p>

          <p>
            Seseorang dikatakan sudah wajib menunaikan zakat penghasilan apabila
            ia pendapatannya telah mencapai nisab zakat penghasilan sebesar{" "}
            <strong>85 gram emas per tahun</strong>. Hal ini juga dikuatkan
            dalam SK Ketua BAZNAS Nomor 15 Tahun 2026 Tentang Nilai Nisab Zakat
            Pendapatan dan Jasa Tahun 2026, bahwa;
          </p>

          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 sm:p-6 rounded-r my-6">
            <p className="mb-0 font-medium">
              Nilai nisab zakat penghasilan dan jasa tahun 2026 senilai 85 gram
              emas atau setara dengan
              <strong className="text-emerald-800">
                {" "}
                Rp91.681.728,-/tahun
              </strong>{" "}
              (sembilan puluh satu juta enam ratus delapan puluh satu ribu tujuh
              ratus dua puluh delapan rupiah per tahun), atau{" "}
              <strong className="text-emerald-800">
                Rp7.640.144,-/bulan
              </strong>{" "}
              (tujuh juta enam ratus empat puluh ribu seratus empat puluh empat
              rupiah per bulan) jika ditunaikan setiap bulan.
            </p>
          </div>

          <p>
            Penetapan nisab ini mengacu pada harga emas 14 karat dengan nilai
            setara 85 gram emas, sehingga menghasilkan angka Rp91.681.728 per
            tahun atau Rp7.640.144 per bulan. Harga diperoleh dari harga
            rata-rata emas selama tahun 2025. Angka tersebut menjadi standar
            batas minimal penghasilan bagi seorang muslim untuk dikenai
            kewajiban zakat sebesar 2,5 persen.
          </p>

          <p>
            Penetapan emas 14 karat masih selaras dengan regulasi yang berlaku
            saat ini. Dalam PMA Nomor 31 Tahun 2019 tidak diatur secara spesifik
            mengenai jenis karat emas, sehingga pada tataran implementasi BAZNAS
            diberikan kewenangan untuk menetapkan standar jenis karat atas 85
            gram emas dengan tetap mempertimbangkan aspek kemaslahatan mustahik.
          </p>

          <p>
            Dalam praktiknya, zakat penghasilan dapat ditunaikan setiap bulan
            dengan nilai nisab perbulannya setara dengan nilai seperduabelas
            dari 85 gram emas (seperti nilai yang tertera di atas) dengan kadar
            2,5%. Jadi apabila penghasilan setiap bulan telah melebihi nilai
            nisab bulanan, maka wajib dikeluarkan zakatnya sebesar 2,5% dari
            penghasilannya tersebut.
          </p>

          <p>
            Ada banyak jenis profesi dengan pembayaran rutin maupun tidak,
            dengan penghasilan sama dan tidak dalam setiap bulannya. Jika
            penghasilan dalam 1 bulan tidak mencapai nisab, maka hasil
            penghasilan selama 1 tahun dikumpulkan atau dihitung, kemudian zakat
            ditunaikan jika penghasilan bersihnya sudah cukup nisab.
          </p>

          {/* Tabel responsive dengan overflow-auto */}
          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                    Komponen
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                    Nilai
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm">Nisab Zakat Penghasilan</td>
                  <td className="px-4 py-3 text-sm font-medium">
                    85 gram emas/tahun
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm">Kadar Zakat Penghasilan</td>
                  <td className="px-4 py-3 text-sm font-medium">2,5%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm">
                    Haul (waktu wajib zakat)
                  </td>
                  <td className="px-4 py-3 text-sm font-medium">
                    1 tahun (atau per bulan jika sudah mencapai nisab bulanan)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Cara Menghitung Zakat Penghasilan</h2>
          <div className="bg-blue-50 p-4 sm:p-6 rounded-lg my-6">
            <p className="font-bold text-blue-900 mb-2">
              Rumus Zakat Penghasilan:
            </p>
            <p className="text-xl sm:text-2xl font-mono text-blue-800">
              2,5% × Jumlah penghasilan dalam 1 bulan (jika sudah mencapai
              nisab)
            </p>
          </div>

          <p>
            <strong>Contoh:</strong> Jika nilai nisab zakat penghasilan tahun
            2026 ditetapkan sebesar Rp91.681.728 per tahun atau Rp7.640.144 per
            bulan, maka seseorang yang memiliki penghasilan melebihi angka
            tersebut sudah wajib menunaikan zakat penghasilan sebesar 2,5%.
          </p>

          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg my-6">
            <p className="font-semibold">
              Misalnya, penghasilan Bapak Fulan sebesar Rp10.000.000 per bulan,
              atau Rp120.000.000 dalam satu tahun.
            </p>
            <p className="mt-2">
              Karena penghasilan tersebut telah melampaui nisab bulanan
              (Rp7.640.144), maka Bapak Fulan sudah wajib zakat.
            </p>
            <div className="mt-4 p-3 bg-white rounded border border-gray-200">
              <p className="font-bold text-green-700">Perhitungan zakatnya:</p>
              <p className="text-lg font-mono">
                2,5% × Rp10.000.000 ={" "}
                <span className="font-bold text-green-800">Rp250.000</span> (per
                bulan)
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Dengan demikian, zakat penghasilan yang perlu ditunaikan Bapak
                Fulan adalah Rp250.000 setiap bulan.
              </p>
            </div>
            <div className="mt-4 p-3 bg-white rounded border border-gray-200">
              <p className="font-bold text-green-700">
                Apabila dihitung secara tahunan:
              </p>
              <p className="text-lg font-mono">
                2,5% × Rp120.000.000 ={" "}
                <span className="font-bold text-green-800">
                  Rp3.000.000 per tahun
                </span>
              </p>
            </div>
          </div>
          <NiatZakat />
        </div>
      </article>
      <PanduanZakat />
    </>
  );
};

export default ArticleZakatP;
