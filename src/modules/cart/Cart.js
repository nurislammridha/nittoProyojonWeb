import React from "react";
import shoppingBag from "../../asset/image/icon/shoppingBag.jpg";
import deletesvg from "../../asset/image/icon/delete.svg";
import plus from "../../asset/image/icon/plus.svg";
import minus from "../../asset/image/icon/minus.svg";
import productImg from "../../asset/image/product/bike.png";
const Cart = () => {
  return (
    <>
      <div className="cart_sm">
        <div className="top">0 Items</div>
        <div className="middle">
          <img src={shoppingBag} />
        </div>
        <div className="bottom">$1238</div>
      </div>
      <div className="cart_lg d-none">
        <div className="top">
          <div>
            <img src={shoppingBag} />
            <span>8 Items</span>
          </div>
          <div className="cross">
            <a>
              {" "}
              <i className="fa fa-times"></i>
            </a>
          </div>
        </div>
        <div className="middle">
          <ul className="">
            {[1, 2, 3, 4, 5, 6, 7, 7, 3].map((item, index) => (
              <li>
                <div className="single_cart">
                  <div className="cart_img">
                    <img src={productImg} alt="image" />
                  </div>
                  <div className="cart_title">
                    <h6>
                      Aci Salt 1kg asci salt 1 kg example products example
                    </h6>
                    <span>$40X3 = $123</span>
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
                    <a>
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
          <span>Total $1234</span>
        </div>
      </div>
    </>
  );
};

export default Cart;
