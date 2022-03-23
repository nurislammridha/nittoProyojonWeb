import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { isLogout } from "../_redux/AuthAction";
import AccountInfo from "./AccountInfo";
import OrderList from "./OrderList";
const Dashboard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState("");
  const language = useSelector((state) => state.categoryInfo.language);
  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
  }, []);
  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    navigate("/");
    dispatch(isLogout(true));
  };
  const handelUpdateUser = () => {
    navigate(`/user-update`);
  };
  return (
    <>
      <div className="user_dashboard">
        <div className="left">
          <div className="up">
            <h4>
              {language === "Bangla" ? "Hello" : "হ্যালো"}{" "}
              {userInfo && userInfo.fullName}
            </h4>
          </div>
          <div className="down">
            <ul>
              <li
                className={id === "order" ? "d_active" : ""}
                onClick={() => navigate("/user-dashboard/order")}
              >
                <a>
                  {language === "Bangla"
                    ? "Your Order List"
                    : "আপনার অর্ডারের তালিকা"}
                </a>
              </li>
              <li
                className={id === "account" ? "d_active" : ""}
                onClick={() => navigate("/user-dashboard/account")}
              >
                <a>
                  {language === "Bangla" ? "Your Account" : "আপনার অ্যাকাউন্ট"}
                </a>
              </li>
              <li className="logout_mobile" onClick={() => handleLogout()}>
                <a>{language === "Bangla" ? "Logout" : "প্রস্থান"}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="d_header">
            <p>
              {id === "account"
                ? language === "Bangla"
                  ? "Personal Information"
                  : "ব্যক্তিগত তথ্য"
                : language === "Bangla"
                ? "Your Order List"
                : "আপনার অর্ডার তালিকা"}
            </p>
            {id === "account" ? (
              <a
                className="btn btn-outline-success"
                onClick={() => handelUpdateUser()}
              >
                <i className="fa fa-pencil"></i>
                <span className="change_info">
                  {language === "Bangla"
                    ? "Change Information"
                    : "তথ্য পরিবর্তন"}
                </span>
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
