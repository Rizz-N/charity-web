import React, { useState } from "react";
import { FaFileAlt, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
const UpdateArticle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [pId, setPId] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [content, setContent] = useState([]);
  const [articles, setArticles] = useState(
    JSON.parse(localStorage.getItem("articles")) || [],
  );

  const addParagraph = () => {
    setContent([
      ...content,
      {
        type: "paragraph",
        text: "",
      },
    ]);
  };

  const addImage = () => {
    setContent([
      ...content,
      {
        type: "image",
        caption: "",
        file: null,
      },
    ]);
  };

  const removeContent = (index) => {
    setContent(content.filter((_, i) => i !== index));
  };

  const updateContent = (index, field, value) => {
    const updated = [...content];
    updated[index][field] = value;
    setContent(updated);
  };

  const thumbnailPreview =
    thumbnail instanceof File ? URL.createObjectURL(thumbnail) : thumbnail;

  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result);

      reader.onerror = reject;
    });

  const handleOpenUpdate = (article) => {
    setSelectedId(article.id);

    setTitle(article.title);
    setExcerpt(article.excerpt);
    setPId(article.p_id);
    setThumbnail(article.thumbnail);
    setContent(article.content);

    setIsOpen(true);
  };

  const updateArticle = async (e) => {
    e.preventDefault();

    const thumbnailData =
      thumbnail instanceof File ? await fileToBase64(thumbnail) : thumbnail;

    const articles = JSON.parse(localStorage.getItem("articles")) || [];

    const updatedArticles = articles.map((article) =>
      article.id === selectedId
        ? {
            ...article,
            title,
            excerpt,
            p_id: pId,
            thumbnail: thumbnailData,
            content,
          }
        : article,
    );

    localStorage.setItem("articles", JSON.stringify(updatedArticles));

    setArticles(updatedArticles);
    toast.success("Succes Update Data");
    setIsOpen(false);
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Update Article</h1>

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
                      onClick={() => handleOpenUpdate(d)}
                      className="mt-auto w-fit px-4 py-2 text-xs md:text-sm rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-6">Update Article</h2>

              <form onSubmit={updateArticle}>
                <div>
                  <label className="font-medium">Thumbnail</label>
                  <div className="relative">
                    <input
                      type="file"
                      onChange={(e) => setThumbnail(e.target.files[0])}
                      className="mt-2 block w-full border p-3 rounded-xl cursor-pointer text-gray-600 hover:ring-black hover:ring-2 transition-all duration-300"
                    />
                    <FaFileAlt
                      size={20}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-medium">Judul Berita</label>

                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border rounded-xl p-3 mt-2"
                  />
                </div>

                <div>
                  <label className="font-medium">Payment ID (p_id)</label>

                  <input
                    type="text"
                    value={pId}
                    onChange={(e) => setPId(e.target.value)}
                    placeholder="Contoh: BYAS"
                    className="w-full border rounded-xl p-3 mt-2"
                  />
                </div>

                <div>
                  <label className="font-medium">Excerpt</label>

                  <textarea
                    rows="3"
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    className="w-full border rounded-xl p-3 mt-2"
                  />
                </div>

                <div className="border-t pt-6">
                  <h2 className="font-semibold mb-4">Isi Artikel</h2>

                  <div className="space-y-4">
                    {content.map((item, index) => (
                      <div
                        key={index}
                        className="border rounded-xl p-4 bg-slate-50"
                      >
                        <div className="flex justify-between mb-3">
                          <span className="font-medium">
                            {item.type === "paragraph" ? "Paragraf" : "Gambar"}
                          </span>

                          <button
                            type="button"
                            onClick={() => removeContent(index)}
                            className="text-red-500"
                          >
                            <FaTrash />
                          </button>
                        </div>

                        {item.type === "paragraph" && (
                          <textarea
                            rows="5"
                            value={item.text}
                            onChange={(e) =>
                              updateContent(index, "text", e.target.value)
                            }
                            className="w-full border rounded-lg p-3"
                          />
                        )}

                        {item.type === "image" && (
                          <div className="space-y-3">
                            {(item.preview || item.image) && (
                              <img
                                src={item.preview || item.image}
                                alt=""
                                className="w-full rounded-xl mb-3"
                              />
                            )}

                            <input
                              type="file"
                              onChange={(e) => {
                                const file = e.target.files[0];

                                const updated = [...content];

                                updated[index].file = file;
                                updated[index].preview = file
                                  ? URL.createObjectURL(file)
                                  : null;

                                setContent(updated);
                              }}
                              className="w-full"
                            />

                            <input
                              type="text"
                              placeholder="Caption gambar"
                              value={item.caption}
                              onChange={(e) =>
                                updateContent(index, "caption", e.target.value)
                              }
                              className="w-full border rounded-lg p-3"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-4">
                    <button
                      type="button"
                      onClick={addParagraph}
                      className="bg-blue-500 text-white px-4 py-2 rounded-xl flex items-center gap-2"
                    >
                      <FaPlus />
                      Paragraf
                    </button>

                    <button
                      type="button"
                      onClick={addImage}
                      className="bg-green-500 text-white px-4 py-2 rounded-xl flex items-center gap-2"
                    >
                      <FaPlus />
                      Gambar
                    </button>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    type="submit"
                    className="px-5 py-3 bg-green-600 text-white rounded-xl"
                  >
                    Simpan Perubahan
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-5 py-3 bg-gray-300 rounded-xl"
                  >
                    Batal
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateArticle;
