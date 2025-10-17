import { Menu } from "../ui/Menu";

type MenuItem = {
  name: string;
  icon: React.ReactNode;
  link: string;
};

type MenuContentProps = {
  title: string;
  items: MenuItem[];
};

export function MenuContent({ title, items }: MenuContentProps) {
  return (
    <div className="bg-[#5c40c2]/10 py-10">
      {/* Judul Section */}
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h1 className="text-3xl font-extrabold text-[#5c40c2] tracking-wide">
          {title}
        </h1>
        <div className="w-24 h-1 bg-[#8fde62] mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Menu */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10 text-gray-800 font-semibold">
        <Menu items={items} />
      </div>
    </div>
  );
}
