import { Button } from "../ui/Button";

export function ApplyContent() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 flex flex-col items-center text-center space-y-8">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
        Ingin Mengajar <span className="text-[#5c40c2]">Bersama Kami?</span>
      </h2>

      <p className="text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed">
        Bergabunglah dengan tim pengajar terbaik kami dan bantu ribuan calon ASN
        mempersiapkan diri untuk meraih impian mereka.
      </p>

      <Button className="bg-[#5c40c2] hover:bg-[#4b31a8] text-white text-lg px-8 py-3 rounded-2xl transition duration-300 shadow-md hover:shadow-lg">
        Daftar Sekarang
      </Button>
    </section>
  );
}
