export function StrengthContent() {
  const strengths = [
    {
      title: "Desain Profesional",
      desc: "Tampilan modern, responsif, dan sesuai karakter brand Anda.",
      icon: "🎨",
    },
    {
      title: "Performa Cepat",
      desc: "Aplikasi dioptimalkan agar pengalaman pengguna tetap lancar.",
      icon: "⚡",
    },
    {
      title: "Keamanan Terjamin",
      desc: "Dibangun dengan praktik terbaik untuk melindungi data Anda.",
      icon: "🔒",
    },
    {
      title: "Dukungan Penuh",
      desc: "Tim kami siap membantu dari perencanaan hingga pasca peluncuran.",
      icon: "💬",
    },
  ];

  return (
    <section className="bg-[#5c40c2] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold">
          Mengapa Memilih <span className="text-[#8fde62]">Kami?</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
          Kami tidak hanya membuat aplikasi, tapi menghadirkan solusi digital
          yang cepat, aman, dan siap membantu bisnis Anda berkembang lebih cepat.
        </p>

        {/* Daftar keunggulan */}
        <ul className="mt-10 flex flex-col items-start md:items-center gap-6">
          {strengths.map((item, index) => (
            <li
              key={index}
              className="group flex items-start md:items-center gap-4 bg-white/10 rounded-xl p-4 w-full md:w-3/4
                         hover:bg-[#8fde62] transition-all duration-300 ease-in-out cursor-pointer"
            >
              <span className="text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:text-black">
                {item.icon}
              </span>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white group-hover:text-black transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm mt-1 group-hover:text-black transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
