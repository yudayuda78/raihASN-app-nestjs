import { DashboardPages } from "~/pages/DashboardPages";
import { ChakraProvider } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <ChakraProvider>
      <DashboardPages />
    </ChakraProvider>
  );
}
