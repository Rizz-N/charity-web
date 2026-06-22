import { useState } from "react";
import toast from "react-hot-toast";
import { FaImage } from "react-icons/fa";

const UpdateProduct = ({ product, products, setProducts, onClose }) => {
  const [form, setForm] = useState({
    title: product.title,
    slug: product.slug,
    category: product.category,
    price: product.price,
    weight_min: product.weight_min,
    weight_max: product.weight_max,
    stock: product.stock,
    description: product.description,
  });

  const [image, setImage] = useState(product.image);

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

  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result);

      reader.onerror = reject;
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const imageData = image instanceof File ? await fileToBase64(image) : image;

    const updatedProducts = products.map((item) =>
      item.id === product.id
        ? {
            ...item,
            ...form,
            image: imageData,
          }
        : item,
    );

    localStorage.setItem("products", JSON.stringify(updatedProducts));

    setProducts(updatedProducts);

    toast.success("Produk berhasil diperbarui");

    onClose();
  };

  const preview = image instanceof File ? URL.createObjectURL(image) : image;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-5xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-5">Edit Produk</h2>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-6 p-6">
          <div className="lg:col-span-1">
            <div className="border-2 border-dashed border-slate-300 rounded-2xl p-5">
              <p className="font-semibold mb-4 flex items-center gap-2">
                <FaImage />
                Thumbnail Product
              </p>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full"
              />
              <div className="mt-4">
                {preview ? (
                  <img
                    src={preview}
                    alt=""
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
          <div className="col-span-2 space-y-5">
            <div>
              <label className="font-medium block mb-2">Nama Produk</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Nama Produk"
                className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            <div>
              <label className="font-medium block mb-2">Slug</label>
              <input
                type="text"
                value={form.slug}
                readOnly
                className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            <div>
              <label className="font-medium block mb-2">kategori</label>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"
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
            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-green-600 text-white px-5 py-3 rounded-xl"
              >
                Simpan
              </button>

              <button
                type="button"
                onClick={onClose}
                className="bg-gray-300 px-5 py-3 rounded-xl"
              >
                Batal
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
