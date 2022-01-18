import React, { useEffect, useState } from "react";
import shoppingBag from "../../asset/image/icon/shoppingBag.jpg";
import deletesvg from "../../asset/image/icon/delete.svg";
import plus from "../../asset/image/icon/plus.svg";
import minus from "../../asset/image/icon/minus.svg";
import productImg from "../../asset/image/product/bike.png";
import { useDispatch, useSelector } from "react-redux";
import { OpenCart, TotalCartPrice } from "../homeProducts/_redux/HomeProductsAction";
const Cart = () => {
  const [isCart, setIsCart] = useState(false);
  const [localCart, setLocalCart] = useState([])
  const dispatch = useDispatch()
  const openCart = useSelector((state) => state.homeProductsInfo.openCart);
  useEffect(() => {
    if(window.innerWidth > 600 && openCart){
      setIsCart(true)
    }
  }, [openCart])
  useEffect(() => {
    setLocalCart(JSON.parse(localStorage.getItem('cartList')) || [])
  }, [])
  const removeFromCart=(id)=>{
let removeCart =[...localCart]
removeCart = removeCart.filter(item => item._id !== id)
setLocalCart(removeCart)
localStorage.setItem('cartList',JSON.stringify(removeCart))
  }
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
              <div className="cross" onClick={() => {
               dispatch(OpenCart(false))
                setIsCart(false)
              }}>
                <a>
                  {" "}
                  <i className="fa fa-times"></i>
                </a>
              </div>
            </div>
            <div className="middle">
              <ul className="">
                {localCart.length>0 && localCart.map((item, index) => (
                  <li>
                    <div className="single_cart">
                      <div className="cart_img">
                        <img src={productImg} alt="image" />
                      </div>
                      <div className="cart_title">
                        <h6>
                          {item.productName}
                        </h6>
                        <span>${item.discountPrice}X2 = ${parseInt(item.discountPrice)*2}</span>
                      </div>
                      <div className="cart_counter">
                        <div className="cart_counter_inner">
                          <div className="cart_increase">
                            <a>
                              {" "}
                              <img src={plus} />
                            </a>
                          </div>
                          <div className="cart_counter_number">2</div>
                          <div className="cart_increase">
                            <a>
                              <img src={minus} />
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="cart_close">
                        <a onClick={()=>removeFromCart(item._id)}>
                          <img src={deletesvg} alt="" />
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bottom">
              <a className="btn btn-success btn-sm">Order Now</a>{" "}
              <span>Total ${TotalCartPrice(localCart)}</span>
            </div>
          </div>
        </>
      )}
      <div className="cart_mobile" onClick={() => setIsCart(true)}>
        <div className="message_fb">
          <i className="fa fa-facebook"></i>
        </div>
        <div className="place_order">
          <a>
            <h6 className="text-center">Order Now</h6>
          </a>
        </div>
        <div className="mobile_cart">
          <img src={shoppingBag} />
        </div>
      </div>
    </>
  );
};

export default Cart;
