import React from "react";
import { chartData } from "../../models/content";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const data = chartData.map((i) => i);
  console.log("chart data", data);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-linear-to-r from-slate-900 to-slate-700 py-4 px-5 md:px-10 flex flex-nowrap gap-6 overflow-x-auto whitespace-nowrap text-white font-medium scrollbar-hide justify-start">
        <p className="text-2xl font-bold">Dashboard Yayasan</p>
      </div>
      <div className="m-5">
        {/* Statistik */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500">Total Donasi</p>
            <h2 className="text-2xl font-bold text-green-600">
              Rp 125.000.000
            </h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500">Total Donatur</p>
            <h2 className="text-2xl font-bold">850</h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500">Transaksi Berhasil</p>
            <h2 className="text-2xl font-bold text-blue-600">1.245</h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500">Pending Midtrans</p>
            <h2 className="text-2xl font-bold text-orange-500">18</h2>
          </div>
        </div>

        {/* Grafik */}
        <div className="bg-white p-5 rounded-xl shadow mb-6">
          <h2 className="font-semibold text-lg mb-4">Grafik Donasi Bulanan</h2>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip
                  formatter={(value, name) => {
                    if (name === "Donasi") {
                      return [`Rp ${value.toLocaleString("id-ID")}`, "Donasi"];
                    }

                    return [value, "Donatur"];
                  }}
                />

                <Legend />

                <Line
                  type="monotone"
                  dataKey="donasi"
                  stroke="#2563eb"
                  strokeWidth={3}
                  name="Donasi"
                />

                <Line
                  type="monotone"
                  dataKey="donatur"
                  stroke="#16a34a"
                  strokeWidth={3}
                  name="Donatur"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Donasi terbaru dan Program */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="font-semibold text-lg mb-4">Donasi Terbaru</h2>

            <div className="space-y-3">
              <div className="flex justify-between border-b pb-2">
                <span>Ahmad</span>
                <span>Rp 100.000</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span>Siti</span>
                <span>Rp 250.000</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span>Hamba Allah</span>
                <span>Rp 50.000</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="font-semibold text-lg mb-4">Program Terpopuler</h2>

            <div className="space-y-4">
              <div>
                <p>Pembangunan Masjid</p>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              <div>
                <p>Santunan Yatim</p>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-500 h-3 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>

              <div>
                <p>Wakaf Al-Qur'an</p>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-orange-500 h-3 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabel transaksi */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="font-semibold text-lg mb-4">Transaksi Terbaru</h2>

          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">ID</th>
                <th className="text-left py-3">Donatur</th>
                <th className="text-left py-3">Program</th>
                <th className="text-left py-3">Nominal</th>
                <th className="text-left py-3">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td>#TRX001</td>
                <td>Ahmad</td>
                <td>Donasi Masjid</td>
                <td>Rp 100.000</td>
                <td>
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded">
                    Success
                  </span>
                </td>
              </tr>

              <tr className="border-b">
                <td>#TRX002</td>
                <td>Siti</td>
                <td>Wakaf</td>
                <td>Rp 250.000</td>
                <td>
                  <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded">
                    Pending
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
