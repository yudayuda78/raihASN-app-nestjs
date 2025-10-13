export function Footer() {
  return (
    <footer className="bg-[#3b2d8c] text-gray-100 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo & Deskripsi */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="text-xl font-bold text-[#07aced]">RaihASN</span>
            </div>
            <p className="mt-2 text-sm text-gray-300 max-w-sm">
              Platform persiapan ASN terbaik. Belajar, latihan, dan raih impianmu menjadi ASN bersama kami!
            </p>
          </div>

          {/* Menu Navigasi */}
          <div className="flex space-x-8 text-sm font-medium">
            <a href="#" className="hover:text-[#07aced] transition">Paket</a>
            <a href="#" className="hover:text-[#07aced] transition">Tryout</a>
            <a href="#" className="hover:text-[#07aced] transition">Blog</a>
          </div>
        </div>

        {/* Garis & Hak Cipta */}
        <div className="mt-8 border-t border-[#4c3bb2] pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} RaihASN. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  );
}
