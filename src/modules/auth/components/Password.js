import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Password = () => {
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isPhoneNumber, setIsPhoneNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setIsPhoneNumber(localStorage.getItem("isPhoneNumber"));
    setPhoneNumber(localStorage.getItem("phoneNumber"));
  }, []);
  const handleLogin = () => {
    if (isPhoneNumber === "false") {
      localStorage.setItem("password", password);
      navigate("/user-details");
    } else {
      navigate("user-dashboard/erer");
    }
  };
  return (
    <>
      <div className="middle_vrhr">
        <div className="vrhr_card">
          <div>
            <h6>Your Password</h6>
            <input
              className="form-control mt-3"
              placeholder="Enter your active phonr number"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {isPhoneNumber === "false" && (
            <div className="mt-3">
              <h6>Confirm Password</h6>
              <input
                className="form-control mt-3"
                placeholder="Enter your active phonr number"
                type="password"
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
              />
            </div>
          )}
          <div className="mt-3 d-flex justify-content-end">
            <a
              className="btn btn-outline-success btn-sm "
              onClick={() => handleLogin()}
            >
              SUBMIT
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Password;
