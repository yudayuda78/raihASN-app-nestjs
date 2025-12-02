import { SidebarDashboard } from "~/components/composite/SidebarDashboard";
import { ChakraProvider } from "@chakra-ui/react";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="flex">
      <ChakraProvider>
        <SidebarDashboard />
      </ChakraProvider>

      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
}
