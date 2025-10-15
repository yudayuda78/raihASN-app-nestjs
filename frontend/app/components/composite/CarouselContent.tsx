import { useState, useEffect } from "react";

export function CarouselContent() {
  const slides = [
    {
      id: 1,
      title: "Belajar Lebih Efektif",
      image: "https://source.unsplash.com/800x400/?education,student",
    },
    {
      id: 2,
      title: "Tingkatkan Skill Digitalmu",
      image: "https://source.unsplash.com/800x400/?coding,web",
    },
    {
      id: 3,
      title: "Capai Targetmu Bersama Kami",
      image: "https://source.unsplash.com/800x400/?teamwork,success",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto ganti slide tiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-4 mb-4 rounded-2xl shadow-md bg-amber-300 p-3">
      {/* Bungkus gambar + overlay di dalam elemen relative */}
      <div className="relative rounded-xl overflow-hidden">
        <img
          src={slides[current].image}
          alt={slides[current].title}
          className="w-full h-64 object-cover transition-all duration-700 ease-in-out"
        />

        {/* Overlay teks */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-2xl font-semibold">
          {slides[current].title}
        </div>
      </div>

      {/* Indikator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-white scale-110" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
