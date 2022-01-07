import React from "react";
import ts1 from "../../asset/image/largeSlider/banner1.jpg";
import ts2 from "../../asset/image/largeSlider/banner2.jpg";
import ts3 from "../../asset/image/largeSlider/banner3.jpg";
import productImg from "../../asset/image/product/bike.png";
const AllProducts = () => {
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
        <div className="all_product">
          <div className="category_product">
            <div className="category_name">Cha & Cigarate</div>
            <div className="border_top_all">
              <p></p>
            </div>
            <div className="product_parent_all">
              {[
                1, 2, 3, 4, 5, 5, 6, 6, 6, 3, 4, 5, 5, 6, 5, 4, 3, 3, 3, 3, 3,
                3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
              ].map((item, index) => (
                <div className="single_product mb-1">
                  <div className="product_img">
                    <img src={productImg} />
                  </div>
                  <div className="product_content">
                    <div className="product_title text-muted">
                      ACI salt white 1Kg white 1Kg
                    </div>
                    <div className="product_price">
                      <del className="mrp">$123</del>
                      <div className="discount">$123</div>
                    </div>
                  </div>
                  <div className="add_cart">
                    <a className="btn btn-outline-success d-block">
                      Add to Card
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
