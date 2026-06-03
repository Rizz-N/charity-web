import React from "react";
const niatZakat =
  "https://baznas.go.id/assets/images/zakat/banner-niat-zakat-mal.jpg";
const NiatZakat = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Niat Zakat</h2>
      {/* Gambar dengan responsive dan alt text yang baik untuk SEO */}
      <div className="my-6 flex justify-center">
        <img
          src={niatZakat}
          alt="Teks bacaan niat zakat mal dalam bahasa Arab dan latin beserta artinya"
          className="w-full max-w-md h-auto rounded-lg shadow-md border border-gray-200"
          loading="lazy"
        />
      </div>
      <p className="text-sm text-gray-500 text-center -mt-4">
        Bacaan Niat Zakat Penghasilan: "Nawaitu an ukhrija zakata maali fardhan
        lillahi ta'ala"
      </p>
    </div>
  );
};

export default NiatZakat;
