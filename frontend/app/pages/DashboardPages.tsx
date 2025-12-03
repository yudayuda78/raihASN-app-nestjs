import { Box } from "@chakra-ui/react";
import { Users } from "lucide-react";

export function DashboardPages() {
  return (
    <>
      <Box className="flex flex-col space-y-4 h-full">
        {/* Bagian Atas */}
        <Box className="flex space-x-4 rounded-xl">
          {/* Card Kiri */}
          <div
            className="
    bg-[#5c40c2] backdrop-blur-xl
    flex-1 h-80 rounded-2xl p-6 shadow-md
    border border-white/40
    transition-all duration-300
    hover:shadow-xl hover:-translate-y-1
    flex flex-col justify-between
  "
          >
            {/* Header */}
            <div className="flex items-center space-x-4">
              <div
                className="
        bg-blue-100 text-blue-600 
        w-14 h-14 rounded-2xl 
        flex items-center justify-center
        shadow-inner
      "
              >
                <Users className="w-7 h-7" />
              </div>

              <div>
                <h1 className="text-lg text-white font-semibold tracking-wide">
                  Total User
                </h1>
                <p className="text-sm text-white">Pengguna terdaftar</p>
              </div>
            </div>

            {/* Main Number */}
            <h1 className="text-[120px] leading-[0.9] font-extrabold text-white">
              23,937
            </h1>

            {/* Growth / Statistik */}
            <div className="flex items-center space-x-2">
              <span className="text-green-600 font-semibold">▲ 4.2%</span>
              <span className="text-white text-sm">
                lebih tinggi dari bulan lalu
              </span>
            </div>
          </div>

          {/* Kolom Kanan */}
          <div className="flex flex-col w-[22rem] space-y-4">
            <Box className="bg-fuchsia-400 h-20 rounded-xl p-4 shadow flex items-center">
              sad
            </Box>

            <Box className="bg-fuchsia-600 h-55 rounded-xl p-4 shadow flex items-center">
              das
            </Box>
          </div>
        </Box>

        {/* Bagian Bawah */}
        <Box className="flex space-x-4 w-full">
          <Box className="bg-amber-300 flex-1 h-60 rounded-xl shadow p-4">
            box1
          </Box>

          <Box className="bg-amber-300 flex-1 h-60 rounded-xl shadow p-4">
            box2
          </Box>

          <Box className="bg-amber-300 flex-1 h-60 rounded-xl shadow p-4">
            box3
          </Box>
        </Box>
      </Box>
    </>
  );
}
