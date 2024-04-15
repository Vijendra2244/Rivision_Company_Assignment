import React from "react";
import { Box } from "@chakra-ui/react";
import profile from "../../assets/images/profile.svg";
import { FaAngleDown } from "react-icons/fa";
import cart from "../../assets/images/cart.svg";
import becomeSeller from "../../assets/images/gift_box.svg";
import styles from "./Navbar.module.css";
import { IoMdMenu } from "react-icons/io";

import { Button, Input } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} color={"black"} colorScheme="white" onClick={onOpen}>
        <IoMdMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody display={"flex"}>
            <Box
              w={"50%"}
              display={"flex"}
              gap={"1rem"}
              flexDirection={"column"}
            >
              <Box display={"flex"} alignItems={"center"}>
                <img src={profile} />
                <p className={styles.profile}>
                  Login
                  <FaAngleDown />
                </p>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <img src={cart} />
                <p>Cart</p>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <img src={becomeSeller} />
                <p>Become a Seller</p>
              </Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default DrawerExample;
