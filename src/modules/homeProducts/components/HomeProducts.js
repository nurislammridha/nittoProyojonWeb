import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  GetHomeProductsList,
  isCartAdded,
  isCartAdded2,
  OpenCart,
} from "../_redux/HomeProductsAction";
import CatImg from "./CatImg";
const HomeProducts = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.categoryInfo.language);
  const homeProductsList = useSelector(
    (state) => state.homeProductsInfo.homeProductsList
  );
  const afterRemoveCart = useSelector(
    (state) => state.homeProductsInfo.afterRemoveCart
  );
  const isPageLoad = useSelector((state) => state.homeProductsInfo.isPageLoad);

  const [instantCart, setInstantCart] = useState([]);
  const navigate = useNavigate();
  const hanldeAllProduct = (id) => {
    navigate(`/all-products/${id}`);
  };
  useEffect(() => {
    dispatch(GetHomeProductsList());
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
      <div className="product_list">
        {!isPageLoad &&
          homeProductsList &&
          homeProductsList !== null &&
          homeProductsList.length > 0 &&
          homeProductsList.map((item, index) => (
            <div className="category_product">
              <div className="category_name">
                {language === "Bangla"
                  ? item[0].categoryName
                  : item[0].categoryNameBn}
              </div>
              <div className="product_parent">
                <div className="category_img">
                  <a>
                    {" "}
                    {/* <img src={categoryImage} /> */}
                    <CatImg catName={item[0].categoryName} />
                    <a
                      className="btn view_all"
                      onClick={() => hanldeAllProduct(item[0].categoryId)}
                    >
                      {language === "Bangla" ? "View All" : "সকল পন্য দেখুন"}
                    </a>
                  </a>
                </div>
                <div className="parent_single_product">
                  {item.map((item2, index2) =>
                    window.innerWidth <= 600 && index2 === 4 ? (
                      ""
                    ) : (
                      <div className="single_product">
                        <div className="product_img">
                          <img
                            // src={productImg}
                            src={
                              process.env.REACT_APP_IMG_URL +
                              item2.productImage.substring(2)
                            }
                          />
                        </div>
                        <div className="product_content">
                          <div className="product_title text-muted">
                            {language === "Bangla"
                              ? item2.productName
                              : item2.productNameBn}
                          </div>
                          <div className="product_price">
                            <del className="mrp">
                              &#2547;
                              {language === "Bangla"
                                ? item2.productMRP
                                : item2.productMRPBn}
                            </del>
                            <div className="discount">
                              &#2547;
                              {language === "Bangla"
                                ? item2.discountPrice
                                : item2.discountPriceBn}
                            </div>
                          </div>
                        </div>
                        <div className="add_cart">
                          {instantCart.length > 0 &&
                          isCartAdded2(item2._id, instantCart) ? (
                            <a className="btn btn-success d-block">
                              {language === "Bangla"
                                ? "Already Added"
                                : "থলেতে রাখা হয়েছে"}
                            </a>
                          ) : (
                            <a
                              className="btn btn-outline-success d-block"
                              onClick={() => handleCart(item2)}
                            >
                              {language === "Bangla"
                                ? "Add to Bag"
                                : "থলেতে রাখুন"}
                            </a>
                          )}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default HomeProducts;
