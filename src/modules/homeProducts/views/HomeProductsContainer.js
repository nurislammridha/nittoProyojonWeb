import React from "react";
import Categories from "../../categories/Categories";
import HeroCarousel from "../../heroCarousel/HeroCarousel";
import HomeProducts from "../components/HomeProducts";

const HomeProductsContainer = () => {
  return (
    <>
      <div className="body">
        <div className="cat_banner">
          <Categories />
          <HeroCarousel />
        </div>
        <div className="border_top">
          <p></p>
        </div>
        <HomeProducts />
      </div>
    </>
  );
};

export default HomeProductsContainer;
