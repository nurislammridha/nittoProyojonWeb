import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ts1 from "../../asset/image/largeSlider/banner1.jpg";
import ts2 from "../../asset/image/largeSlider/banner2.jpg";
import ts3 from "../../asset/image/largeSlider/banner3.jpg";
import productImg from "../../asset/image/product/bike.png";
import productImg1 from "../../asset/image/product/product1.jpg";
import productImg2 from "../../asset/image/product/product2.jpg";
import productImg3 from "../../asset/image/product/banner1.jpg";
import {
  isCartAdded2,
  OpenCart,
} from "../homeProducts/_redux/HomeProductsAction";
import { GetProductsByCategory } from "./_redux/AllProductsAction";
const AllProducts = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
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
            <img src={ts1} />
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
          <div class="d-flex justify-content-center  mt-5 mt-5 mt-5">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        )}
        {!isPageLoad && (
          <div className="all_product">
            <div className="category_product">
              <div className="category_name">
                {productsByCategory &&
                  productsByCategory !== null &&
                  productsByCategory.length > 0 &&
                  productsByCategory[0].categoryName}
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
                            {item.productName}
                          </div>
                          <div className="product_price">
                            <del className="mrp">${item.productMRP}</del>
                            <div className="discount">
                              ${item.discountPrice}
                            </div>
                          </div>
                        </div>
                        <div className="add_cart">
                          {instantCart.length > 0 &&
                          isCartAdded2(item._id, instantCart) ? (
                            <a className="btn btn-success d-block">
                              Already Added
                            </a>
                          ) : (
                            <a
                              className="btn btn-outline-success d-block"
                              onClick={() => handleCart(item)}
                            >
                              Add to Card
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
