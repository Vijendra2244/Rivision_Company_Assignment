import React from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Slider from "../components/slider/Slider";
import Carousel from "../components/carousel/Carousel";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Slider />
      <Carousel />
    </div>
  );
}

export default Home;
