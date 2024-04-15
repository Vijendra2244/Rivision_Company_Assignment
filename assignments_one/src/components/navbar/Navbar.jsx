import React from "react";
import logo from "../../assets/images/fliplogo.svg";
import { Box } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import profile from "../../assets/images/profile.svg";
import { FaAngleDown } from "react-icons/fa";
import cart from "../../assets/images/cart.svg";
import becomeSeller from "../../assets/images/gift_box.svg";
import styles from "./Navbar.module.css";
import dots from "../../assets/images/3dots.svg";
import DrawerExample from "./Drawer";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import notification from "../../assets/images/notification.svg";
import advertise from "../../assets/images/trade.svg";
import download from "../../assets/images/download.svg";
import music from "../../assets/images/music.svg";

function Navbar() {
  return (
    <div className={styles.main}>
      <Box>
        <img src={logo} />
      </Box>
      <div className={styles.inputSearch}>
        <CiSearch className={styles.search} />
        <input
          className={styles.inpt}
          type="text"
          placeholder="Search for Products , Brands and More"
        />
      </div>
      <Box
        w={"30%"}
        display={{ base: "none", lg: "flex" }}
        gap={"1rem"}
        justifyContent={"space-between"}
      >
        <Box display={"flex"} alignItems={"center"}>
          <Menu>
            <MenuButton colorScheme="white" as={Button}>
              <img src={profile} />
            </MenuButton>
            <MenuList>
              <MenuItem>My Profile</MenuItem>
              <MenuItem>Flipkart Plus Zone</MenuItem>
              <MenuItem>Order</MenuItem>
              <MenuItem>Wishlist</MenuItem>
             
            </MenuList>
          </Menu>
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
      <Box display={"flex"} alignItems={"center"}>
        <Menu>
          <MenuButton colorScheme="white" as={Button}>
            <img src={dots} />
          </MenuButton>
          <MenuList>
            <MenuItem>Notification Prefrences</MenuItem>
            <MenuItem>24 X 7 Customer Care</MenuItem>
            <MenuItem>Advertise</MenuItem>
            <MenuItem>Download App</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box display={{ base: "block", md: "block", lg: "none" }}>
        <DrawerExample />
      </Box>
    </div>
  );
}

export default Navbar;
