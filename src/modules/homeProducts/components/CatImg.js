import React from "react";
import babyl from "../../../asset/image/cat_img/baby_care/h.jpg";
import biscuitl from "../../../asset/image/cat_img/biscuit_&_toast/h.jpg";
import chocolatel from "../../../asset/image/cat_img/chocolate_&_weafer/h.jpg";
import cleaningl from "../../../asset/image/cat_img/cleaning_&_supplies/h.jpg";
import dailyl from "../../../asset/image/cat_img/daily_needs/h.png";
import electronicsl from "../../../asset/image/cat_img/electronics_products/h.jpg";
import healthl from "../../../asset/image/cat_img/health_&_nutrition/h.jpg";
import homel from "../../../asset/image/cat_img/home_&_kitchen/h.jpg";
import masalal from "../../../asset/image/cat_img/masala_&_cooking/h.jpg";
import oill from "../../../asset/image/cat_img/oil/h.jpg";
import schooll from "../../../asset/image/cat_img/school_&_office/h.jpg";
import shavingl from "../../../asset/image/cat_img/shaving_&_selun/h.jpg";
import skinl from "../../../asset/image/cat_img/skin_care/h.jpg";
import soapl from "../../../asset/image/cat_img/soap/h.jpg";
import tiffinl from "../../../asset/image/cat_img/tiffin_&_snacks/h.png";
import toothl from "../../../asset/image/cat_img/tooth_care/h.jpg";
import categoryImage from "../../../asset/image/product/categoryImage.jpg";
const CatImg = ({ catName }) => {
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
      return <img src={categoryImage} />;
      break;
  }
  //   return <div>CatLogo</div>;
};

export default CatImg;
