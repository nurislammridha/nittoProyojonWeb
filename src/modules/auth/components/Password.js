import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../../utils/ToastHelper";
import { UserLogin } from "../_redux/AuthAction";

const Password = () => {
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isPhoneNumber, setIsPhoneNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.authInfo.isLoggedIn);
  const isLoggedHit = useSelector((state) => state.authInfo.isLoggedHit);
  const language = useSelector((state) => state.categoryInfo.language);
  useEffect(() => {
    setIsPhoneNumber(localStorage.getItem("isPhoneNumber"));
    setPhoneNumber(localStorage.getItem("phoneNumber"));
  }, []);
  const handleLogin = () => {
    if (isPhoneNumber === "false") {
      if (password.length === 0) {
        showToast(
          "error",
          language === "Bangla"
            ? "Password should not be empty"
            : "পাসওয়ার্ড খালি রাখা উচিত নয়"
        );
        return 0;
      } else if (password.length < 6) {
        showToast(
          "error",
          language === "Bangla"
            ? "Password should at least six character"
            : "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হওয়া উচিত"
        );
        return 0;
      } else if (cPassword.length === 0) {
        showToast(
          "error",
          language === "Bangla"
            ? "Confirm password should not be empty"
            : "নিশ্চিত করন পাসওয়ার্ড খালি রাখা উচিত নয়"
        );
        return 0;
      } else if (cPassword.length < 6) {
        showToast(
          "error",
          language === "Bangla"
            ? "Confirm Password should at least six character"
            : "নিশ্চিত করন পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হওয়া উচিত"
        );
        return 0;
      } else if (password !== cPassword) {
        showToast(
          "error",
          language === "Bangla"
            ? "Password and Confirm password should be matched"
            : "পাসওয়ার্ড ও নিশ্চিত পাসওয়ার্ড অনুরুপ হওয়া উচিত"
        );
        return 0;
      }
      localStorage.setItem("password", password);
      navigate("/user-details");
    } else {
      if (password.length === 0) {
        showToast(
          "error",
          language === "Bangla"
            ? "Password should not be empty"
            : "পাসওয়ার্ড খালি রাখা উচিত নয়"
        );
        return 0;
      } else if (password.length < 6) {
        showToast(
          "error",
          language === "Bangla"
            ? "Password should at least six character"
            : "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হওয়া উচিত"
        );
        return 0;
      }
      // navigate("user-dashboard/erer");
      const data = {
        phoneNumber,
        password,
      };
      dispatch(UserLogin(data));
    }
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/user-dashboard/account");
    }
  }, [isLoggedIn]);
  return (
    <>
      <div className="middle_vrhr">
        <div className="vrhr_card">
          <div>
            <h6>{language === "Bangla" ? "Your Password" : "পাসওয়ার্ড"}</h6>
            <input
              className="form-control mt-3"
              placeholder={
                language === "Bangla"
                  ? "Type password here"
                  : "এখানে পাসওয়ার্ড লিখুন"
              }
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {isPhoneNumber === "false" && (
            <div className="mt-3">
              <h6>
                {language === "Bangla"
                  ? "Confirm Password"
                  : "পাসওয়ার্ড নিশ্চিত করুন"}
              </h6>
              <input
                className="form-control mt-3"
                placeholder={
                  language === "Bangla"
                    ? "Type confirm password here"
                    : "এখানে নিশ্চিত করন পাসওয়ার্ড লিখুন"
                }
                type="password"
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
              />
            </div>
          )}
          <div className="mt-3 d-flex justify-content-end">
            {isLoggedHit ? (
              <a className="btn btn-outline-success btn-sm ">
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              </a>
            ) : (
              <a
                className="btn btn-outline-success btn-sm "
                onClick={() => handleLogin()}
              >
                {language === "Bangla" ? "SUBMIT" : "জমা দিন"}
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Password;
