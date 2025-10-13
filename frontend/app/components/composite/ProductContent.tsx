export function ProductContent() {
  const products = [
    {
      title: "Materi Pembelajaran",
      desc: "Akses ratusan modul dan video pembelajaran yang dirancang sesuai kisi-kisi terbaru seleksi ASN.",
      icon: "📘",
    },
    {
      title: "Tryout Berkualitas",
      desc: "Simulasi ujian dengan tingkat kesulitan dan format soal yang menyerupai seleksi CASN sesungguhnya.",
      icon: "🧩",
    },
    {
      title: "Event Tryout",
      desc: "Ikuti event tryout nasional dan bandingkan hasilmu dengan peserta dari seluruh Indonesia.",
      icon: "🏆",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 text-center">
      {/* Judul Section */}
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
        Apa yang Kami <span className="text-[#5c40c2]">Sediakan</span>
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
        RaihASN menyediakan berbagai fitur belajar dan latihan agar kamu siap menghadapi
        seleksi ASN dengan percaya diri.
      </p>

      {/* Daftar Produk */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
