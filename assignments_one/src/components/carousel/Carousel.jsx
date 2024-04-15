import React, { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import image1 from "../../assets/images/phone_1.jpeg";
import image2 from "../../assets/images/phone_2.jpeg";
import image3 from "../../assets/images/phone_3.jpeg";
import image4 from "../../assets/images/phone_4.jpeg";
import image5 from "../../assets/images/phone_5.jpeg";
import image6 from "../../assets/images/phone_6.jpeg";
import image7 from "../../assets/images/phone_7.jpeg";
import image8 from "../../assets/images/phone_8.jpeg";
import image9 from "../../assets/images/phone_9.png";

function Carousel() {
  const [imageIndex, setImageIndex] = useState(0);
  const [slide, setSlide] = useState(false);
  const mainDivRef = useRef();
  const carouselImages = [
    { imageUrl: image1, title: "Moto edge 40 neo", inc: "Incl of offers" },
    { imageUrl: image2, title: "Vivo 12 pro 5g", inc: "Incl of offers" },
    { imageUrl: image3, title: "Poco m6 pro", inc: "Incl of offers" },
    { imageUrl: image4, title: "Redmi 12 5g", inc: "Incl of offers" },
    { imageUrl: image5, title: "Poco  x6 neo 5g", inc: "Incl of offers" },
    { imageUrl: image6, title: "Poco m6 5g", inc: "Incl of offers" },
    { imageUrl: image7, title: "Poco x6 pro", inc: "Incl of offers" },
    { imageUrl: image8, title: "iPhone", inc: "Incl of offers" },
    { imageUrl: image1, title: "Moto edge 40 neo", inc: "Incl of offers" },
  ];

  const slideLeft = () => {
    const current = mainDivRef.current;
    current.scrollBy({
      left: 1150,
      behavior: "smooth",
    });
  };
  const slideRight = () => {
    const current = mainDivRef.current;
    current.scrollBy({
      left: -1150,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    slideLeft();
    slideRight();
  });
  return (
    <div className={styles.m}>
      <div className={styles.mainContainerOfSlider}>
        <p className={styles.carouselHeading}>Best Deals on Smartphones</p>
        <div className={styles.mainContainer} ref={mainDivRef}>
          {carouselImages.map((imageObj, index) => (
            <div className={styles.carouselImageContainer} key={index}>
              <img
                className={styles.carouselImage}
                src={imageObj.imageUrl}
                alt="carousel"
              />
              <p>{imageObj.title}</p>
            </div>
          ))}
        </div>
        <button className={styles.leftButton} onClick={slideRight}>
          <RxChevronLeft />
        </button>
        <button className={styles.rightButton} onClick={slideLeft}>
          <RxChevronRight />
        </button>
      </div>
      <div className={styles.imag}>
        <img  src={image9} />
      </div>
    </div>
  );
}
export default Carousel;
