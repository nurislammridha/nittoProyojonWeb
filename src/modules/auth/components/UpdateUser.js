import React, { useEffect, useState } from "react";
import Select from "react-select";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  ChangeUserInput,
  GetEditableData,
  SubmitUserInput,
  UpdateUserInput,
  VillageAreaList,
  VillageList,
} from "../_redux/AuthAction";
import { useNavigate } from "react-router-dom";
const UpdateUser = () => {
  const [userInfoLo, setUserInfoLo] = useState("");
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.authInfo.userInfo);
  const isLoggedIn = useSelector((state) => state.authInfo.isLoggedIn);
  const language = useSelector((state) => state.categoryInfo.language);
  const isDetailsHit = useSelector((state) => state.authInfo.isDetailsHit);
  const navigate = useNavigate();

  const handleChangeText = (name, value) => {
    dispatch(ChangeUserInput(name, value));
  };
  const handleSubmit = () => {
    dispatch(UpdateUserInput(userInfo));
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/user-dashboard/account");
    }
  }, [isLoggedIn]);
  useEffect(() => {
    dispatch(GetEditableData(JSON.parse(localStorage.getItem("userInfo"))));
    setUserInfoLo(JSON.parse(localStorage.getItem("userInfo")));
  }, []);

  return (
    <>
      <div className="middle_vrhr user_details">
        <div className="vrhr_card">
          <div>
            <h6>
              {" "}
              {language === "Bangla" ? "Your Full Name" : "আপনার সম্পূর্ণ নাম"}
            </h6>
            <input
              className="form-control mt-2"
              placeholder={
                language === "Bangla"
                  ? "Enter your full name"
                  : "আপনার সম্পূর্ন নাম লিখুন"
              }
              type="text"
              value={userInfo.fullName}
              onChange={(e) => handleChangeText("fullName", e.target.value)}
            />
          </div>
          <div className="mt-2">
            <h6>
              {" "}
              {language === "Bangla" ? "Your Nick Name" : "আপনার ডাকনাম"}
            </h6>
            <input
              className="form-control mt-2"
              placeholder={
                language === "Bangla"
                  ? "Enter your nick name"
                  : "আপনার ডাকনাম লিখুন"
              }
              type="text"
              value={userInfo.nickName}
              onChange={(e) => handleChangeText("nickName", e.target.value)}
            />
          </div>
          <div className="mt-2">
            <h6> {language === "Bangla" ? "Your Profession" : "আপনার পেশা"}</h6>
            <input
              className="form-control mt-2"
              placeholder={
                language === "Bangla"
                  ? "Enter your profession"
                  : "আপনার পেশা লিখুন"
              }
              type="text"
              value={userInfo.profession}
              onChange={(e) => handleChangeText("profession", e.target.value)}
            />
          </div>
          <div className="mt-2">
            <h6>
              {" "}
              {language === "Bangla"
                ? "Select Your Village"
                : "আপনার গ্রাম বাছাই করুন"}
            </h6>
            <Select
              options={VillageList()}
              value={{ label: userInfo.village }}
              onChange={(e) => {
                handleChangeText("village", e.value);
                handleChangeText("villageArea", "");
              }}
            />
          </div>
          <div className="mt-2">
            <h6>
              {" "}
              {language === "Bangla"
                ? "Select your area in your village?"
                : "আপনার নিকটস্থ্ এলাকা বাছাই করুন"}
            </h6>
            <Select
              options={VillageAreaList(userInfo.village)}
              value={{ label: userInfo.villageArea }}
              onChange={(e) => handleChangeText("villageArea", e.value)}
            />
          </div>
          <div className="mt-3 gender_align">
            <h6 className="">
              {" "}
              {language === "Bangla"
                ? "Select Your Gender"
                : "আপনার লিংগ বাছাই করুন"}
              :
            </h6>
            <Form.Group className="" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label={language === "Bangla" ? "Male" : "পুরুষ"}
                checked={userInfo.gender === "Male"}
                onChange={(e) => handleChangeText("gender", "Male")}
              />
            </Form.Group>
            <Form.Group className="" controlId="formBasicCheckbox2">
              <Form.Check
                type="checkbox"
                label={language === "Bangla" ? "Female" : "মহিলা"}
                checked={userInfo.gender === "Female"}
                onChange={(e) => handleChangeText("gender", "Female")}
              />
            </Form.Group>
          </div>
          <div className="mt-3">
            <h6>
              {language === "Bangla"
                ? "How we found you easily?"
                : "আপনাকে সহজে খুজে পাওয়ার উপায়"}
            </h6>
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
            {isDetailsHit ? (
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
                onClick={() => handleSubmit()}
              >
                UPDATE
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
