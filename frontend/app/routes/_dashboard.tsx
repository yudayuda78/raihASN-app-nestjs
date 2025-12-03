import { SidebarDashboard } from "~/components/composite/SidebarDashboard";
import { ChakraProvider } from "@chakra-ui/react";
import { Outlet } from "react-router";
import { NavbarDashboard } from "~/components/composite/NavbarDashboard";
import { UpcomingDashboard } from "~/components/composite/UpcomingDashboard";

export default function Layout() {
  return (
    <div className="flex">
      <ChakraProvider>
        <SidebarDashboard />
        <div className="flex w-screen  items-center">
          <div className="w-[80%] mr-4 h-[95vh]">
            <NavbarDashboard />
            <div className=" h-[85%]">
              <Outlet />
            </div>
          </div>
          <UpcomingDashboard />
        </div>
      </ChakraProvider>
    </div>
  );
}
