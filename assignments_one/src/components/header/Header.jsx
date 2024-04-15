import React from "react";
import styles from "./Header.module.css";
import grocery from "../../assets/images/surf_excel.webp";
import iphone from "../../assets/images/iPhone.webp";
import humens from "../../assets/images/humens.webp";
import laptop from "../../assets/images/laptops.webp";
import furniture from "../../assets/images/furninture.webp";
import tv from "../../assets/images/tv.webp";
import airplane from "../../assets/images/airplane.webp";
import kids from "../../assets/images/kids.webp";
import bikes from "../../assets/images/bikes.webp";
import { FaAngleDown } from "react-icons/fa";


function Header() {
  let images = [
    { image: grocery, title: "Grocery" },
    { image: iphone, title: "Mobiles" },
    { image: humens, title: "Fashion⌄" },
    { image: laptop, title: "Electronics⌄" },
    { image: tv, title: "Appliances" },
    { image: furniture, title: "Home & Furniture⌄" },
    { image: airplane, title: "Travel" },
    { image: kids, title: "Toys⌄" },
    { image: bikes, title: "two Wheeles" },
  ];
  return (
    <div className={styles.main}>
      {images.map((item, i) => (
        <div key={i}>
          <img src={item.image} alt="" />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Header;
