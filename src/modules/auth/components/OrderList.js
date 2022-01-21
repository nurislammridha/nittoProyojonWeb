import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TotalCartPrice } from "../../homeProducts/_redux/HomeProductsAction";
import { GetOrderList } from "../_redux/AuthAction";
import OrderProducts from "./OrderProducts";

const OrderList = ({ userInfo }) => {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [orderProducts, setOrderProducts] = useState([]);
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
                  Item:{" "}
                  <span className="badge bg-secondary">
                    {item.productInfo.length}
                  </span>
                </h5>
                <h5>
                  Total:{" "}
                  <span className="badge bg-secondary">
                    ${TotalCartPrice(item.productInfo)}
                  </span>
                </h5>
                <span>
                  <a
                    className="btn btn-success btn-sm"
                    onClick={() => {
                      setOrderProducts(item.productInfo);
                      setModalShow(true);
                    }}
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
                      <i className="fa fa-check"></i> {/* /close */}
                    </div>
                  </div>
                  <p className="text-center">Created</p>
                  <p className="text-center">{item.isCreatedDate}</p>
                </div>
                <div className="status">
                  <div className="status_circle">
                    <div>
                      {item.isAccepted ? (
                        <i className="fa fa-check"></i>
                      ) : (
                        <i className="fa fa-close"></i>
                      )}
                    </div>
                  </div>
                  <p className="text-center">Accepted</p>
                  <p className="text-center">{item.isAcceptedDate}</p>
                </div>
                <div className="status">
                  <div className="status_circle">
                    <div>
                      {item.isProcessing ? (
                        <i className="fa fa-check"></i>
                      ) : (
                        <i className="fa fa-close"></i>
                      )}
                    </div>
                  </div>
                  <p className="text-center">Precessing</p>
                  <p className="text-center">{item.isProcessingDate}</p>
                </div>
                <div className="status">
                  <div className="status_circle">
                    <div>
                      {item.isDelivering ? (
                        <i className="fa fa-check"></i>
                      ) : (
                        <i className="fa fa-close"></i>
                      )}
                    </div>
                  </div>
                  <p className="text-center">Delivering</p>
                  <p className="text-center">{item.isDeliveringDate}</p>
                </div>
                <div className="status">
                  <div className="status_circle">
                    <div>
                      {item.isDelivered ? (
                        <i className="fa fa-check"></i>
                      ) : (
                        <i className="fa fa-close"></i>
                      )}
                    </div>
                  </div>
                  <p className="text-center">Delivered</p>
                  <p className="text-center">{item.isDeliveredDate}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <OrderProducts
        orderProducts={orderProducts}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default OrderList;
