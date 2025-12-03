import { Box } from "@chakra-ui/react";

export function UpcomingDashboard() {
  return (
    <Box className="bg-[#5c40c2] h-[95vh] w-64 p-4 rounded-2xl text-white shadow-xl">
      <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">
        Upcoming Events
      </h3>

      <div className="space-y-4">
        <div className="bg-[#6f56d6] p-3 rounded-xl hover:bg-[#7e63e0] transition">
          <h5 className="font-bold text-sm">Event Tryout 20 Desember</h5>
          <p className="text-xs opacity-90">Tgl 25 Desember 2025</p>
        </div>

        <div className="bg-[#6f56d6] p-3 rounded-xl hover:bg-[#7e63e0] transition">
          <h5 className="font-bold text-sm">Event Tryout 23 Desember</h5>
          <p className="text-xs opacity-90">Tgl 40 Desember 2025</p>
        </div>
      </div>
    </Box>
  );
}
