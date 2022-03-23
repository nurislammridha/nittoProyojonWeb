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
  const language = useSelector((state) => state.categoryInfo.language);
  useEffect(() => {
    if (userInfo) {
      dispatch(GetOrderList(userInfo._id));
    }
  }, [userInfo]);

  return (
    <>
      <div className="order_parent">
        {orderList !== null &&
          orderList.length > 0 &&
          orderList
            .sort(
              (a, b) => new Date(b.isCreatedDate) - new Date(a.isCreatedDate)
            )
            .map((item, index) => (
              <div className="order_info">
                <div className="d-flex justify-content-between order_header">
                  <h5 className="order_id">
                    {language === "Bangla" ? "Order Id" : "অর্ডার আইডি"}:{" "}
                    <span className="badge bg-secondary">{item._id}</span>
                  </h5>
                  <h5>
                    {language === "Bangla" ? "Item" : "পন্যের সংখ্যা"}:{" "}
                    <span className="badge bg-secondary">
                      {item.productInfo.length}
                    </span>
                  </h5>
                  <h5>
                    {language === "Bangla" ? "Total" : "মোট"}:{" "}
                    <span className="badge bg-secondary">
                      &#2547;{TotalCartPrice(item.productInfo)}
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
                      {language === "Bangla" ? "View Products" : "পন্য দেখুন"}
                    </a>
                  </span>
                </div>
                <div className="mt-2 d-flex justify-content-between">
                  <h6 className="order_status">
                    {" "}
                    {language === "Bangla"
                      ? "Your Order Status"
                      : "আপনার অর্ডারের বর্তমান অবস্থা"}
                  </h6>
                  <h6 className="order_id_mobile">
                    {language === "Bangla" ? "Order Id" : "অর্ডার আইডি"}:{" "}
                    <span className="badge bg-secondary">{item._id}</span>
                  </h6>
                </div>

                <div className="d-flex justify-content-between status_progress">
                  <div className="status">
                    <div className="status_circle">
                      <div>
                        <i className="fa fa-check"></i> {/* /close */}
                      </div>
                    </div>
                    <p className="text-center">
                      {" "}
                      {language === "Bangla" ? "Created" : "তৈরি"}
                    </p>
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
                    <p className="text-center">
                      {" "}
                      {language === "Bangla" ? "Accepted" : "গৃহীত"}
                    </p>
                    <p className="text-center">
                      {item.isAccepted ? (
                        item.isAcceptedDate
                      ) : (
                        <span className="invisible">Jan 00, 0000 10:00 AM</span>
                      )}
                    </p>
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
                    <p className="text-center">
                      {" "}
                      {language === "Bangla" ? "Precessing" : "প্রস্তুত হচ্ছে"}
                    </p>
                    <p className="text-center">
                      {item.isProcessing ? (
                        item.isProcessingDate
                      ) : (
                        <span className="invisible">Jan 00, 0000 10:00 AM</span>
                      )}
                    </p>
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
                    <p className="text-center">
                      {" "}
                      {language === "Bangla" ? "Delivering" : "পৌছানো হচ্ছে"}
                    </p>
                    <p className="text-center">
                      {item.isDelivering ? (
                        item.isDeliveringDate
                      ) : (
                        <span className="invisible">Jan 00, 0000 10:00 AM</span>
                      )}
                    </p>
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
                    <p className="text-center">
                      {" "}
                      {language === "Bangla" ? "Delivered" : "পৌছানো হয়েছে"}
                    </p>
                    <p className="text-center">
                      {item.isDelivered ? (
                        item.isDeliveredDate
                      ) : (
                        <span className="invisible">Jan 00, 0000 10:00 AM</span>
                      )}
                    </p>
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
