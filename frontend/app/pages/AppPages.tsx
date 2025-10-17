import { NavbarApp } from "~/components/layout/NavbarApp";
import { CarouselContent } from "~/components/composite/CarouselContent";
import { MenuContent } from "~/components/composite/MenuContent";
import { Package, BookOpen, Target, Gift, GraduationCap, Star } from "lucide-react";

export function AppPages() {
 const menus = [
    { name: "Beli Paket", icon: <Package className="w-7 h-7" />, link: "/paket" },
    { name: "Materi", icon: <BookOpen className="w-7 h-7" />, link: "/materi" },
    { name: "Tryout", icon: <Target className="w-7 h-7" />, link: "/tryout" },
    { name: "Tryout Gratis", icon: <Gift className="w-7 h-7" />, link: "/tryout-gratis" },
    { name: "Bimbingan Belajar", icon: <GraduationCap className="w-7 h-7" />, link: "/bimbel" },
    { name: "Bonus", icon: <Star className="w-7 h-7" />, link: "/bonus" },
  ];

  const pengaturan = [
    { name: "Pengaturan", icon: <Package className="w-7 h-7" />, link: "/pengaturan" },
  ];

  return (
    <div className="bg-white">
      <NavbarApp />
      <CarouselContent />
      <MenuContent title="Aplikasi" items={menus} />
      <MenuContent title="Pengaturan" items={pengaturan} />
    </div>
  );
}
