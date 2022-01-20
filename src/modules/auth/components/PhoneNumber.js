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

  console.log("checkPhoneNumber", checkPhoneNumber);
  return (
    <>
      <div className="middle_vrhr">
        <div className="vrhr_card">
          <div>
            <h6>Your Active Phone Number</h6>
            <input
              className="form-control mt-3"
              placeholder="01XXXXXXXXX"
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mt-3 d-flex justify-content-end">
            <a
              className="btn btn-outline-success btn-sm "
              onClick={() => handlePhone()}
            >
              SUBMIT
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhoneNumber;
