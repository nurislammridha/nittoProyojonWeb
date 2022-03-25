import React, { useEffect, useState } from "react";
import shoppingBag from "../../asset/image/icon/shoppingBag.jpg";
import deletesvg from "../../asset/image/icon/delete.svg";
import plus from "../../asset/image/icon/plus.svg";
import minus from "../../asset/image/icon/minus.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  AfterRemoveCart,
  FalseOrderCreated,
  getBdNumber,
  OpenCart,
  SubmitOrderData,
  TotalCartPrice,
} from "../homeProducts/_redux/HomeProductsAction";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const [isCart, setIsCart] = useState(false);
  const [localCart, setLocalCart] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openCart = useSelector((state) => state.homeProductsInfo.openCart);
  const isOrderHit = useSelector((state) => state.homeProductsInfo.isOrderHit);
  const language = useSelector((state) => state.categoryInfo.language);
  const isOrderCreated = useSelector(
    (state) => state.homeProductsInfo.isOrderCreated
  );
  useEffect(() => {
    if (window.innerWidth > 600 && openCart) {
      setIsCart(true);
    }
    let ca = JSON.parse(localStorage.getItem("cartList")) || [];
    setLocalCart(ca);
    dispatch(OpenCart(false));
  }, [openCart]);
  useEffect(() => {
    let car = JSON.parse(localStorage.getItem("cartList")) || [];
    setLocalCart(car);
  }, []);
  const handleOrder = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") || "false";
    if (isLoggedIn === "false") {
      navigate("/phone-number");
      setIsCart(false);
    } else {
      dispatch(SubmitOrderData(localCart, language));
    }
  };
  const removeFromCart = (id) => {
    let removeCart = [...localCart];
    removeCart = removeCart.filter((item) => item._id !== id);
    setLocalCart(removeCart);
    dispatch(AfterRemoveCart(removeCart));
    localStorage.setItem("cartList", JSON.stringify(removeCart));
  };
  const handlePlus = (number, index) => {
    const cart = [...localCart];
    cart[index].quantity = number + 1;
    cart[index].quantityBn = getBdNumber(number + 1);
    setLocalCart(cart);
    localStorage.setItem("cartList", JSON.stringify(cart));
  };
  const handleMinus = (number, index) => {
    if (number > 1) {
      const cart = [...localCart];
      cart[index].quantity = number - 1;
      cart[index].quantityBn = getBdNumber(number - 1);
      setLocalCart(cart);
      localStorage.setItem("cartList", JSON.stringify(cart));
    }
  };
  useEffect(() => {
    if (isOrderCreated) {
      navigate("/user-dashboard/order");
      dispatch(FalseOrderCreated());
      setIsCart(false);
      setLocalCart([]);
    }
  }, [isOrderCreated]);

  return (
    <>
      <div className="cart_sm" onClick={() => setIsCart(true)}>
        <div className="top">
          {language === "Bangla"
            ? localCart.length
            : getBdNumber(localCart.length)}{" "}
          {language === "Bangla" ? "Items" : "টি পন্য"}
        </div>
        <div className="middle">
          <img src={shoppingBag} />
        </div>
        <div className="bottom">&#2547; {TotalCartPrice(localCart)}</div>
      </div>
      {isCart && (
        <>
          <div className="cart_lg">
            <div className="top">
              <div>
                <img src={shoppingBag} />
                <span>
                  {language === "Bangla"
                    ? localCart.length
                    : getBdNumber(localCart.length)}{" "}
                  {language === "Bangla" ? "Items" : "টি পন্য"}
                </span>
              </div>
              <div className="cross" onClick={() => setIsCart(false)}>
                <a>
                  {" "}
                  <i className="fa fa-times"></i>
                </a>
              </div>
            </div>
            <div className="middle">
              <ul className="">
                {localCart.length > 0 &&
                  localCart.map((item, index) => (
                    <li>
                      <div className="single_cart">
                        <div className="cart_img">
                          <img
                            src={
                              process.env.REACT_APP_IMG_URL +
                              item.productImage.substring(2)
                            }
                            alt="image"
                          />
                        </div>
                        <div className="cart_title">
                          <h6>
                            {language === "Bangla"
                              ? item.productName
                              : item.productNameBn}
                          </h6>
                          <span>
                            &#2547;{" "}
                            {language === "Bangla"
                              ? item.discountPrice
                              : item.discountPriceBn}
                            X{" "}
                            {language === "Bangla"
                              ? item.quantity
                              : item.quantityBn}{" "}
                            = &#2547;
                            {language === "Bangla"
                              ? parseInt(item.discountPrice) *
                                parseInt(item.quantity)
                              : getBdNumber(
                                  parseInt(item.discountPrice) *
                                    parseInt(item.quantity)
                                )}
                          </span>
                        </div>
                        <div className="cart_counter">
                          <div className="cart_counter_inner">
                            <div className="cart_increase">
                              <a
                                onClick={() =>
                                  handleMinus(item.quantity, index)
                                }
                              >
                                {" "}
                                <img src={minus} />
                              </a>
                            </div>
                            <div className="cart_counter_number">
                              {item.quantity}
                            </div>
                            <div className="cart_increase">
                              <a
                                onClick={() => handlePlus(item.quantity, index)}
                              >
                                <img src={plus} />
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="cart_close">
                          <a onClick={() => removeFromCart(item._id)}>
                            <img src={deletesvg} alt="" />
                          </a>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="bottom">
              {isOrderHit ? (
                <a className="btn btn-success btn-sm">
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  {language === "Bangla" ? "Ordering..." : "অর্ডার হচ্ছে..."}
                </a>
              ) : (
                <a
                  className="btn btn-success btn-sm"
                  onClick={() => handleOrder()}
                >
                  {language === "Bangla" ? "Order Now" : "অর্ডার করুন"}
                </a>
              )}

              <span>
                {language === "Bangla" ? "Total" : "মোট"} &#2547;
                {language === "Bangla"
                  ? TotalCartPrice(localCart)
                  : getBdNumber(TotalCartPrice(localCart))}
              </span>
            </div>
          </div>
        </>
      )}
      <div className="cart_mobile">
        <div className="message_fb">
          <i className="fa fa-facebook"></i>
        </div>
        <div className="place_order">
          {isOrderHit ? (
            <a onClick={() => handleOrder()}>
              <h6 className="text-center">
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                {language === "Bangla" ? "Ordering..." : "অর্ডার হচ্ছে..."}
                {localCart.length > 0 && (
                  <span className="badge_mobile">
                    {language === "Bangla" ? "Total" : "মোট"} &#2547;
                    {TotalCartPrice(localCart)}
                  </span>
                )}
              </h6>
            </a>
          ) : (
            <a onClick={() => handleOrder()}>
              <h6 className="text-center">
                {language === "Bangla" ? "Order Now" : "অর্ডার করুন"}{" "}
                {localCart.length > 0 && (
                  <span className="badge_mobile">
                    {language === "Bangla" ? "Total" : "মোট"} &#2547;
                    {TotalCartPrice(localCart)}
                  </span>
                )}
              </h6>
            </a>
          )}
        </div>
        <div className="mobile_cart" onClick={() => setIsCart(true)}>
          <img src={shoppingBag} />
          {localCart.length > 0 && (
            <div className="cart_badge">{localCart.length}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
