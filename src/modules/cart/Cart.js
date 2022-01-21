import React, { useEffect, useState } from "react";
import shoppingBag from "../../asset/image/icon/shoppingBag.jpg";
import deletesvg from "../../asset/image/icon/delete.svg";
import plus from "../../asset/image/icon/plus.svg";
import minus from "../../asset/image/icon/minus.svg";
import productImg from "../../asset/image/product/bike.png";
import { useDispatch, useSelector } from "react-redux";
import {
  AfterRemoveCart,
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
  const isOrderCreated = useSelector(
    (state) => state.homeProductsInfo.isOrderCreated
  );
  useEffect(() => {
    if (window.innerWidth > 600 && openCart) {
      setIsCart(true);
    }
    setLocalCart(JSON.parse(localStorage.getItem("cartList")));
    dispatch(OpenCart(false));
  }, [openCart]);
  useEffect(() => {
    setLocalCart(JSON.parse(localStorage.getItem("cartList")) || []);
  }, []);
  const handleOrder = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") || "false";
    if (isLoggedIn === "false") {
      navigate("/phone-number");
    } else {
      dispatch(SubmitOrderData(localCart));
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
    setLocalCart(cart);
    localStorage.setItem("cartList", JSON.stringify(cart));
  };
  const handleMinus = (number, index) => {
    if (number > 1) {
      const cart = [...localCart];
      cart[index].quantity = number - 1;
      setLocalCart(cart);
      localStorage.setItem("cartList", JSON.stringify(cart));
    }
  };
  useEffect(() => {
    if (isOrderCreated) {
      navigate("/user-dashboard/order");
    }
  }, [isOrderCreated]);

  return (
    <>
      <div className="cart_sm" onClick={() => setIsCart(true)}>
        <div className="top">{localCart.length} Items</div>
        <div className="middle">
          <img src={shoppingBag} />
        </div>
        <div className="bottom">${TotalCartPrice(localCart)}</div>
      </div>
      {isCart && (
        <>
          <div className="cart_lg">
            <div className="top">
              <div>
                <img src={shoppingBag} />
                <span>{localCart.length} Items</span>
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
                          <h6>{item.productName}</h6>
                          <span>
                            ${item.discountPrice}X{item.quantity} = $
                            {parseInt(item.discountPrice) *
                              parseInt(item.quantity)}
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
              <a
                className="btn btn-success btn-sm"
                onClick={() => handleOrder()}
              >
                Order Now
              </a>{" "}
              <span>Total ${TotalCartPrice(localCart)}</span>
            </div>
          </div>
        </>
      )}
      <div className="cart_mobile">
        <div className="message_fb">
          <i className="fa fa-facebook"></i>
        </div>
        <div className="place_order" onClick={() => setIsCart(true)}>
          <a onClick={() => handleOrder()}>
            <h6 className="text-center">
              Order Now{" "}
              {localCart.length > 0 && (
                <span className="badge_mobile">
                  Total ${TotalCartPrice(localCart)}
                </span>
              )}
            </h6>
          </a>
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
