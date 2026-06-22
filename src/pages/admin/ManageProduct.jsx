import { useState } from "react";
import toast from "react-hot-toast";
import UpdateProduct from "./UpdateProduct";

const ManageProduct = () => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || [],
  );

  const [selectedProduct, setSelectedProduct] = useState(null);

  const deleteProduct = (id) => {
    if (!window.confirm("Hapus produk?")) return;

    const updated = products.filter((item) => item.id !== id);

    localStorage.setItem("products", JSON.stringify(updated));

    setProducts(updated);

    toast.success("Produk berhasil dihapus");
  };

  return (
    <div className="mt-2 bg-white shadow shadow-slate-300 rounded-xl p-5 ">
      <h1 className="text-3xl font-bold mb-6">Manage Product</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow shadow-slate-900 overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-4">
              <h3 className="font-bold text-lg">{product.title}</h3>

              <p className="text-green-600 font-semibold">
                Rp {Number(product.price).toLocaleString("id-ID")}
              </p>

              <p className="text-sm text-gray-500">Stok : {product.stock}</p>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="flex-1 bg-blue-600 text-white py-2 rounded-xl"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteProduct(product.id)}
                  className="flex-1 bg-red-600 text-white py-2 rounded-xl"
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <UpdateProduct
          product={selectedProduct}
          products={products}
          setProducts={setProducts}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ManageProduct;
