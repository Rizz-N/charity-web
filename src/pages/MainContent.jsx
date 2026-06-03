import React, { useRef, useState, useEffect } from "react";
import Hero from "../assets/main-hero.png";
import { Link, NavLink } from "react-router-dom";
import Card from "../components/Card";
import { FaUser, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { data } from "../models/content";

const MainContent = () => {
  const cardItems = [
    {
      id: 1,
      icon: FaUser,
      title: "Donasi",
      desc: "Ulurkan tangan anda untuk mereka yang membutuhkan",
      path: "donasi",
    },
    {
      id: 2,
      icon: FaUser,
      title: "Zakat",
      desc: "Tunaikan Zakat maal, Zakat fitrah, dan zakat fidyah anda melalui kami",
      path: "zakat",
    },
    {
      id: 3,
      icon: FaUser,
      title: "Sedekah",
      desc: "Sedekahkan sebagian harta benda anda bagi mereka yang mebutuhkan",
      path: "sedekah",
    },
    {
      id: 4,
      icon: FaUser,
      title: "Waqaf",
      desc: "Sedekahkan sebagian harta benda anda bagi kepentingan umat banyak",
      path: "waqaf",
    },
    {
      id: 5,
      icon: FaUser,
      title: "Kurban",
      desc: "Tunaikan kewajiban kurban sesuai syariat islam bersama kami",
      path: "kurban",
    },
  ];

  const credentials = [
    {
      id: 1,
      icon: FaUser,
      title: "Responsif",
      desc: "Merespon cepat dan tepat kebutuhan masyarakat",
    },
    {
      id: 2,
      icon: FaUser,
      title: "Sustainable",
      desc: "Program jangka panjang untuk kemandirian umat",
    },
    {
      id: 3,
      icon: FaUser,
      title: "Credibility",
      desc: "Bertanggung jawab penuh menjalankan amanah program",
    },
  ];

  const scrollRef = useRef();

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    setShowLeft(el.scrollLeft > 0);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;

    const card = el.querySelector(".card-item");
    if (!card) return;

    const gap = 16; // sesuai gap-4 (16px)
    const scrollAmount = (card.offsetWidth + gap) * 2;

    el.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });

    setTimeout(checkScroll, 400);
  };

  return (
    <>
      <div className="mt-20 md:mt-0">
        <div className="relative flex justify-center">
          <img src={Hero} alt="hero" className="object-contain grayscale-50 " />
          <div className="absolute bottom-0 md:text-2xl text-xs text-shadow-lg/30 text-white flex h-full items-center">
            <div className="flex items-start flex-col gap-5">
              <p>sekecil apapun itu berharga bagi kami</p>
              <q className=" font-medium">
                Siapa yang mengerjakan kebaikan seberat zarah,
                <br /> dia akan melihat (balasan)-nya. (Qs. Al-Zalzalah - 7)
              </q>
              <NavLink
                to={"donasi"}
                className="ring-2 px-4 py-2 hover:bg-white/30 rounded-xl"
              >
                Donasi sekarang
              </NavLink>
            </div>
          </div>
        </div>
        {/* service section */}

        <div className="px-10 md:px-10 mt-10 relative">
          <p className="md:text-5xl font-bold uppercase text-blue-700 text-shadow-xs ">
            Layanan <span className="text-yellow-300">Kami</span>
          </p>

          {showLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full z-10 bg-white/40 p-2 lg:hidden shadow-lg/30"
            >
              <FaArrowLeft className="text-2xl" />
            </button>
          )}
          {showRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full z-10 bg-white/40 p-2 lg:hidden shadow-lg/30"
            >
              <FaArrowRight className="text-2xl" />
            </button>
          )}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-4 overflow-x-auto no-scrollbar mt-5"
          >
            {cardItems.map((item) => {
              return (
                <div
                  key={item.id}
                  className="card-item min-w-[calc(50%-8px)] lg:min-w-0"
                >
                  <Card
                    Icon={item.icon}
                    title={item.title}
                    desc={item.desc}
                    path={item.path}
                  />
                </div>
              );
            })}
          </div>
          {/* credential section */}
        </div>

        <div className="mt-16 px-6 md:px-10 py-10 bg-linear-to-r from-blue-500 to-blue-700 rounded-t-4xl shadow-xl">
          <p className="text-3xl md:text-5xl font-extrabold uppercase leading-tight text-white drop-shadow-lg">
            Mengapa berbagi <br />
            bersama <span className="text-yellow-300">kami?</span>
          </p>

          <div className="flex flex-wrap xl:justify-end md:justify-normal gap-5 mt-10">
            {credentials.map((c) => {
              return (
                <div
                  key={c.id}
                  className="w-full sm:w-[48%] lg:w-75 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 flex items-start gap-4 hover:bg-white/20 transition duration-300 shadow-lg"
                >
                  <div className="bg-white/20 p-3 rounded-xl">
                    <c.icon className="text-4xl text-white" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="text-lg md:text-xl font-semibold text-white">
                      {c.title}
                    </p>

                    <p className="text-sm md:text-base text-slate-100 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* news */}
        <div className="px-6 md:px-10 py-10">
          {/* title */}
          <div className="flex mb-8">
            <div className="w-full">
              <p className="text-blue-700 font-bold text-3xl md:text-5xl uppercase">
                Latest News
              </p>
              <div className="flex justify-between">
                <p className="text-slate-500 mt-2 text-sm  md:text-xl">
                  Informasi terbaru dan kegiatan kami
                </p>
                <div className="flex items-center gap-2 justify-end text-sm md:text-xl">
                  <Link to={"/donasi"}> lihat selengkapnya </Link>
                  <RiArrowRightDoubleLine />
                </div>
              </div>
            </div>
          </div>

          {/* news */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* card */}
            {data.slice(0, 3).map((d) => {
              return (
                <div
                  key={d.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg  border border-slate-100 group"
                >
                  <div className="overflow-hidden">
                    <img
                      src={d.thumbnail}
                      alt="place1"
                      className="w-full h-60 object-cover "
                    />
                  </div>

                  <div className="p-6 flex flex-col gap-4">
                    <span className="text-sm text-blue-600 font-medium">
                      {d.createdAt}
                    </span>

                    <p className="text-2xl font-bold text-slate-800">
                      {d.title}
                    </p>

                    <p className="text-slate-500 leading-relaxed line-clamp-2 text-justify">
                      {d.excerpt}
                    </p>

                    <Link
                      to={`/donasi/${d.slug}`}
                      className="w-fit mt-2 px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
