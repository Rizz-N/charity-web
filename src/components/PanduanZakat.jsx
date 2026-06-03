import React from "react";

const PanduanZakat = () => {
  return (
    <div>
      <h2 className="font-bold">Cara Membayar Zakat Di YBMI</h2>
      <p>
        Menunaikan zakat melalui YBMI tidak hanya memenuhi kewajiban agama,
        tetapi juga berkontribusi langsung pada program pemberdayaan masyarakat
        seperti pendidikan, kesehatan, dan kemaslahatan umat.
        <br />
        <br />
        Dengan kemajuan teknologi, proses pembayaran zakat kini semakin praktis,
        baik secara online maupun offline. Berikut ini adalah panduan cara
        membayar zakat di YBMI:
      </p>

      <ol className="list-decimal pl-6 space-y-4 my-4">
        <li className="font-bold text-gray-900">Menghitung Nisab Zakat</li>
        <p className="font-normal">
          Untuk memastikan perhitungan zakat yang akurat dan sesuai ketentuan
          syariah, YBMI menyediakan <strong>fitur Kalkulator Zakat</strong> yang
          dirancang untuk mempermudah umat Islam dalam menentukan jumlah zakat
          yang wajib ditunaikan.
          <br />
          Fitur ini dapat diakses dengan mudah melalui situs resmi YBMI,
          sehingga memberikan kemudahan dan kepastian dalam menjalankan
          kewajiban zakat.
        </p>

        <li className="font-bold text-gray-900">
          Bayar Zakat Online Melalui Website YBMI
        </li>
        <p className="font-normal">
          Setelah menghitung jumlah zakat Anda dengan Kalkulator Zakat, segera
          kunjungi{" "}
          <a href="/zakat" className="text-blue-600 hover:underline">
            halaman /zakat
          </a>{" "}
          untuk memilih jenis zakat yang ingin ditunaikan. Prosesnya cepat,
          otomatis tanpa memerlukan konfirmasi tambahan, dan sesuai dengan
          ketentuan syariah.
        </p>

        <li className="font-bold text-gray-900">
          Transfer langsung ke rekening Zakat YBMI
        </li>
        <p className="font-normal">
          Selain melalui situs YBMI, Anda dapat menunaikan zakat dengan
          melakukan transfer langsung ke{" "}
          <a href="/rekening" className="text-blue-600 hover:underline">
            rekening resmi YBMI
          </a>
          . Setelah itu, lakukan konfirmasi pembayaran zakat melalui{" "}
          <a href="" className="text-blue-600 hover:underline">
            WhatsApp resmi YBMI
          </a>
          .
        </p>
      </ol>
    </div>
  );
};

export default PanduanZakat;
