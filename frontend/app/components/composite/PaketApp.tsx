import { PriceCard } from "../ui/PriceCard";

type Paket = {
  title: string;
  price: string;
  features: string[];
}[];

export default function PaketApp() {
  const paket: Paket = [
    {
      title: "Tryout Premium CPNS",
      price: "Rp 399.000",
      features: [
        "Semua fitur Tryout Gratis",
        "Bimbingan belajar interaktif",
        "Konsultasi dengan mentor",
        "E-book materi lengkap",
      ],
    },
    {
      title: "Bimbingan CPNS",
      price: "Rp 799.000",
      features: [
        "Akses materi belajar lengkap",
        "Kelas bimbingan live",
        "Konsultasi karier",
        "Simulasi seleksi CPNS",
      ],
    },
    {
      title: "Tryout Premium PPPK",
      price: "Rp 399.000",
      features: [
        "Semua fitur Tryout Gratis",
        "Bimbingan belajar interaktif",
        "Konsultasi dengan mentor",
        "E-book materi lengkap",
      ],
    },
    {
      title: "Bimbingan PPPK",
      price: "Rp 799.000",
      features: [
        "Akses materi belajar lengkap",
        "Kelas bimbingan live",
        "Konsultasi karier",
        "Simulasi seleksi CPNS",
      ],
    },
  ];

  return (
    <div className="bg-white top-0 left-0 w-full z-50 min-h-screen flex flex-col py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {paket.map((item, index) => (
            <div key={index} className="w-full">
              <PriceCard
                title={item.title}
                price={item.price}
                features={item.features}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
