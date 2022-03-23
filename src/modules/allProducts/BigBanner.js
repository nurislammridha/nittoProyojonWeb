import React from "react";
import babyl from "../../asset/image/cat_img/baby_care/bb.jpg";
import biscuitl from "../../asset/image/cat_img/biscuit_&_toast/bb.jpg";
import chocolatel from "../../asset/image/cat_img/chocolate_&_weafer/bb.jpg";
import cleaningl from "../../asset/image/cat_img/cleaning_&_supplies/bb.jpg";
import dailyl from "../../asset/image/cat_img/daily_needs/bb.jpg";
import electronicsl from "../../asset/image/cat_img/electronics_products/bb.jpg";
import healthl from "../../asset/image/cat_img/health_&_nutrition/bb.jpg";
import homel from "../../asset/image/cat_img/home_&_kitchen/bb.png";
import masalal from "../../asset/image/cat_img/masala_&_cooking/bb.jpg";
import oill from "../../asset/image/cat_img/oil/bb.jpg";
import schooll from "../../asset/image/cat_img/school_&_office/bb.jpg";
import shavingl from "../../asset/image/cat_img/shaving_&_selun/bb.jpg";
import skinl from "../../asset/image/cat_img/skin_care/bb.jpg";
import soapl from "../../asset/image/cat_img/soap/bb.jpg";
import tiffinl from "../../asset/image/cat_img/tiffin_&_snacks/bb.jpg";
import toothl from "../../asset/image/cat_img/tooth_care/bb.jpg";
import ts1 from "../../asset/image/largeSlider/banner1.jpg";
const BigBanner = ({ catName }) => {
  switch (catName) {
    case "Baby Care":
      return <img src={babyl} />;
      break;
    case "Biscuit & Toast":
      return <img src={biscuitl} />;
      break;
    case "Chocolate & Weafer":
      return <img src={chocolatel} />;
      break;
    case "Cleaning & Supplies":
      return <img src={cleaningl} />;
      break;
    case "Daily Needs":
      return <img src={dailyl} />;
      break;
    case "Electronics Products":
      return <img src={electronicsl} />;
      break;
    case "Health & Nutrition":
      return <img src={healthl} />;
      break;
    case "Oil":
      return <img src={oill} />;
      break;
    case "Masala & Cooking":
      return <img src={masalal} />;
      break;
    case "Home & Kitchen":
      return <img src={homel} />;
      break;
    case "School & Office":
      return <img src={schooll} />;
      break;
    case "Shaving & Selun":
      return <img src={shavingl} />;
      break;
    case "Skin Care":
      return <img src={skinl} />;
      break;
    case "Soap":
      return <img src={soapl} />;
      break;
    case "Tiffin & Snacks":
      return <img src={tiffinl} />;
      break;
    case "Tooth Care":
      return <img src={toothl} />;
      break;
    default:
      return <img src={ts1} />;
      break;
  }
  //   return <div>CatLogo</div>;
};

export default BigBanner;
