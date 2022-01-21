import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetOrderList } from "../_redux/AuthAction";
import OrderProducts from "./OrderProducts";

const OrderList = ({ userInfo }) => {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const orderList = useSelector((state) => state.authInfo.orderList);
  useEffect(() => {
    if (userInfo) {
      dispatch(GetOrderList(userInfo._id));
    }
  }, [userInfo]);
  console.log("userInfo", userInfo);
  return (
    <>
      <div className="order_parent">
        {orderList !== null &&
          orderList.length > 0 &&
          orderList.map((item, index) => (
            <div className="order_info">
              <div className="d-flex justify-content-between order_header">
                <h5>
                  Order Id:{" "}
                  <span className="badge bg-secondary">{item._id}</span>
                </h5>
                <h5>
                  Item: <span className="badge bg-secondary">23</span>
                </h5>
                <h5>
                  Total: <span className="badge bg-secondary">$23</span>
                </h5>
                <span>
                  <a
                    className="btn btn-success btn-sm"
                    onClick={() => setModalShow(true)}
                  >
                    View Products
                  </a>
                </span>
              </div>
              <h6 className="mt-3">Your Order Status</h6>
              <div className="d-flex justify-content-between status_progress">
                <div className="status">
                  <div className="status_circle">
                    <div>
                      <i className="fa fa-check"></i>
                    </div>
                  </div>
                  <p className="text-center">Created</p>
                  <p className="text-center">12-12-1212 12:34 AM</p>
                </div>
                <div className="status">
                  <div className="status_circle">
                    <div>
                      <i className="fa fa-check"></i>
                    </div>
                  </div>
                  <p className="text-center">Accepted</p>
                  <p className="text-center">12-12-1212 12:34 AM</p>
                </div>
                <div className="status">
                  <div className="status_circle">
                    <div>
                      <i className="fa fa-check"></i>
                    </div>
                  </div>
                  <p className="text-center">Precessing</p>
                  <p className="text-center">12-12-1212 12:34 AM</p>
                </div>
                <div className="status">
                  <div className="status_circle">
                    <div>
                      <i className="fa fa-check"></i>
                    </div>
                  </div>
                  <p className="text-center">Delivering</p>
                  <p className="text-center">12-12-1212 12:34 AM</p>
                </div>
                <div className="status">
                  <div className="status_circle">
                    <div>
                      <i className="fa fa-check"></i>
                    </div>
                  </div>
                  <p className="text-center">Delivered</p>
                  <p className="text-center">12-12-1212 12:34 AM</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <OrderProducts show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default OrderList;
