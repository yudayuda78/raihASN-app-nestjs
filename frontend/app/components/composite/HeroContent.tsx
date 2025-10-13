import { Button } from "../ui/Button";

export function HeroContent() {
    return (
    <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-10 min-h-screen">
      {/* Bagian Kiri - Teks */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Raih Mimpimu Jadi ASN Bersama{" "}
          <span className="text-[#5c40c2]">RaihASN</span>
        </h1>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Platform persiapan ASN paling lengkap — latihan soal, tryout, dan
          bimbingan belajar interaktif yang bantu kamu lolos seleksi CASN dengan
          percaya diri.
        </p>

        <Button>Mulai Sekarang</Button>
      </div>

      {/* Bagian Kanan - Gambar dengan bingkai biru */}
      <div className="md:w-1/2 relative flex justify-center">
        {/* Bingkai biru */}
        <div className="absolute top-4 left-4 w-[90%] h-[90%] bg-[#07aced] rounded-2xl -z-10"></div>

        {/* Gambar hero */}
        {/* <img
          src="/hero.png"
          alt="Hero RaihASN"
          className="rounded-2xl shadow-lg w-full max-w-md md:max-w-lg"
        /> */}
      </div>
    </section>
  );
}