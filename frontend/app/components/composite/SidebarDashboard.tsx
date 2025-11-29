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
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { FiHome, FiBook, FiUser, FiBookOpen, FiLogOut } from "react-icons/fi";

import React from "react";

export function SidebarDashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState<
    "top" | "bottom" | "left" | "right"
  >("left");

  return (
    <>
      <ChevronRightIcon onClick={onOpen} />

      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent
          sx={{
            width: "120px !important",
            bg: "green.300",
            borderRadius: "lg",
          }}
          w="20px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <div className="bg-red-300 w-20 h-[95%] rounded-3xl flex flex-col">
            <DrawerBody className="flex flex-col items-center h-full py-4">
              {/* Menu Icons */}
              <div className="flex flex-col items-center gap-8 text-2xl mt-6">
                <FiHome />
                <FiBook />
                <FiBookOpen />
                <FiUser />
              </div>

              {/* Logout di bawah (tapi tidak terlalu jauh) */}
              <div className="mt-auto pt-4 text-2xl mb-4">
                <FiLogOut />
              </div>
            </DrawerBody>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
