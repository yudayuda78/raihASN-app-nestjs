import { PriceCard } from "../ui/PriceCard";

type PriceCardData = {
  title: string;
  price: string;
  features: string[];
};

type PriceCategory = "tryout" | "cpns" | "pppk";

export default function PaketApp() {
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
    <div className="bg-white top-0 left-0 w-full z-50 min-h-screen flex flex-col py-10">
      <div className="max-w-7xl mx-auto px-6 flex-1">
        <PriceCard
          title={priceData.tryout[0].title}
          price={priceData.tryout[0].price}
          features={priceData.tryout[0].features}
        />
      </div>
    </div>
  );
}
