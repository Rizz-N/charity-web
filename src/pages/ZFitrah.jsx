// src/pages/ZakatFitrah.jsx
import { useState } from "react";
import { LuUsers, LuWheat } from "react-icons/lu";
import { FaRupiahSign } from "react-icons/fa6";

const ZFitrah = () => {
  const [familyCount, setFamilyCount] = useState("");
  const [ricePrice, setRicePrice] = useState("15000");
  const [result, setResult] = useState(null);

  const RICE_PER_PERSON_KG = 2.5; // 2.5 kg atau 3.5 liter
  const RICE_PER_PERSON_LITER = 3.5;

  const calculateFitrah = () => {
    const count = parseInt(familyCount) || 0;
    const pricePerKg = parseFloat(ricePrice) || 0;

    if (count <= 0) {
      alert("Masukkan jumlah jiwa yang wajib membayar zakat fitrah");
      return;
    }

    const totalRiceKg = count * RICE_PER_PERSON_KG;
    const totalRiceLiter = count * RICE_PER_PERSON_LITER;
    const totalMoney = totalRiceKg * pricePerKg;

    setResult({
      count: count,
      riceKg: totalRiceKg,
      riceLiter: totalRiceLiter,
      money: totalMoney,
      ricePrice: pricePerKg,
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-emerald-700 flex items-center gap-2 mb-6">
        <LuWheat className="w-8 h-8" />
        Zakat Fitrah
      </h1>

      <div className="card">
        <div className="bg-green-50 p-4 rounded-xl mb-6">
          <p className="font-semibold">📖 Ketentuan Zakat Fitrah:</p>
          <ul className="list-disc list-inside text-sm space-y-1 mt-1">
            <li>Wajib bagi setiap muslim (mampu) sebelum Idul Fitri</li>
            <li>Besar zakat: 3.5 liter atau 2.5 kg makanan pokok (beras)</li>
            <li>Bisa dibayar dengan uang senilai beras tersebut</li>
          </ul>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block font-semibold mb-2 flex items-center gap-2">
              <LuUsers className="w-4 h-4" /> Jumlah Jiwa (termasuk diri sendiri
              & keluarga)
            </label>
            <input
              type="number"
              value={familyCount}
              onChange={(e) => setFamilyCount(e.target.value)}
              className="input-field"
              placeholder="Contoh: 4"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 flex items-center gap-2">
              <FaRupiahSign className="w-4 h-4" /> Harga Beras per Kg (Rp)
            </label>
            <input
              type="number"
              value={ricePrice}
              onChange={(e) => setRicePrice(e.target.value)}
              className="input-field"
              placeholder="Harga beras setempat"
            />
          </div>

          <button onClick={calculateFitrah} className="btn-primary w-full">
            Hitung Zakat Fitrah
          </button>
        </div>

        {result && (
          <div className="mt-6 p-5 bg-emerald-50 rounded-xl">
            <h3 className="font-bold text-lg mb-3">
              Zakat Fitrah untuk {result.count} Jiwa:
            </h3>
            <div className="space-y-2">
              <p className="flex justify-between">
                <span>🌾 Beras (2.5 kg/jiwa):</span>
                <span className="font-semibold">{result.riceKg} kg</span>
              </p>
              <p className="flex justify-between">
                <span>🍚 Beras (3.5 liter/jiwa):</span>
                <span className="font-semibold">
                  {result.riceLiter.toFixed(1)} liter
                </span>
              </p>
              <p className="flex justify-between pt-2 border-t">
                <span>
                  💰 Uang pengganti (Rp{result.ricePrice.toLocaleString()}/kg):
                </span>
                <span className="font-bold text-emerald-700 text-xl">
                  Rp{Math.round(result.money).toLocaleString()}
                </span>
              </p>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">
              *Tunaikan sebelum shalat Idul Fitri
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ZFitrah;
