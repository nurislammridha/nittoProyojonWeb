import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AccountInfo from "./AccountInfo";
import OrderList from "./OrderList";
const Dashboard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState("");
  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
  }, []);
  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    navigate("/");
  };
  const handelUpdateUser = () => {
    navigate(`/user-update`);
  };
  return (
    <>
      <div className="user_dashboard">
        <div className="left">
          <div className="up">
            <h4>Hello {userInfo && userInfo.fullName}</h4>
          </div>
          <div className="down">
            <ul>
              <li
                className={id === "order" ? "d_active" : ""}
                onClick={() => navigate("/user-dashboard/order")}
              >
                <a>Your Order List</a>
              </li>
              <li
                className={id === "account" ? "d_active" : ""}
                onClick={() => navigate("/user-dashboard/account")}
              >
                <a>Your Account</a>
              </li>
              <li className="logout_mobile" onClick={() => handleLogout()}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="d_header">
            <p>
              {id === "account" ? "Personal Information" : "Your Order List"}
            </p>
            {id === "account" ? (
              <a
                className="btn btn-outline-success"
                onClick={() => handelUpdateUser()}
              >
                <i className="fa fa-pencil"></i>
                <span className="change_info">Change Information</span>
              </a>
            ) : (
              ""
            )}
          </div>
          <div className="user_info">
            {id === "account" ? (
              <AccountInfo
                userInfo={userInfo}
                handleLogout={() => handleLogout()}
              />
            ) : (
              <OrderList userInfo={userInfo} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
