import { Box, Avatar } from "@chakra-ui/react";
import { useLocation } from "react-router";

export function NavbarDashboard() {
  const { pathname } = useLocation(); // contoh: "/dashboard/materi"

  // Ambil bagian terakhir dari path
  const currentPage = pathname.split("/").filter(Boolean).pop() || "Dashboard";

  // Ubah menjadi Title Case
  const title =
    currentPage.charAt(0).toUpperCase() + currentPage.slice(1).toLowerCase();

  return (
    <Box className="w-[100%]">
      <Box className="w-full bg-gray-200 flex justify-between items-center p-4 rounded-2xl mb-6 shadow-lg">
        <div>
          <h1 className="text-xl font-bold">Dashboard Admin</h1>
          <h3 className="text-sm text-gray-600">{title}</h3>
        </div>
        <Avatar name="Kola Tioluwani" src="https://bit.ly/tioluwani-kolawole" />
      </Box>
    </Box>
  );
}
