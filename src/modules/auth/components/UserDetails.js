import React, { useEffect } from "react";
import Select from "react-select";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ChangeUserInput, SubmitUserInput } from "../_redux/AuthAction";
import { useNavigate } from "react-router-dom";
const UserDetails = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.authInfo.userInfo);
  const isLoggedIn = useSelector((state) => state.authInfo.isLoggedIn);
  const navigate = useNavigate();
  const options = [
    { label: "Bagmara", value: "Bagmara" },
    { label: "Bagmara", value: "Bagmara" },
    { label: "Bagmara", value: "Bagmara" },
    { label: "Bagmara", value: "Bagmara" },
  ];
  const handleChangeText = (name, value) => {
    dispatch(ChangeUserInput(name, value));
  };
  const handleSubmit = () => {
    dispatch(SubmitUserInput(userInfo));
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/user-dashboard/erer");
    }
  }, [isLoggedIn]);

  return (
    <>
      <div className="middle_vrhr user_details">
        <div className="vrhr_card">
          <div>
            <h6>Your Full Name</h6>
            <input
              className="form-control mt-2"
              placeholder="Enter your full name"
              type="text"
              value={userInfo.fullName}
              onChange={(e) => handleChangeText("fullName", e.target.value)}
            />
          </div>
          <div className="mt-2">
            <h6>Your Nick Name</h6>
            <input
              className="form-control mt-2"
              placeholder="Enter your nick name"
              type="text"
              value={userInfo.nickName}
              onChange={(e) => handleChangeText("nickName", e.target.value)}
            />
          </div>
          <div className="mt-2">
            <h6>Your Profession</h6>
            <input
              className="form-control mt-2"
              placeholder="Enter your profession"
              type="text"
              value={userInfo.profession}
              onChange={(e) => handleChangeText("profession", e.target.value)}
            />
          </div>
          <div className="mt-2">
            <h6>Select Your Village</h6>
            <Select
              options={options}
              value={{ label: userInfo.village }}
              onChange={(e) => handleChangeText("village", e.value)}
            />
          </div>
          <div className="mt-2">
            <h6>Select, Which area near your village?</h6>
            <Select
              options={options}
              value={{ label: userInfo.villageArea }}
              onChange={(e) => handleChangeText("villageArea", e.value)}
            />
          </div>
          <div className="mt-3 gender_align">
            <h6 className="">Select Your Gender:</h6>
            <Form.Group className="" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Male"
                checked={userInfo.gender === "Male"}
                onChange={(e) => handleChangeText("gender", "Male")}
              />
            </Form.Group>
            <Form.Group className="" controlId="formBasicCheckbox2">
              <Form.Check
                type="checkbox"
                label="Female"
                checked={userInfo.gender === "Female"}
                onChange={(e) => handleChangeText("gender", "Female")}
              />
            </Form.Group>
          </div>
          <div className="mt-3">
            <h6>How we found you easily?</h6>
            <textarea
              className="form-control"
              placeholder="Short brief about your self or your location or both"
              value={userInfo.foundDescription}
              onChange={(e) =>
                handleChangeText("foundDescription", e.target.value)
              }
            />
          </div>
          <div className="mt-3 d-flex justify-content-end">
            <a
              className="btn btn-outline-success btn-sm "
              onClick={() => handleSubmit()}
            >
              SUBMIT
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
