import React from "react";
import { useParams, Link } from "react-router-dom";
import { data } from "../models/content";
import { BiHome } from "react-icons/bi";
import Breadcrumb from "../components/Breadcrumb";

const WaqafDetails = () => {
  const { slug } = useParams();

  const news = data.find((item) => item.slug === slug);

  if (!news) {
    return <p>Tidak ada Data</p>;
  }
  return (
    <>
      <div className="px-10 py-5 mt-20 bg-slate-200">
        <Breadcrumb />
        <div className="w-full">
          <img
            src={news.thumbnail}
            alt={news.title}
            className="w-full md:h-100 object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* left */}
        <div className="lg:col-span-2 max-w-4xl mx-auto px-5">
          <div className="mt-8 flex flex-col gap-5">
            <span className="text-blue-600">{news.createdAt}</span>

            <h1 className="md:text-5xl text-2xl font-bold">{news.title}</h1>

            {news.content.map((block, index) => {
              switch (block.type) {
                case "heading":
                  return (
                    <h2 key={index} className="text-3xl font-bold mt-5">
                      {block.text}
                    </h2>
                  );

                case "paragraph":
                  return (
                    <p
                      key={index}
                      className="text-lg leading-relaxed text-justify"
                    >
                      {block.text}
                    </p>
                  );

                case "image":
                  return (
                    <div key={index} className="space-y-3">
                      <img
                        src={block.image}
                        alt=""
                        className="w-full rounded-2xl"
                      />

                      <p className="text-center text-sm text-gray-500">
                        {block.caption}
                      </p>
                    </div>
                  );

                default:
                  return null;
              }
            })}
          </div>
        </div>
        {/* right */}
        <div className="bg-white border border-slate-100 rounded-3xl shadow-lg p-5 md:p-8 h-fit sticky top-24">
          <p className="text-slate-400 border-2 rounded-lg inline-block px-5 py-1 capitalize ">
            {news.type}
          </p>
          <p className="text-2xl font-bold text-slate-800 mb-6">{news.title}</p>

          <div className="space-y-4">
            <div className="rounded-xl overflow-hidden">
              <img
                src={news.thumbnail}
                alt="image"
                className=" object-cover "
              />
            </div>

            <div className="border-t pt-4 flex justify-between">
              <p className="font-bold text-lg">{news.author}</p>

              <p className="font-bold text-2xl text-blue-600"></p>
            </div>
          </div>

          {/* payment button */}
          <Link
            to={`/${news.type}/bayar/${news.slug}`}
            className="w-full mt-3 inline-block text-center bg-linear-to-r from-blue-500 to-blue-700 py-2 hover:bg-blue-500 transition-all duration-300 text-white font-medium"
          >
            Bayar {news.type} sekarang
          </Link>

          <p className="text-xs text-slate-400 text-center mt-4">
            Dengan berdonasi Anda membantu mereka yang membutuhkan.
          </p>
        </div>
      </div>
    </>
  );
};

export default WaqafDetails;
