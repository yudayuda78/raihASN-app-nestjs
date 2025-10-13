import { useState } from "react";
import { PriceCard } from "../ui/PriceCard";

type PriceCardData = {
  title: string;
  price: string;
  features: string[];
};

type PriceCategory = "tryout" | "cpns" | "pppk";

export function PriceList() {
  const [activeTab, setActiveTab] = useState<PriceCategory>("tryout");

  const priceData: Record<PriceCategory, PriceCardData[]> = {
    tryout: [
      {
        title: "Tryout Gratis",
        price: "Rp 199.000",
        features: [
          "Akses materi belajar",
          "Latihan soal harian",
          "Tryout bulanan",
          "Grup diskusi",
        ],
      },
      {
        title: "Tryout Premium",
        price: "Rp 399.000",
        features: [
          "Semua fitur Tryout Gratis",
          "Bimbingan belajar interaktif",
          "Konsultasi dengan mentor",
          "E-book materi lengkap",
        ],
      },
      {
        title: "Tryout Pro",
        price: "Rp 699.000",
        features: [
          "Semua fitur Tryout Premium",
          "Akses ke webinar eksklusif",
          "Simulasi wawancara kerja",
          "Sertifikat penyelesaian",
        ],
      },
    ],
    cpns: [
      {
        title: "Tryout CPNS",
        price: "Rp 199.000",
        features: [
          "Akses materi belajar",
          "Latihan soal harian",
          "Tryout bulanan",
          "Grup diskusi",
        ],
      },
      {
        title: "Tryout CPNS Premium",
        price: "Rp 399.000",
        features: [
          "Semua fitur Tryout Gratis",
          "Bimbingan belajar interaktif",
          "Konsultasi dengan mentor",
          "E-book materi lengkap",
        ],
      },
      {
        title: "Tryout CPNS Pro",
        price: "Rp 699.000",
        features: [
          "Semua fitur Tryout Premium",
          "Akses ke webinar eksklusif",
          "Simulasi wawancara kerja",
          "Sertifikat penyelesaian",
        ],
      },
    ],
    pppk: [
      {
        title: "Tryout PPPK",
        price: "Rp 249.000",
        features: [
          "Akses materi PPPK",
          "Latihan soal SKD & Teknis",
          "Tryout bulanan",
          "Forum diskusi",
        ],
      },
      {
        title: "Tryout PPPK Premium",
        price: "Rp 499.000",
        features: [
          "Semua fitur PPPK dasar",
          "Kelas bimbingan live",
          "Konsultasi karier",
          "E-book materi lengkap",
        ],
      },
      {
        title: "Tryout PPPK Pro",
        price: "Rp 799.000",
        features: [
          "Semua fitur PPPK Premium",
          "Simulasi seleksi PPPK",
          "Webinar eksklusif",
          "Sertifikat penyelesaian",
        ],
      },
    ],
  };

  return (
    <div className="bg-[#5c40c2] py-10">
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-8">Paket Belajar</h2>

        {/* Tombol Tab */}
        <div className="flex justify-center gap-4 mb-10">
          {(["tryout", "cpns", "pppk"] as PriceCategory[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg font-semibold capitalize transition ${
                activeTab === tab
                  ? "bg-[#8fde62] text-black"
                  : "bg-white/20 hover:bg-white/30"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Card Harga */}
        <div className="flex flex-col md:flex-row justify-center items-center  gap-6">
          {priceData[activeTab].map((card, index) => (
            <PriceCard
              key={index}
              title={card.title}
              price={card.price}
              features={card.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
