import React from "react";
import Card from "./Card";
import Header from "./components/Header";

const News = () => {
  const dataNews = [
    {
      title: "Ekonomi Indonesia Membaik di Tengah Pandemi",
      date: "28 Juli 2024",
      content:
        "Pertumbuhan ekonomi Indonesia terus menunjukkan tren positif meskipun di tengah pandemi. Hal ini disampaikan oleh Menteri Keuangan dalam konferensi pers terbaru.",
      image:
        "https://feb.umsu.ac.id/wp-content/uploads/2023/05/21097-ilustrasi-pemulihan-ekonomi-nasional-shutterstock.jpg",
      category: "Ekonomi",
      link: "https://feb.umsu.ac.id/prinsip-faktor-sistem-ekonomi-dan-kegiatan-ekonomi/",
    },
    {
      title: "Inovasi Teknologi AI Terbaru dari Startup Lokal",
      date: "27 Juli 2024",
      content:
        "Sebuah startup teknologi lokal berhasil menciptakan inovasi AI yang dapat meningkatkan efisiensi di berbagai sektor industri. Inovasi ini diharapkan dapat membantu meningkatkan produktivitas nasional.",
      image:
        "https://www.gamelab.id/uploads/modules/MARKETING/Teknologi%20Digital%20-%20GAMELAB.ID%20(3).jpg?1676969394592",
      category: "Teknologi",
      link: "https://www.gamelab.id/news/2245-mengenal-apa-itu-teknologi-digital-dan-manfaatnya-anak-smk-wajib-tahu",
    },
    {
      title: "Pemerintah Luncurkan Program Pendidikan Baru",
      date: "26 Juli 2024",
      content:
        "Pemerintah meluncurkan program pendidikan baru yang berfokus pada pengembangan keterampilan digital bagi siswa. Program ini diharapkan dapat mempersiapkan generasi muda menghadapi tantangan di era digital.",
      image:
        "https://surabaya.telkomuniversity.ac.id/wp-content/uploads/2023/05/pendidikan-tinggi-scaled-scaled.jpg",
      category: "Pendidikan",
      link: "https://surabaya.telkomuniversity.ac.id/ingin-lanjut-kuliah-kenali-tipe-jenis-jenjang-pendidikan-tinggi-di-indonesia/",
    },
    {
      title: "Keamanan Siber Menjadi Prioritas di Tahun 2024",
      date: "25 Juli 2024",
      content:
        "Keamanan siber menjadi salah satu fokus utama pemerintah di tahun 2024. Upaya ini dilakukan untuk melindungi data dan informasi penting dari serangan siber yang semakin meningkat.",
      image:
        "https://www.linknet.id/files/photos/shares/article/cyber%20security.jpg",
      category: "Keamanan",
      link: "https://www.linknet.id/article/cyber-security",
    },
    {
      title: "Pariwisata Indonesia Mulai Bangkit Kembali",
      date: "24 Juli 2024",
      content:
        "Sektor pariwisata Indonesia mulai bangkit kembali setelah terdampak pandemi. Berbagai destinasi wisata kini sudah dibuka dengan menerapkan protokol kesehatan ketat.",
      image:
        "https://unair.ac.id/wp-content/uploads/2024/01/IL-by-Barantum-CRM.jpg",
      category: "Pariwisata",
      link: "https://unair.ac.id/perjalanan-digital-mengubah-wajah-pariwisata-indonesia/",
    },
    {
      title: "Peluncuran Satelit Baru untuk Mendukung Komunikasi",
      date: "23 Juli 2024",
      content:
        "Indonesia berhasil meluncurkan satelit baru yang akan mendukung sistem komunikasi nasional. Satelit ini diharapkan dapat meningkatkan konektivitas di daerah-daerah terpencil.",
      image:
        "https://img.okezone.com/content/2023/07/13/54/2845992/4-000-satelit-starlink-milik-elon-musk-ternyata-pancarkan-radiasi-berbahaya-7v54lKnBUO.jpg",
      category: "Teknologi",
      link: "https://techno.okezone.com/read/2023/07/13/54/2845992/4-satelit-starlink-milik-elon-musk-ternyata-pancarkan-radiasi-berbahaya?page=all",
    },
    {
      title: "Olahraga Membantu Menjaga Kesehatan Mental",
      date: "22 Juli 2024",
      content:
        "Penelitian terbaru menunjukkan bahwa berolahraga secara rutin dapat membantu menjaga kesehatan mental. Banyak orang merasa lebih bahagia dan lebih sedikit stres setelah berolahraga.",
      image:
        "https://umsu.ac.id/health/wp-content/uploads/2024/03/badan-tetap-ideal-lakukan-olahraga-ini-sebelum-sahur-dan-sebelum-buka-puasa.jpg",
      category: "Kesehatan",
      link: "https://umsu.ac.id/health/badan-tetap-ideal-lakukan-olahraga-ini-sebelum-sahur-dan-sebelum-buka-puasa/",
    },
    {
      title: "Festival Seni Budaya Akan Digelar Kembali",
      date: "21 Juli 2024",
      content:
        "Festival seni dan budaya tahunan akan digelar kembali setelah sempat terhenti akibat pandemi. Festival ini diharapkan dapat mempromosikan kekayaan budaya lokal dan menarik wisatawan.",
      image:
        "https://imgx.sonora.id/crop/0x0:0x0/x/photo/2023/09/05/keragaman-budaya-di-indonesiajp-20230905100041.jpg",
      category: "Budaya",
      link: "https://www.sonora.id/read/423883241/8-keragaman-budaya-indonesia-materi-ppkn-kelas-vii-kurikulum-merdeka",
    },
    {
      title: "Pengembangan Infrastruktur di Daerah Terpencil",
      date: "20 Juli 2024",
      content:
        "Pemerintah terus berupaya mengembangkan infrastruktur di daerah-daerah terpencil untuk meningkatkan aksesibilitas dan perekonomian lokal. Proyek ini termasuk pembangunan jalan dan jembatan baru.",
      image:
        "https://teknoscaff.com/wp-content/uploads/2024/01/17.-Proyek-Pembangunan-Infrastruktur-Kota-Masa-Depan-Teknoscaff-2.jpg",
      category: "Infrastruktur",
      link: "https://teknoscaff.com/articles/proyek-pembangunan-infrastruktur-kota-masa-depan/",
    },
    {
      title: "Kemajuan Riset Energi Terbarukan di Indonesia",
      date: "19 Juli 2024",
      content:
        "Riset mengenai energi terbarukan di Indonesia menunjukkan kemajuan yang signifikan. Beberapa proyek pembangkit listrik tenaga surya dan angin telah berhasil diimplementasikan.",
      image:
        "https://coaction.id/wp-content/uploads/2020/10/kebijakan-energi-kedudukan-et.jpg",
      category: "Energi",
      link: "https://coaction.id/perkembangan-kebijakan-energi-dan-kedudukan-energi-terbarukan-di-indonesia-saat-ini/",
    },
    {
      title: "Program Kesejahteraan Sosial Baru Diluncurkan",
      date: "18 Juli 2024",
      content:
        "Pemerintah meluncurkan program kesejahteraan sosial baru untuk membantu masyarakat kurang mampu. Program ini mencakup bantuan tunai dan pelatihan keterampilan.",
      image:
        "https://cdn1-production-images-kly.akamaized.net/uPt67v8eyjpLokli9JK3kf6FT4w=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4459063/original/047628000_1686264337-5235.jpg",
      category: "Sosial",
      link: "https://www.bola.com/ragam/read/5314442/apa-itu-status-sosial-ketahui-macam-peran-dan-faktor-penentunya",
    },
    {
      title: "Pelestarian Hutan Mangrove di Pesisir",
      date: "17 Juli 2024",
      content:
        "Inisiatif pelestarian hutan mangrove di pesisir terus digalakkan untuk melindungi ekosistem pesisir dan mencegah abrasi. Program ini melibatkan masyarakat lokal dalam penanaman mangrove.",
      image:
        "https://geotimes.id/wp-content/uploads/2023/02/unileveridn1515427473367084043315282927617918473438992nac134a56d4133a2ddbbf1ce3f163ec9f167868239b3368a3289e6f8afb779612600x400.jpg",
      category: "Lingkungan",
      link: "https://geotimes.id/opini/hai-generasi-masa-depan-mari-menjaga-lingkungan/ ",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <Header
        title="Berita viral tahun ini"
        subtitle="Berita terkini yang membahas berbagai topik"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dataNews.map((news, index) => (
          <Card
            key={index}
            title={news.title}
            date={news.date}
            content={news.content}
            image={news.image}
            category={news.category}
            link={news.link}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
