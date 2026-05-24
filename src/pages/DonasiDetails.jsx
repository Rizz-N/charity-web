import React from "react";
import { useParams, Link } from "react-router-dom";
import { data } from "../models/content";
import { BiHome } from "react-icons/bi";
import Breadcrumb from "../components/Breadcrumb";

const DonasiDetails = () => {
  const { slug } = useParams();

  const news = data.find((item) => item.slug === slug);

  if (!news) {
    return <p>Tidak ada Data</p>;
  }
  return (
    <>
      <div className="px-10 py-5 mt-20 bg-slate-200">
        <Breadcrumb />
        <img
          src={news.thumbnail}
          alt={news.title}
          className="w-full h-100 object-cover"
        />
      </div>
      <div className="max-w-4xl mx-auto px-5">
        <div className="mt-8 flex flex-col gap-5">
          <span className="text-blue-600">{news.createdAt}</span>

          <h1 className="text-5xl font-bold">{news.title}</h1>

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
    </>
  );
};

export default DonasiDetails;
