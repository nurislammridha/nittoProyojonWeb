import React from "react";
import babyl from "../../asset/image/cat_img/baby_care/l.jpg";
import biscuitl from "../../asset/image/cat_img/biscuit_&_toast/l.jpg";
import chocolatel from "../../asset/image/cat_img/chocolate_&_weafer/l.jpg";
import cleaningl from "../../asset/image/cat_img/cleaning_&_supplies/l.jpg";
import dailyl from "../../asset/image/cat_img/daily_needs/l.jpg";
import electronicsl from "../../asset/image/cat_img/electronics_products/l.jpg";
import healthl from "../../asset/image/cat_img/health_&_nutrition/l.jpg";
import homel from "../../asset/image/cat_img/home_&_kitchen/l.jpg";
import masalal from "../../asset/image/cat_img/masala_&_cooking/l.jpg";
import oill from "../../asset/image/cat_img/oil/l.jpg";
import schooll from "../../asset/image/cat_img/school_&_office/l.jpg";
import shavingl from "../../asset/image/cat_img/shaving_&_selun/l.jpg";
import skinl from "../../asset/image/cat_img/skin_care/l.jpg";
import soapl from "../../asset/image/cat_img/soap/l.jpg";
import tiffinl from "../../asset/image/cat_img/tiffin_&_snacks/l.png";
import toothl from "../../asset/image/cat_img/tooth_care/l.jpg";
import categoryIcon from "../../asset/image/icon/categoryIcon.png";
const CatLogo = ({ catName }) => {
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
      return <img src={categoryIcon} />;
      break;
  }
  //   return <div>CatLogo</div>;
};

export default CatLogo;
