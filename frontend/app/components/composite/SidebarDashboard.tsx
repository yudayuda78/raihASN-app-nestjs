import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  RadioGroup,
  Radio,
  Stack,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { FiHome, FiBook, FiUser, FiBookOpen, FiLogOut } from "react-icons/fi";
import { useBreakpointValue } from "@chakra-ui/react";

import React from "react";

export function SidebarDashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [placement, setPlacement] = React.useState<
    "top" | "bottom" | "left" | "right"
  >("left");

  return (
    <>
      {/* DESKTOP */}
      {!isMobile && (
        <Box className=" w-30 h-screen flex justify-center items-center">
          <div className="bg-[#5c40c2] w-20 h-[95%] rounded-3xl flex flex-col">
            <Box className="flex flex-col items-center h-full py-4">
              {/* Menu Icons */}
              <div className="flex flex-col items-center gap-8 text-2xl mt-6 text-white">
                <FiHome />
                <FiBook />
                <FiBookOpen />
                <FiUser />
              </div>
              {/* Logout di bawah (tapi tidak terlalu jauh) */}
              <div className="mt-auto pt-4 text-2xl mb-4 text-white">
                <FiLogOut />
              </div>
            </Box>
          </div>
        </Box>
      )}

      {/* MOBILE */}
      {isMobile && (
        <>
          <ChevronRightIcon onClick={onOpen} />

          <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent
              sx={{
                width: "120px !important",

                borderRadius: "lg",
              }}
              w="20px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <div className="bg-[#5c40c2] w-20 h-[95%] rounded-3xl flex flex-col">
                <DrawerBody className="flex flex-col items-center h-full py-4">
                  {/* Menu Icons */}
                  <div className="flex flex-col items-center gap-8 text-2xl mt-6 text-white">
                    <FiHome />
                    <FiBook />
                    <FiBookOpen />
                    <FiUser />
                  </div>

                  {/* Logout di bawah (tapi tidak terlalu jauh) */}
                  <div className="mt-auto pt-4 text-2xl mb-4 text-white">
                    <FiLogOut />
                  </div>
                </DrawerBody>
              </div>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </>
  );
}
