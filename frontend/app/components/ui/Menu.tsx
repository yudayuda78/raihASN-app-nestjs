import { Link } from "react-router";

type MenuItem = {
  name: string;
  icon: React.ReactNode;
  link: string;
};

type MenuProps = {
  items: MenuItem[];
};

export function Menu({ items }: MenuProps) {
  return (
    <>
      {items.map((menu, index) => (
        <Link
          key={index}
          to={menu.link}
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
        </Link>
      ))}
    </>
  );
}
