import { Package, BookOpen, Target, Gift, GraduationCap, Star } from "lucide-react";

export function MenuContent() {
  const menus = [
    { name: "Beli Paket", icon: <Package className="w-7 h-7" /> },
    { name: "Materi", icon: <BookOpen className="w-7 h-7" /> },
    { name: "Tryout", icon: <Target className="w-7 h-7" /> },
    { name: "Tryout Gratis", icon: <Gift className="w-7 h-7" /> },
    { name: "Bimbingan Belajar", icon: <GraduationCap className="w-7 h-7" /> },
    { name: "Bonus", icon: <Star className="w-7 h-7" /> },
  ];

  return (
    <div className="bg-[#5c40c2]/10 py-8">
      <nav className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10 text-gray-800 font-semibold">
        {menus.map((menu, index) => (
          <button
            key={index}
            className="flex flex-col items-center justify-center gap-3 w-32 h-28 
                       bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300
                       hover:-translate-y-1 border border-transparent hover:border-[#8fde62]"
          >
            <div
              className="p-3 rounded-xl"
              style={{
                backgroundColor: "#5c40c2",
                color: "white",
              }}
            >
              {menu.icon}
            </div>
            <span
              className="text-base font-semibold"
              style={{
                color: "#5c40c2",
              }}
            >
              {menu.name}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
}
