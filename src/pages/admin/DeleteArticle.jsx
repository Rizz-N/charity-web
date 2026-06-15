import React, { useState } from "react";
import toast from "react-hot-toast";

const DeleteArticle = () => {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const [articles, setArticles] = useState(
    JSON.parse(localStorage.getItem("articles")) || [],
  );

  const deleteArticle = () => {
    const updatedArticles = articles.filter(
      (article) => article.id !== selectedId,
    );

    localStorage.setItem("articles", JSON.stringify(updatedArticles));

    setArticles(updatedArticles);
    toast.success("success delete data");
    setOpen(false);
    setSelectedId(null);
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Delete Article</h1>

        <div className="flex gap-2">
          {articles.map((d) => {
            return (
              <div
                key={d.id}
                className="bg-white flex flex-row md:flex-col rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition duration-300 group"
              >
                {/* image */}
                <div className="w-40 md:w-full md:h-52 shrink-0 overflow-hidden">
                  <img
                    src={d.thumbnail}
                    alt={d.title}
                    className="w-full h-full object-cover "
                  />
                </div>

                {/* content */}
                <div className="p-4 md:p-6 flex flex-col flex-1 gap-3">
                  <span className="text-xs md:text-sm text-blue-600 font-medium">
                    {d.createdAt}
                  </span>

                  <p className="text-base md:text-xl font-bold text-slate-800 line-clamp-2">
                    {d.title}
                  </p>

                  <p className="text-sm md:text-base text-slate-500 leading-relaxed line-clamp-3">
                    {d.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="relative mt-auto">
                      <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50">
                        Share
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedId(d.id);
                        setOpen(true);
                      }}
                      className="mt-auto w-fit px-4 py-2 text-xs md:text-sm rounded-xl bg-red-600 text-white hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
            <h2 className="text-xl font-bold text-slate-800">Hapus Artikel</h2>

            <p className="text-slate-600 mt-3">
              Apakah Anda yakin ingin menghapus artikel ini?
            </p>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => {
                  setOpen(false);
                  setSelectedId(null);
                }}
                className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300"
              >
                Batal
              </button>

              <button
                onClick={deleteArticle}
                className="px-4 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteArticle;
