import { useState, useRef, useEffect } from "react";
import { Bell, User, LogOut, Settings } from "lucide-react";

export function NavbarApp() {
  const [showNotif, setShowNotif] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const notifRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  // Tutup dropdown kalau klik di luar
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        notifRef.current &&
        !notifRef.current.contains(e.target as Node) &&
        userRef.current &&
        !userRef.current.contains(e.target as Node)
      ) {
        setShowNotif(false);
        setShowUserMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-1.5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/raihlogo.png"
            alt="Raihasn Logo"
            className="w-8 h-8 object-contain"
          />
          <span className="font-semibold text-gray-700">RaihASN</span>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          {/* Notifikasi */}
          <div className="relative" ref={notifRef}>
            <button
              className="relative"
              onClick={() => {
                setShowNotif(!showNotif);
                setShowUserMenu(false);
              }}
            >
              <Bell className="w-6 h-6 text-gray-700 hover:text-indigo-600" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {showNotif && (
              <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 shadow-lg rounded-lg p-3 z-50">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Notifikasi</h3>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-600 hover:bg-gray-50 p-2 rounded">
                    📢 Pengumuman seleksi tahap 1 telah dibuka
                  </li>
                  <li className="text-sm text-gray-600 hover:bg-gray-50 p-2 rounded">
                    🎯 Hasil verifikasi dokumen sudah tersedia
                  </li>
                  <li className="text-sm text-gray-600 hover:bg-gray-50 p-2 rounded">
                    ⏰ Jangan lupa melengkapi data profil
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Avatar */}
          <div className="relative" ref={userRef}>
            <button
              onClick={() => {
                setShowUserMenu(!showUserMenu);
                setShowNotif(false);
              }}
              className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
            >
              <User className="w-5 h-5 text-gray-700" />
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg py-2 z-50">
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  <Settings className="inline w-4 h-4 mr-2" />
                  Pengaturan
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  <LogOut className="inline w-4 h-4 mr-2" />
                  Keluar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
