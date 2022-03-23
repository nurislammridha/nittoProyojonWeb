import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CheckPhoneNumber } from "../_redux/AuthAction";

const PhoneNumber = () => {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const checkPhoneNumber = useSelector(
    (state) => state.authInfo.checkPhoneNumber
  );
  const language = useSelector((state) => state.categoryInfo.language);
  const isLoadNumber = useSelector((state) => state.authInfo.isLoadNumber);
  const handlePhone = () => {
    dispatch(CheckPhoneNumber(phone));
  };
  useEffect(() => {
    if (checkPhoneNumber && checkPhoneNumber !== null) {
      localStorage.setItem("phoneNumber", phone);
      localStorage.setItem("isPhoneNumber", checkPhoneNumber.isPhoneNumber);
      navigate("/password");
    }
  }, [checkPhoneNumber]);

  return (
    <>
      <div className="middle_vrhr">
        <div className="vrhr_card">
          <div>
            <h6>
              {language === "Bangla"
                ? "Your Active Phone Number"
                : "আপনার ব্যবহ্রত ফোন নম্বর"}
            </h6>
            <input
              className="form-control mt-3"
              placeholder="01XXXXXXXXX"
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mt-3 d-flex justify-content-end">
            {isLoadNumber ? (
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
                onClick={() => handlePhone()}
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

export default PhoneNumber;
