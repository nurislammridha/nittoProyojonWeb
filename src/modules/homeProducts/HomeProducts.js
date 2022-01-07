import React from "react";
import productImg from "../../asset/image/product/bike.png";
import categoryImage from "../../asset/image/product/categoryImage.jpg";
const HomeProducts = () => {
  return (
    <>
      <div className="product_list">
        {[1, 2, 3, 4, 54, 5, 6, 6].map((item, index) => (
          <div className="category_product">
            <div className="category_name">Cha & Cigarate</div>
            <div className="product_parent">
              <div className="category_img">
                <a>
                  {" "}
                  <img src={categoryImage} />
                  <a className="btn view_all">View All</a>
                </a>
              </div>
              <div className="single_product">
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
                  <a className="btn btn-outline-success d-block">Add to Card</a>
                </div>
              </div>
              <div className="single_product">
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
                  {" "}
                  <a className="btn btn-outline-success d-block">Add to Card</a>
                </div>
              </div>
              <div className="single_product">
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
                  {" "}
                  <a className="btn btn-outline-success d-block">Add to Card</a>
                </div>
              </div>
              <div className="single_product">
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
                  {" "}
                  <a className="btn btn-outline-success d-block">Add to Card</a>
                </div>
              </div>
              <div className="single_product">
                <div className="product_img">
                  <img src={productImg} />
                </div>
                <div className="product_content">
                  <div className="product_title text-muted">
                    ACI salt white 1Kg white 1Kg{" "}
                  </div>
                  <div className="product_price">
                    <del className="mrp">$123</del>
                    <div className="discount">$123</div>
                  </div>
                </div>
                <div className="add_cart">
                  {" "}
                  <a className="btn btn-outline-success d-block">Add to Card</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeProducts;
