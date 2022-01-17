import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import productImg from "../../../asset/image/product/bike.png";
import productImg1 from "../../../asset/image/product/product1.jpg";
import productImg2 from "../../../asset/image/product/product2.jpg";
import productImg3 from "../../../asset/image/product/banner1.jpg";
import categoryImage from "../../../asset/image/product/categoryImage.jpg";
import { GetHomeProductsList, isCartAdded } from "../_redux/HomeProductsAction";
const HomeProducts = () => {
  const dispatch = useDispatch();
  const homeProductsList = useSelector(
    (state) => state.homeProductsInfo.homeProductsList
  );
  const navigate = useNavigate();
  const hanldeAllProduct = (id) => {
    navigate(`/all-products/${id}`);
  };
  useEffect(() => {
    dispatch(GetHomeProductsList());
  }, []);
  const handleCart=(data)=>{
    console.log(`data`, data)
    const cartList =JSON.parse(localStorage.getItem('cartList')) || []
    cartList.push(data)
    localStorage.setItem('cartList',JSON.stringify(cartList))
  }
  console.log(`homeProductsList`, homeProductsList);
  return (
    <>
      <div className="product_list">
        {homeProductsList &&
          homeProductsList !== null &&
          homeProductsList.length > 0 &&
          homeProductsList.map((item, index) => (
            <div className="category_product">
              <div className="category_name">{item[0].categoryName}</div>
              <div className="product_parent">
                <div className="category_img">
                  <a>
                    {" "}
                    <img src={categoryImage} />
                    <a
                      className="btn view_all"
                      onClick={() => hanldeAllProduct(item[0].categoryId)}
                    >
                      View All
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
                            src={
                              productImg
                            }
                            // src={
                            //   process.env.REACT_APP_IMG_URL +
                            //   item2.productImage.substring(2)
                            // }
                          />
                        </div>
                        <div className="product_content">
                          <div className="product_title text-muted">
                            {item2.productName}
                          </div>
                          <div className="product_price">
                            <del className="mrp">${item2.productMRP}</del>
                            <div className="discount">
                              ${item2.discountPrice}
                            </div>
                          </div>
                        </div>
                        <div className="add_cart">
                        {isCartAdded(item2._id) ?(<a className="btn btn-outline-success d-block">
                            Added In Card
                          </a>):(<a className="btn btn-outline-success d-block" onClick={()=>handleCart(item2)}>
                            Add to Card
                          </a>)}
                          
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
