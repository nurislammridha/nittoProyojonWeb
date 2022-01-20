import React, { useState } from "react";
import AccountInfo from "./AccountInfo";
import OrderProducts from "./OrderProducts";
const Dashboard = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="user_dashboard">
        <div className="left">
          <div className="up">
            <h4>Hello Nurislam Mridha</h4>
          </div>
          <div className="down">
            <ul>
              <li className="d_active">
                <a>Your Order List</a>
              </li>
              <li>
                <a>Your Account</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="d_header">
            <p>Personal Information</p>
            <a className="btn btn-outline-success">Change Information</a>
          </div>
          <div className="user_info">
            {/* <AccountInfo /> */}
            <div className="order_parent">
              {[1, 2, 2, 2, 2, 2].map((item, index) => (
                <div className="order_info">
                  <div className="d-flex justify-content-between order_header">
                    <h5>
                      Order Id: <span className="badge bg-secondary">120</span>
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
          </div>
        </div>
      </div>
      <OrderProducts show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Dashboard;
