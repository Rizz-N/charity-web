import { useState } from "react";
import toast from "react-hot-toast";
import { FaPlus, FaTrash, FaFileAlt } from "react-icons/fa";

const Article = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [pId, setPId] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  const [content, setContent] = useState([
    {
      type: "paragraph",
      text: "",
    },
  ]);

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

  const reserForm = () => {
    setThumbnail(null);
    setTitle("");
    setPId("");
    setExcerpt("");
    setContent([
      {
        type: "paragraph",
        text: "",
      },
    ]);
  };

  const submitArticle = async (e) => {
    e.preventDefault();

    const fileToBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => resolve(reader.result);

        reader.onerror = reject;
      });

    const payloadContent = await Promise.all(
      content.map(async (item) => {
        if (item.type === "image") {
          return {
            type: "image",
            caption: item.caption,
            image: item.file ? await fileToBase64(item.file) : null,
          };
        }

        return {
          type: "paragraph",
          text: item.text,
        };
      }),
    );

    const thumbnailBase64 = thumbnail ? await fileToBase64(thumbnail) : null;

    const newArticle = {
      id: Date.now(),
      p_id: pId,
      slug: title.toLowerCase().replaceAll(" ", "-"),
      title,
      category,
      excerpt,
      thumbnail: thumbnailBase64,
      createdAt: new Date().toLocaleDateString("id-ID"),
      author: "Admin",
      type: "donasi",
      content: payloadContent,
    };

    const articles = JSON.parse(localStorage.getItem("articles")) || [];

    articles.push(newArticle);

    localStorage.setItem("articles", JSON.stringify(articles));

    toast.success("Berhasil disimpan");
    reserForm();
    console.log(newArticle);
  };

  const thumbnailPreview = thumbnail ? URL.createObjectURL(thumbnail) : null;

  return (
    <div>
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Create Article</h1>

        <form onSubmit={submitArticle} className="space-y-5">
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
            <label className="font-medium block mb-2">Kategori</label>

            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-slate-300 rounded-xl p-3"
            >
              <option value="wakaf">Wakaf</option>
              <option value="donasi">Donasi</option>
            </select>
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
                <div key={index} className="border rounded-xl p-4 bg-slate-50">
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

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl"
          >
            Simpan Berita
          </button>
        </form>

        {/* preview */}
        <div className="mt-10 border-t pt-8">
          <h2 className="text-2xl font-bold mb-6">Preview Artikel</h2>

          <div className="relative bg-white border rounded-2xl overflow-hidden shadow">
            {/* Thumbnail */}
            {thumbnailPreview && (
              <img
                src={thumbnailPreview}
                alt="thumbnail"
                className="w-full h-100 object-cover"
              />
            )}

            <p className="absolute right-2 top-3 bg-green-500 px-5 py-2 text-xl font-medium text-white rounded-xl">
              {category || "kategori berita"}
            </p>

            <div className="p-8">
              {/* Judul */}
              <h1 className="text-4xl font-bold mb-4">
                {title || "Judul Berita"}{" "}
              </h1>

              {/* Excerpt */}
              <p className="text-gray-600 text-lg mb-8 border-l-4 border-blue-500 pl-4 italic">
                {excerpt || "Excerpt atau ringkasan berita akan muncul di sini"}
              </p>

              {/* Content */}
              <div className="space-y-8">
                {content.map((item, index) => (
                  <div key={index}>
                    {item.type === "paragraph" && (
                      <p className="text-gray-700 leading-8 text-justify">
                        {item.text || "Isi paragraf akan tampil di sini..."}
                      </p>
                    )}

                    {item.type === "image" && (
                      <div>
                        {item.preview ? (
                          <img
                            src={item.preview}
                            alt="content"
                            className="w-full rounded-xl mb-3"
                          />
                        ) : (
                          <div className="w-full h-64 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
                            Belum ada gambar
                          </div>
                        )}

                        {item.caption && (
                          <p className="text-center text-sm text-gray-500 italic">
                            {item.caption}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
