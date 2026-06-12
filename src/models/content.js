import thumb from "../assets/main-hero.png";

const cowImage =
  "https://i.pinimg.com/736x/6f/0b/c1/6f0bc1bf28102eea3d509cfd68637bd7.jpg";

const sheepImage =
  "https://i.pinimg.com/1200x/4e/ef/2b/4eef2b1d42f8aff3f1f1ac66c238ed81.jpg";

export const data = [
  // ================= DONASI =================
  {
    id: 1,
    p_id: "BYAS",
    slug: "bantu-anak-yatim-sekolah",
    title: "Bantu Anak Yatim Tetap Sekolah",
    excerpt:
      "Ratusan anak yatim membutuhkan bantuan biaya pendidikan dan perlengkapan sekolah.",
    thumbnail:
      "https://i.pinimg.com/736x/1a/81/a3/1a81a357ca4cd8b250072725a273a8c7.jpg",
    createdAt: "10 Januari 2026",
    author: "Peduli Umat",
    type: "donasi",

    content: [
      {
        type: "paragraph",
        text: "Hingga saat ini, tercatat lebih dari 300 anak yatim di wilayah Jakarta dan sekitarnya yang terancam putus sekolah akibat keterbatasan ekonomi orang tua atau wali mereka. Sebagian besar dari mereka sebenarnya memiliki prestasi akademik yang baik, namun terkendala biaya seragam, buku, dan uang bulanan sekolah.",
      },
      {
        type: "image",
        image: "https://picsum.photos/id/101/800/400",
        caption:
          "Anak-anak yatim binaan Yayasan Peduli Umat sedang belajar bersama relawan.",
      },
      {
        type: "paragraph",
        text: "Program 'Sekolah Untuk Yatim' hadir untuk menjembatani para donatur dengan anak-anak hebat ini. Target kami adalah memberikan beasiswa penuh hingga lulus SMA, termasuk perlengkapan sekolah, bimbingan belajar, dan uang saku. Tahun ini, kami menargetkan 150 anak dapat terbantu.",
      },
      {
        type: "image",
        image: "https://picsum.photos/id/102/800/400",
        caption:
          "Suasana pembagian paket perlengkapan sekolah periode Januari 2026.",
      },
      {
        type: "paragraph",
        text: "Dengan donasi mulai Rp50.000 per bulan, Anda sudah bisa menyekolahkan satu anak yatim selama satu minggu. Mari bergabung menjadi orang tua asuh bagi mereka. Setiap rupiah yang Anda berikan akan kami salurkan secara transparan melalui laporan bulanan.",
      },
      {
        type: "paragraph",
        text: "Aksi kecil Anda berdampak besar bagi masa depan mereka. Jangan tunda kebaikan, karena hari ini mungkin mereka masih berharap. Bersama kita wujudkan generasi hafiz dan cendekia dari kalangan yatim dhuafa.",
      },
    ],
  },

  {
    id: 2,
    p_id: "SPL",
    slug: "sedekah-pangan-lansia",
    title: "Sedekah Pangan untuk Lansia",
    excerpt:
      "Program bantuan pangan mingguan untuk para lansia dhuafa di pelosok desa.",
    thumbnail:
      "https://i.pinimg.com/1200x/58/39/12/58391221a28409a1d45930a3ccc9abae.jpg",
    createdAt: "15 Januari 2026",
    author: "Peduli Umat",
    type: "donasi",

    content: [
      {
        type: "paragraph",
        text: "Di berbagai pelosok desa di Jawa Barat, terdapat lebih dari 500 lansia yang hidup sebatang kara tanpa keluarga yang merawat. Mereka seringkali hanya makan satu kali sehari atau bahkan tidak makan sama sekali karena keterbatasan akses dan biaya.",
      },
      {
        type: "image",
        image: "https://picsum.photos/id/104/800/400",
        caption:
          "Tim relawan sedang membagikan paket sembako kepada lansia dhuafa.",
      },
      {
        type: "paragraph",
        text: "Program 'Lansia Bahagia' hadir memberikan paket pangan mingguan berupa beras, telur, sayur, dan susu. Selain itu, kami juga menyediakan layanan cek kesehatan gratis setiap dua minggu sekali di posko terdekat.",
      },
      {
        type: "image",
        image: "https://picsum.photos/id/105/800/400",
        caption:
          "Seorang lansia menerima bantuan pangan dan vitamin dari relawan.",
      },
      {
        type: "paragraph",
        text: "Saat ini baru 30% lansia yang terjangkau oleh program ini karena keterbatasan dana. Dengan donasi Rp100.000, Anda bisa memenuhi kebutuhan pangan satu lansia selama satu bulan penuh. Mari berbagi kebahagiaan di hari tua mereka.",
      },
      {
        type: "paragraph",
        text: "Bantuan Anda bukan hanya soal perut kenyang, tetapi juga memberi mereka harapan bahwa masih ada yang peduli. Jangan biarkan mereka sendirian. Ayo, ulurkan tangan Anda melalui program sedekah pangan ini.",
      },
    ],
  },

  {
    id: 3,
    p_id: "BKB",
    slug: "bantuan-korban-banjir",
    title: "Bantuan Korban Banjir",
    excerpt:
      "Ribuan warga terdampak banjir membutuhkan makanan, pakaian, dan obat-obatan.",
    thumbnail:
      "https://i.pinimg.com/736x/5c/c6/ac/5cc6acf1542b0f812c0639bc592280f4.jpg",
    createdAt: "20 Januari 2026",
    author: "Peduli Umat",
    type: "donasi",

    content: [
      {
        type: "image",
        image: "https://picsum.photos/id/107/800/400",
        caption:
          "Kondisi banjir bandang yang merendam ribuan rumah warga pada awal Januari 2026.",
      },
      {
        type: "paragraph",
        text: "Banjir bandang melanda 15 desa di Kabupaten Garut pada 5 Januari lalu. Lebih dari 10.000 jiwa terpaksa mengungsi ke tempat yang lebih tinggi. Hingga saat ini, akses darat masih terputus di beberapa titik sehingga distribusi bantuan sangat terbatas.",
      },
      {
        type: "paragraph",
        text: "Kebutuhan paling mendesak adalah makanan siap saji, selimut, pakaian layak pakai, obat-obatan, dan perlengkapan bayi. Posko pengungsian juga kekurangan tenda dan matras. Tim kami sudah berada di lokasi bersama relawan dari berbagai daerah.",
      },
      {
        type: "image",
        image: "https://picsum.photos/id/108/800/400",
        caption:
          "Relawan mendistribusikan bantuan makanan dan perlengkapan darurat di tenda pengungsian.",
      },
      {
        type: "paragraph",
        text: "Donasi Anda akan kami salurkan 100% untuk kebutuhan darurat dan rehabilitasi pasca banjir. Target penggalangan dana saat ini adalah Rp500 juta untuk memenuhi kebutuhan 2 minggu ke depan. Setiap kontribusi, sekecil apapun, sangat berarti.",
      },
      {
        type: "paragraph",
        text: "Banjir tidak bisa dicegah, tapi penderitaan korban bisa kita ringankan. Jadilah bagian dari tim kemanusiaan ini. Bantu mereka bangkit kembali dari duka banjir bersama Yayasan Peduli Umat.",
      },
    ],
  },

  {
    id: 4,
    p_id: "DAG",
    slug: "donasi-ambulance-gratis",
    title: "Donasi Ambulance Gratis",
    excerpt:
      "Bantu hadirkan layanan ambulance gratis untuk masyarakat kurang mampu.",
    thumbnail:
      "https://i.pinimg.com/736x/17/a7/e7/17a7e76cc7fe480ae1529246ddc4b6fc.jpg",
    createdAt: "25 Januari 2026",
    author: "Peduli Umat",
    type: "donasi",

    content: [
      {
        type: "paragraph",
        text: "Setiap hari, ada puluhan warga dhuafa yang harus berjalan kaki atau naik angkutan umum dalam kondisi sakit parah hanya karena tidak mampu menyewa ambulance. Biaya sewa ambulance sekali jalan bisa mencapai Rp500.000 - Rp1.000.000 yang tidak terjangkau bagi mereka.",
      },
      {
        type: "image",
        image: "https://picsum.photos/id/110/800/400",
        caption:
          "Ambulance gratis yang saat ini masih beroperasi dengan kapasitas terbatas.",
      },
      {
        type: "paragraph",
        text: "Program 'Ambulance Berbagi' bertujuan menghadirkan 1 unit ambulance lengkap dengan peralatan medis dasar dan 2 tenaga paramedis. Ambulance ini akan melayani gratis 24 jam untuk rujukan pasien dhuafa dari puskesmas ke rumah sakit.",
      },
      {
        type: "image",
        image: "https://picsum.photos/id/111/800/400",
        caption:
          "Simulasi layanan ambulance gratis oleh relawan medis Yayasan Peduli Umat.",
      },
      {
        type: "paragraph",
        text: "Target kami menggalang dana Rp600 juta untuk satu unit ambulance berikut operasional 1 tahun pertama. Saat ini baru terkumpul 35%. Mari bantu mereka yang sakit agar bisa mendapatkan akses kesehatan yang layak tanpa khawatir biaya transportasi.",
      },
      {
        type: "paragraph",
        text: "Nyawa tidak bisa ditunda. Dengan donasi Anda, satu ambulance bisa menyelamatkan ratusan nyawa setiap tahunnya. Ayo, kebaikan Anda akan mengalir terus setiap kali ambulance ini beroperasi.",
      },
    ],
  },

  {
    id: 5,
    p_id: "PMGS",
    slug: "program-makan-gratis-santri",
    title: "Program Makan Gratis Santri",
    excerpt: "Bantu kebutuhan makan harian para santri penghafal Al-Quran.",
    thumbnail:
      "https://i.pinimg.com/1200x/6f/1c/48/6f1c483c411e4e1b97a440436df50117.jpg",
    createdAt: "30 Januari 2026",
    author: "Peduli Umat",
    type: "donasi",

    content: [
      {
        type: "image",
        image: "https://picsum.photos/id/113/800/400",
        caption:
          "Santri sedang makan bersama dengan menu sederhana di pondok pesantren.",
      },
      {
        type: "paragraph",
        text: "Di 5 pondok pesantren binaan kami, terdapat 700 santri yang setiap harinya harus makan dengan lauk seadanya. Bahkan beberapa pondok hanya bisa menyediakan nasi dan sayur tanpa lauk protein karena keterbatasan dana operasional.",
      },
      {
        type: "paragraph",
        text: "Program 'Santri Kuat Hafal Quran' hadir untuk memastikan mereka mendapatkan asupan gizi yang cukup. Dengan menu 4 sehat 5 sempurna setiap harinya, konsentrasi dan daya ingat santri dalam menghafal Al-Quran akan lebih optimal.",
      },
      {
        type: "image",
        image: "https://picsum.photos/id/114/800/400",
        caption:
          "Dapur umum program makan gratis santri yang dikelola oleh pengurus pondok.",
      },
      {
        type: "paragraph",
        text: "Dengan donasi Rp25.000, Anda sudah bisa memberi makan satu santri selama 3 hari. Atau Rp250.000 untuk satu bulan penuh. Target kami bisa memenuhi kebutuhan makan harian 700 santri hingga bulan Ramadan mendatang.",
      },
      {
        type: "paragraph",
        text: "Mendukung santri berarti mendukung masa depan agama ini. Mereka adalah calon penghafal dan pemimpin umat. Bantu mereka menghafal dengan perut yang kenyang dan hati yang bahagia.",
      },
    ],
  },

  // ================= WAQAF =================
  {
    id: 6,
    p_id: "WQPM",
    slug: "waqaf-pembangunan-masjid",
    title: "Waqaf Pembangunan Masjid",
    excerpt:
      "Mari ikut berkontribusi dalam pembangunan masjid untuk masyarakat desa.",
    thumbnail:
      "https://i.pinimg.com/736x/91/5e/b4/915eb436733d340ccb513f4ebacf3d40.jpg",
    createdAt: "02 Februari 2026",
    author: "Peduli Umat",
    type: "waqaf",

    content: [
      {
        type: "paragraph",
        text: "Masjid Nurul Iman di Desa Cikaramas, Subang, saat ini hanya berupa bangunan semi permanen dengan dinding anyaman bambu dan lantai tanah. Setiap kali hujan, jamaah harus bertumpuk di sudut yang tidak bocor untuk melaksanakan shalat berjamaah.",
      },
      {
        type: "image",
        image: "https://picsum.photos/id/116/800/400",
        caption:
          "Kondisi masjid saat ini yang masih semi permanen dan memprihatinkan.",
      },
      {
        type: "paragraph",
        text: "Proyek waqaf ini bertujuan membangun masjid permanen dengan luas 200 meter persegi, dilengkapi tempat wudhu, menara kecil, dan ruang serbaguna. Total dana yang dibutuhkan adalah Rp1,2 miliar untuk konstruksi dan fasilitas pendukung.",
      },
      {
        type: "image",
        image: "https://picsum.photos/id/117/800/400",
        caption:
          "Desain 3D masjid yang akan dibangun jika target waqaf tercapai.",
      },
      {
        type: "paragraph",
        text: "Masjid akan menjadi pusat kegiatan keagamaan, pendidikan Al-Quran anak-anak, dan pemberdayaan ekonomi warga melalui koperasi syariah. Setiap rupiah waqaf Anda akan menjadi investasi akhirat yang pahalanya terus mengalir.",
      },
      {
        type: "paragraph",
        text: "Saat ini baru 20% dana yang terkumpul. Mari wakafkan harta terbaik Anda untuk pembangunan rumah Allah di desa ini. Jadilah bagian dari pahala jariyah yang tak terputus hingga hari kiamat.",
      },
    ],
  },

  {
    id: 7,
    p_id: "WQAP",
    slug: "waqaf-alquran-pesantren",
    title: "Waqaf Al-Quran untuk Pesantren",
    excerpt:
      "Ribuan santri membutuhkan mushaf Al-Quran yang layak untuk belajar.",
    thumbnail:
      "https://i.pinimg.com/736x/a6/c2/e0/a6c2e05346f309354c9206e5b119f3df.jpg",
    createdAt: "05 Februari 2026",
    author: "Peduli Umat",
    type: "waqaf",

    content: [
      {
        type: "image",
        image: "https://picsum.photos/id/119/800/400",
        caption:
          "Mushaf Al-Quran yang sudah rusak dan tidak layak pakai di pesantren.",
      },
      {
        type: "paragraph",
        text: "Pesantren Al-Hidayah di Tasikmalaya memiliki 1.200 santri, namun hanya tersedia 300 mushaf Al-Quran yang masih layak. Selebihnya sudah sobek, hilang halaman, atau sampulnya lepas. Akibatnya, santri harus bergantian menggunakan satu mushaf untuk berdua atau bertiga.",
      },
      {
        type: "paragraph",
        text: "Program waqaf Al-Quran ini menargetkan 1.000 mushaf Al-Quran standar pesantren (ukuran sedang, khat Madinah) lengkap dengan terjemahan dan tajwid warna. Setiap mushaf dihargai Rp75.000 termasuk ongkos kirim ke pesantren.",
      },
      {
        type: "image",
        image: "https://picsum.photos/id/120/800/400",
        caption:
          "Santri sedang mengaji dengan mushaf yang masih tersisa dan layak pakai.",
      },
      {
        type: "paragraph",
        text: "Dengan waqaf Rp75.000, Anda sudah menghadiahkan satu mushaf yang akan dipakai puluhan santri selama bertahun-tahun. Setiap huruf yang dibaca dari mushaf waqaf Anda akan menjadi pahala jariyah yang tak terhitung.",
      },
      {
        type: "paragraph",
        text: "Ayo, jadilah bagian dari gerakan mencetak generasi qurani. Waqafkan Al-Quran terbaik Anda untuk para santri yang haus akan ilmu Allah.",
      },
    ],
  },

  {
    id: 8,
    p_id: "WQAB",
    slug: "waqaf-sumur-air-bersih",
    title: "Waqaf Sumur Air Bersih",
    excerpt:
      "Bangun sumur air bersih untuk warga yang kesulitan mendapatkan air.",
    thumbnail:
      "https://i.pinimg.com/1200x/1b/2a/5c/1b2a5cf91bbe5d1e0d33a543a140e2a3.jpg",
    createdAt: "08 Februari 2026",
    author: "Peduli Umat",
    type: "waqaf",

    content: [
      {
        type: "paragraph",
        text: "Dusun Karya Mulya, Gunung Kidul, Yogyakarta, selama puluhan tahun mengalami krisis air bersih setiap musim kemarau. Warga harus berjalan hingga 3 kilometer ke sungai atau membeli air dengan harga Rp50.000 per tangki. Banyak anak perempuan yang bahkan tidak bisa sekolah karena harus membantu mengambil air.",
      },
      {
        type: "image",
        image: "https://picsum.photos/id/122/800/400",
        caption:
          "Warga sedang mengambil air dari sumur dangkal yang keruh dan sering kering.",
      },
      {
        type: "paragraph",
        text: "Proyek waqaf sumur bor artesis sedalam 120 meter akan menyediakan air bersih untuk 150 kepala keluarga. Total kebutuhan dana adalah Rp350 juta untuk pengeboran, pemasangan pompa, tandon air, dan 10 kran umum.",
      },
      {
        type: "image",
        image: "https://picsum.photos/id/123/800/400",
        caption:
          "Ilustrasi sumur bor yang akan dibangun dengan sistem kran umum bagi warga.",
      },
      {
        type: "paragraph",
        text: "Air adalah sumber kehidupan. Dengan waqaf sumur ini, setiap tetes air yang diminum warga, setiap wudhu yang dilakukan untuk shalat, akan mengalirkan pahala untuk Anda. Target waqaf baru mencapai 45%, masih kurang Rp192,5 juta.",
      },
      {
        type: "paragraph",
        text: "Bayangkan bahagianya anak-anak yang tidak perlu lagi berjalan jauh membawa ember. Bantu mereka mendapatkan air bersih dengan waqaf terbaik Anda. Sedekah jariyah yang paling afdhol adalah memberi air minum.",
      },
    ],
  },

  {
    id: 9,
    p_id: "WQRT",
    slug: "waqaf-rumah-tahfidz",
    title: "Waqaf Rumah Tahfidz",
    excerpt: "Dukung pembangunan rumah tahfidz untuk generasi penghafal Quran.",
    thumbnail:
      "https://i.pinimg.com/1200x/6c/40/8a/6c408a4cfe3e02d3c9a64adbfaab2e04.jpg",
    createdAt: "10 Februari 2026",
    author: "Peduli Umat",
    type: "waqaf",

    content: [
      {
        type: "image",
        image: "https://picsum.photos/id/125/800/400",
        caption:
          "Rumah tahfidz saat ini yang masih menempati rumah warga sederhana.",
      },
      {
        type: "paragraph",
        text: "Rumah Tahfidz As-Salam di Bandung saat ini hanya menampung 30 santri di rumah berukuran 7x10 meter. Mereka tidur berdesakan, belajar di teras, dan tidak memiliki ruang khusus untuk setoran hafalan. Akibatnya banyak santri yang drop out karena tidak nyaman.",
      },
      {
        type: "paragraph",
        text: "Target waqaf kali ini adalah membangun rumah tahfidz 2 lantai di atas tanah waqaf seluas 500 meter persegi. Fasilitas: 6 ruang kelas, asrama putra-putri, ruang makan, dapur, perpustakaan, dan mushola. Total dana Rp2,5 miliar.",
      },
      {
        type: "image",
        image: "https://picsum.photos/id/126/800/400",
        caption:
          "Suasana santri tahfidz sedang belajar walaupun dengan fasilitas seadanya.",
      },
      {
        type: "paragraph",
        text: "Dengan kapasitas baru, rumah tahfidz ini bisa menampung 150 santri penghafal Al-Quran. Mereka akan dibina selama 4 tahun hingga hafal 30 juz. Ini adalah investasi besar untuk mencetak generasi penghafal Al-Quran dari kalangan dhuafa.",
      },
      {
        type: "paragraph",
        text: "Setiap santri yang lahir dari rumah tahfidz ini akan menjadi penerang di masyarakatnya. Waqaf Anda akan terus mengalirkan pahala setiap kali mereka membaca Al-Quran, mengajar orang lain, atau bahkan ketika anak cucu mereka menjadi hafiz. Ini waqaf terbaik sepanjang masa!",
      },
    ],
  },

  {
    id: 10,
    p_id: "WQKM",
    slug: "waqaf-karpet-masjid",
    title: "Waqaf Karpet Masjid",
    excerpt:
      "Bantu pengadaan karpet masjid agar jamaah lebih nyaman beribadah.",
    thumbnail:
      "https://i.pinimg.com/736x/ac/fd/18/acfd185024b9fe16a8bc40a7494e06ef.jpg",
    createdAt: "14 Februari 2026",
    author: "Peduli Umat",
    type: "waqaf",

    content: [
      {
        type: "paragraph",
        text: "Masjid Jami Al-Ikhlas di Cilegon sudah berusia 20 tahun. Karpet masjid saat ini sudah rusak parah, berlubang, berbau, dan banyak tambalan yang tidak rapi. Jamaah terutama yang lanjut usia sering tergelincir atau merasa tidak nyaman saat bersujud.",
      },
      {
        type: "image",
        image: "https://picsum.photos/id/128/800/400",
        caption:
          "Kondisi karpet masjid yang sudah rusak dan tidak layak pakai.",
      },
      {
        type: "paragraph",
        text: "Program waqaf ini bertujuan mengganti seluruh karpet masjid seluas 400 meter persegi dengan karpet masjid berkualitas tinggi, tebal, anti air, dan motif yang nyaman dipandang. Biaya per meter persegi adalah Rp150.000, total Rp60 juta termasuk pemasangan.",
      },
      {
        type: "image",
        image: "https://picsum.photos/id/129/800/400",
        caption:
          "Contoh karpet masjid baru yang akan dipasang (gambar ilustrasi).",
      },
      {
        type: "paragraph",
        text: "Dengan waqaf Rp150.000 per meter, Anda telah ikut menyediakan tempat sujud yang nyaman bagi para jamaah lima waktu. Setiap kali ada yang shalat di atas karpet waqaf Anda, Anda akan mendapatkan pahala tanpa henti.",
      },
      {
        type: "paragraph",
        text: "Saat ini terkumpul dana Rp24 juta, masih kurang Rp36 juta. Mari tunaikan waqaf karpet masjid ini. Karpet adalah amal jariyah yang sering dilupakan padahal dampaknya langsung dirasakan setiap hari oleh puluhan hingga ratusan jamaah. Ayo, wakafkan sekarang!",
      },
    ],
  },
  {
    id: 11,
    p_id: "S",
    slug: "Sedekah",
    title: "Mari sedekah bersama kami",
    excerpt:
      "Sedekah bukan hanya tentang memberi materi, tetapi tentang menghadirkan harapan bagi mereka yang hampir kehilangan alasan untuk percaya bahwa dunia masih peduli.",
    thumbnail:
      "https://i.pinimg.com/1200x/5c/31/c5/5c31c5b4a58cfcf2bc06c5118a3ab2c9.jpg",
    createdAt: "14 Februari 2026",
    author: "Peduli Umat",
    type: "sedekah",

    content: [],
  },
];

export const kurbanData = [
  {
    id: 1,
    p_id: "DM",
    image: sheepImage,
    title: "Domba/Kambing Medium",
    slug: "domba-kambing-medium",
    category: "kambing",
    price: 2349000,
    weight_min: 36,
    weight_max: 38,
    stock: 12,
    status: "active",
    description: "Kambing sehat sesuai syariat, cocok untuk qurban individu.",
  },
  {
    id: 2,
    p_id: "DL",
    image: sheepImage,
    title: "Domba/Kambing Large",
    slug: "domba-kambing-large",
    category: "kambing",
    price: 2899000,
    weight_min: 39,
    weight_max: 45,
    stock: 8,
    status: "active",
    description:
      "Bobot lebih besar dengan kualitas premium dan perawatan terbaik.",
  },
  {
    id: 3,
    p_id: "SR",
    image: cowImage,
    title: "Sapi 1/7 Reguler",
    slug: "sapi-1-per-7-reguler",
    category: "sapi",
    price: 2450000,
    weight_min: 250,
    weight_max: 300,
    stock: 20,
    status: "active",
    description: "Patungan sapi untuk 7 orang sesuai ketentuan qurban syariat.",
  },
  {
    id: 4,
    p_id: "SP",
    image: cowImage,
    title: "Sapi Premium 1/7",
    slug: "sapi-premium-1-per-7",
    category: "sapi",
    price: 3200000,
    weight_min: 320,
    weight_max: 380,
    stock: 10,
    status: "active",
    description:
      "Sapi premium sehat dengan distribusi daging ke wilayah membutuhkan.",
  },
];
// thumb default appwrite 6a1a9cd9001e758533d2
