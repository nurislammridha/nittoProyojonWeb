import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ts2 from "../../asset/image/largeSlider/banner2.jpg";
import ts3 from "../../asset/image/largeSlider/banner4.jpg";

import {
  isCartAdded2,
  OpenCart,
} from "../homeProducts/_redux/HomeProductsAction";
import { GetProductsByCategory } from "./_redux/AllProductsAction";
import BigBanner from "./BigBanner";

const AllProducts = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const language = useSelector((state) => state.categoryInfo.language);
  const productsByCategory = useSelector(
    (state) => state.allProductsInfo.productsByCategory
  );
  const isPageLoad = useSelector((state) => state.allProductsInfo.isPageLoad);
  const afterRemoveCart = useSelector(
    (state) => state.homeProductsInfo.afterRemoveCart
  );

  const [instantCart, setInstantCart] = useState([]);
  useEffect(() => {
    dispatch(GetProductsByCategory(id));
  }, [id]);
  useEffect(() => {
    const cartList = JSON.parse(localStorage.getItem("cartList")) || [];
    setInstantCart(cartList);
  }, []);
  const handleCart = (data) => {
    const cartList = JSON.parse(localStorage.getItem("cartList")) || [];
    data.quantity = 1;
    data.quantityBn = "১";
    cartList.push(data);
    setInstantCart(cartList);
    localStorage.setItem("cartList", JSON.stringify(cartList));
    dispatch(OpenCart(true));
  };
  useEffect(() => {
    if (afterRemoveCart.length > 0) {
      setInstantCart(afterRemoveCart);
    }
  }, [afterRemoveCart]);
  return (
    <>
      <div className="all_product_page">
        <div className="add_banner">
          <div className="left">
            {/* <img src={ts1} /> */}
            {productsByCategory &&
              productsByCategory !== null &&
              productsByCategory.length > 0 && (
                <BigBanner catName={productsByCategory[0].categoryName} />
              )}
          </div>
          <div className="right">
            <div className="top">
              <img src={ts2} />
            </div>
            <div className="bottom">
              <img src={ts3} />
            </div>
          </div>
        </div>
        {isPageLoad && (
          <>
            <div class="d-flex justify-content-center  mt-5 mt-5 mt-5">
              <div class="spinner-border" role="status">
                <span class="sr-only"> </span>
              </div>
            </div>
            <div className="d-flex justify-content-center ">
              {language === "Bangla"
                ? "Please! Wait.."
                : "কিছুক্ষন অপেক্ষা করুন.."}
            </div>
          </>
        )}
        {!isPageLoad && (
          <div className="all_product">
            <div className="category_product">
              <div className="category_name">
                {productsByCategory &&
                  productsByCategory !== null &&
                  productsByCategory.length > 0 && (
                    <span>
                      {language === "Bangla"
                        ? productsByCategory[0].categoryName
                        : productsByCategory[0].categoryNameBn}
                    </span>
                  )}
              </div>
              <div className="border_top_all">
                <p></p>
              </div>
              <div className="product_parent_all">
                {productsByCategory &&
                  productsByCategory !== null &&
                  productsByCategory.length > 0 &&
                  productsByCategory.map((item, index) => (
                    <>
                      <div className="single_product mb-1">
                        <div className="product_img">
                          <img
                            src={
                              // productImg
                              process.env.REACT_APP_IMG_URL +
                              item.productImage.substring(2)
                            }
                          />
                        </div>
                        <div className="product_content">
                          <div className="product_title text-muted">
                            {language === "Bangla"
                              ? item.productName
                              : item.productNameBn}
                          </div>
                          <div className="product_price">
                            <del className="mrp">
                              &#2547;
                              {language === "Bangla"
                                ? item.productMRP
                                : item.productMRPBn}
                            </del>
                            <div className="discount">
                              &#2547;
                              {language === "Bangla"
                                ? item.discountPrice
                                : item.discountPriceBn}
                            </div>
                          </div>
                        </div>
                        <div className="add_cart">
                          {instantCart.length > 0 &&
                          isCartAdded2(item._id, instantCart) ? (
                            <a className="btn btn-success d-block">
                              {language === "Bangla"
                                ? "Already Added"
                                : "থলেতে রাখা হয়েছে"}
                            </a>
                          ) : (
                            <a
                              className="btn btn-outline-success d-block"
                              onClick={() => handleCart(item)}
                            >
                              {language === "Bangla"
                                ? "Add to Bag"
                                : "থলেতে রাখুন"}
                            </a>
                          )}
                        </div>
                      </div>
                    </>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AllProducts;
