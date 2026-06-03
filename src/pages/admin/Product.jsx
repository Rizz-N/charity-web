import React, { useState } from "react";
import { FaBoxOpen, FaImage, FaSave } from "react-icons/fa";

const Product = () => {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    category: "kambing",
    price: "",
    weight_min: "",
    weight_max: "",
    stock: "",
    description: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      setForm((prev) => ({
        ...prev,
        title: value,
        slug: generateSlug(value),
      }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("image", image);
    formData.append("title", form.title);
    formData.append("slug", form.slug);
    formData.append("category", form.category);
    formData.append("price", form.price);
    formData.append("weight_min", form.weight_min);
    formData.append("weight_max", form.weight_max);
    formData.append("stock", form.stock);
    formData.append("description", form.description);

    console.log("Payload");
    console.log(Object.fromEntries(formData));

    // nanti kirim ke backend
    // await api.post("/products", formData)
  };

  return (
    <div className="p-6 bg-slate-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-linear-to-r from-emerald-600 to-green-700 p-6">
          <div className="flex items-center gap-3 text-white">
            <FaBoxOpen size={28} />
            <div>
              <h1 className="text-2xl font-bold">Tambah Produk Kurban</h1>
              <p className="text-sm text-green-100">
                Kelola produk kurban yang akan ditampilkan ke website
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-6 p-6">
          {/* Upload */}
          <div className="lg:col-span-1">
            <div className="border-2 border-dashed border-slate-300 rounded-2xl p-5">
              <h2 className="font-semibold mb-4 flex items-center gap-2">
                <FaImage />
                Thumbnail Produk
              </h2>

              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                className="w-full"
              />

              <div className="mt-4">
                {preview ? (
                  <img
                    src={preview}
                    alt="preview"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                ) : (
                  <div className="h-64 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
                    Preview Gambar
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <label className="font-medium block mb-2">Nama Produk</label>

              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Contoh: Domba Premium"
                className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <div>
              <label className="font-medium block mb-2">Slug</label>

              <input
                type="text"
                name="slug"
                value={form.slug}
                readOnly
                className="w-full border border-slate-300 rounded-xl p-3 bg-slate-100"
              />
            </div>

            <div>
              <label className="font-medium block mb-2">Kategori</label>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-xl p-3"
              >
                <option value="kambing">Kambing</option>
                <option value="domba">Domba</option>

                <option value="sapi">Sapi</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="font-medium block mb-2">Harga</label>

                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="2500000"
                  className="w-full border border-slate-300 rounded-xl p-3"
                />
              </div>

              <div>
                <label className="font-medium block mb-2">Stok</label>

                <input
                  type="number"
                  name="stock"
                  value={form.stock}
                  onChange={handleChange}
                  placeholder="10"
                  className="w-full border border-slate-300 rounded-xl p-3"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="font-medium block mb-2">
                  Berat Minimum (Kg)
                </label>

                <input
                  type="number"
                  name="weight_min"
                  value={form.weight_min}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-xl p-3"
                />
              </div>

              <div>
                <label className="font-medium block mb-2">
                  Berat Maksimum (Kg)
                </label>

                <input
                  type="number"
                  name="weight_max"
                  value={form.weight_max}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-xl p-3"
                />
              </div>
            </div>

            <div>
              <label className="font-medium block mb-2">Deskripsi</label>

              <textarea
                rows="5"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Deskripsi produk..."
                className="w-full border border-slate-300 rounded-xl p-3 resize-none"
              />
            </div>

            <button
              type="submit"
              className="
                flex items-center gap-2
                bg-green-600
                hover:bg-green-700
                text-white
                px-6
                py-3
                rounded-xl
                transition-all
              "
            >
              <FaSave />
              Simpan Produk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
