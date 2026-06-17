import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
const niatZakat =
  "https://baznas.go.id/assets/images/zakat/banner-niat-zakat-mal.jpg";
const NiatZakat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openId, setOpenId] = useState(null);

  const handleToggle = (index) => {
    setOpenId(openId === index ? null : index);
  };

  const niat = [
    {
      title: "Niat Zakat Fitrah untuk Diri Sendiri ",
      niat: "نَوَيْتُ أَنْ أُخْرِجَ زَكَاةَ الْفِطْرِ عَنْ نَفْسِي فَرْضًا لِلّٰهِ تَعَالَى",
      romawi:
        "Nawaitu an ukhrija zakatal fitri ‘an nafsi fardhan lillāhi ta’ālā.",
      arti: "Aku niat mengeluarkan zakat fitrah untuk diriku sendiri, fardhu karena Allah Ta’ala.",
    },
    {
      title: "Niat Zakat Fitrah untuk Istri",
      niat: "نَوَيْتُ أَنْ أُخْرِجَ زَكَاةَ الْفِطْرِ عَنْ زَوْجَتِي فَرْضًا لِلّٰهِ تَعَالَى",
      romawi:
        "Nawaitu an ukhrija zakatal fitri ‘an zaujati fardhan lillāhi ta’ālā.",
      arti: "Aku niat mengeluarkan zakat fitrah untuk istriku, fardhu karena Allah Ta’ala.",
    },
    {
      title: "Niat Zakat Fitrah untuk Anak Laki-Laki",
      niat: "نَوَيْتُ أَنْ أُخْرِجَ زَكَاةَ الْفِطْرِ عَنْ وَلَدِي ... فَرْضًا لِلّٰهِ تَعَالَى",
      romawi:
        "Nawaitu an ukhrija zakatal fitri ‘an waladi... (sebutkan nama anaknya) fardhan lillāhi ta’ālā.",
      arti: "Aku niat mengeluarkan zakat fitrah untuk anak laki-lakiku…. (sebutkan nama anaknya), fardu karena Allah Ta’ala.",
    },
    {
      title: "Niat Zakat Fitrah untuk Anak Perempuan",
      niat: "نَوَيْتُ أَنْ أُخْرِجَ زَكَاةَ الْفِطْرِ عَنْ بِنْتِي ... فَرْضًا لِلّٰهِ تَعَالَى",
      romawi:
        "Nawaitu an ukhrija zakatal fitri ‘an binti ... (sebutkan nama anaknya) fardhan lillāhi ta’ālā.",
      arti: "Aku niat mengeluarkan zakat fitrah untuk anak perempuanku…. (sebutkan nama anaknya), fardu karena Allah Ta’ala.",
    },
    {
      title: "Niat Zakat Fitrah untuk Diri Sendiri dan Keluarga",
      niat: "نَوَيْتُ أَنْ أُخْرِجَ زَكَاةَ الْفِطْرِ عَنِّي وَعَنْ جَمِيْعِ مَا يَلْزَمُنِيْ نَفَقَتُهُمْ شَرْعًا فَرْضًا لِلّٰهِ تَعَالَى",
      romawi:
        "Nawaitu an ukhrija zakatal fitri ‘anni wa ‘an jami’i ma yalzamuni nafaqatuhum syar’an fardhan lillāhi ta’ālā.",
      arti: "Aku niat mengeluarkan zakat fitrah untuk diriku dan seluruh orang yang nafkahnya menjadi tanggunganku, fardu karena Allah Ta’ala.",
    },
    {
      title: "Niat Zakat Fitrah untuk Orang yang Diwakilkan",
      niat: "نَوَيْتُ أَنْ أُخْرِجَ زَكَاةَ الْفِطْرِ عَنْ (...) فَرْضًا لِلّٰهِ تَعَالَى",
      romawi:
        "Nawaitu an ukhrija zakatal fitri ‘an ... (sebutkan nama orangnya) fardhan lillāhi ta’ālā.",
      arti: "Aku niat mengeluarkan zakat fitrah untuk… (sebutkan nama orangnya), fardu karena Allah Ta’ala.",
    },
  ];
  return (
    <>
      <div>
        <h2 className="text-2xl font-medium">Niat Zakat</h2>
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
          Bacaan Niat Zakat Penghasilan: "Nawaitu an ukhrija zakata maali
          fardhan lillahi ta'ala"
        </p>
      </div>
      {/* Niat zakat */}
      <div>
        <div className="flex flex-col gap-2">
          {niat.map((n, i) => (
            <div key={i} className="border-b">
              <button
                onClick={() => handleToggle(i)}
                className="w-full flex justify-between p-4"
              >
                <span className="font-medium">{n.title}</span>

                <FaChevronDown
                  className={`transition ${openId === i ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === i ? "max-h-125 p-4" : "max-h-0"
                }`}
              >
                <p className="text-right text-2xl">{n.niat}</p>
                <p>{n.romawi}</p>
                <p className="mt-4">
                  Artinya: <q>{n.arti}</q>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NiatZakat;
