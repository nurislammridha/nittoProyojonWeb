import React, { useEffect, useState } from "react";
import logobn from "../../asset/image/logo/logobn.png";
import logoen from "../../asset/image/logo/logoen.png";
import { FormControl, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isLogout } from "../auth/_redux/AuthAction";
import {
  GetCategoryList,
  GlobalLanguage,
} from "../categories/_redux/CategoryAction";
import CatLogo from "../categories/CatLogo";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryInfo.categoryList);
  const language = useSelector((state) => state.categoryInfo.language);
  const [isCategoryHover, setIsCategoryHover] = useState(false);
  const [isMobileCategory, setIsMobileCategory] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState("false");
  const [userName, setUserName] = useState("");
  // const [language, setLanguage] = useState("");
  const isLoggedInAfter = useSelector((state) => state.authInfo.isLoggedIn);
  const isLogoutAfter = useSelector((state) => state.authInfo.isLogout);
  const isMenuBar = useSelector((state) => state.homeProductsInfo.isMenuBar);
  const hanldeAllProduct = (id) => {
    navigate(`/all-products/${id}`);
    setIsCategoryHover(false);
    setIsMobileCategory(false);
  };
  const handleDashboard = (id) => {
    if (isLoggedIn === "false") {
      navigate(`/phone-number`);
    } else {
      navigate(`/user-dashboard/order`);
    }
  };
  useEffect(() => {
    let login = localStorage.getItem("isLoggedIn") || "false";
    setIsLoggedIn(login);
    if (login === "false") {
      setUserName("sts");
    } else {
      setUserName(JSON.parse(localStorage.getItem("userInfo")).nickName);
    }
    dispatch(GetCategoryList());
    // const lang = localStorage.getItem("language") || "English";
    // setLanguage(lang);
  }, []);
  useEffect(() => {
    if (isLoggedInAfter) {
      setUserName(JSON.parse(localStorage.getItem("userInfo")).nickName);
      setIsLoggedIn("true");
    }
  }, [isLoggedInAfter]);
  useEffect(() => {
    if (isLogoutAfter) {
      setIsLoggedIn("false");
      dispatch(isLogout(false));
    }
  }, [isLogoutAfter]);
  const handleLanguage = () => {
    dispatch(GlobalLanguage(language));
    // if (language === "Bangla") {
    //   localStorage.setItem("language", "English");
    //   setLanguage("English");
    // } else {
    //   localStorage.setItem("language", "Bangla");
    //   setLanguage("Bangla");
    // }
  };
  useEffect(() => {
    if (isMenuBar) {
      setIsMobileCategory(false);
    }
  }, [isMenuBar]);
  return (
    <>
      <div className="header sticky-top">
        <div className="header_top">
          <div className="d-flex justify-content-between">
            <div className="left">
              <a className="" href="" target="_blank">
                {" "}
                <i className="fa fa-download"></i>
                <span className="">
                  {language === "Bangla" ? "Panahar App" : "পানাহার অ্যাপ"}
                </span>
              </a>
            </div>
            <div className="middle">
              {" "}
              "অনলাইন কেনাকাটায় প্রতারণা হতে সাবধান থাকুন-বাণিজ্য মন্ত্রণালয়"
            </div>
            <div class="right">
              <a href="tel:+8801753109207">
                {" "}
                <i className="fa fa-phone"></i>
                <span className="">+8801753109207</span>{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="header_middle">
          <div className="row m-0 p-0">
            <div className="col-sm-2 m-0 p-0">
              <div className="logo">
                <a onClick={() => navigate("/")}>
                  <img
                    src={language === "Bangla" ? logoen : logobn}
                    className=""
                  />
                </a>
              </div>
            </div>
            <div className="col-sm-7 m-0 pl-2">
              <InputGroup className="search_bar_topNav">
                <FormControl
                  placeholder={
                    language === "Bangla"
                      ? "type product name"
                      : "পন্যের নাম লিখুন"
                  }
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  // value={search}
                  // onChange={(e) => setSearch(e.target.value)}
                  // onKeyPress={(event) => {
                  //   if (event.key === "Enter") {
                  //     handleSearch(search);
                  //   }
                  // }}
                />
                <InputGroup.Text
                  className="search_group_btn"
                  // onClick={() => handleSearch(search)}
                >
                  <i className="fa fa-search"></i>{" "}
                  <span>{language === "Bangla" ? "Search" : "খুজুন"}</span>
                </InputGroup.Text>
              </InputGroup>
            </div>
            <div className="col-sm-3 m-0 p-0">
              <div className="row m-0 p-0">
                <div
                  className="col-sm-6 m-0 p-0"
                  onClick={() => handleLanguage()}
                >
                  <div className="help text-center">
                    <i className="fa fa-question-circle"></i>
                    <span>{language}</span>
                  </div>
                </div>
                <div className="col-sm-6 m-0 p-0">
                  <div
                    className="profile text-center"
                    onClick={() => handleDashboard()}
                  >
                    <i className="fa fa-user f_user"></i>
                    <label className="ml-2">
                      {isLoggedIn === "false"
                        ? language === "Bangla"
                          ? "Sign In/Up"
                          : "সাইন ইন"
                        : userName}
                    </label>
                    {/* <i className="fa fa-angle-down f_down"></i> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Midlle for mobile design  */}
        <div className="header_middle_mobile">
          <div className="menu">
            <a onClick={() => setIsMobileCategory(!isMobileCategory)}>
              {" "}
              <i className="fa fa-bars"></i>
            </a>
          </div>
          <div className="logo">
            <a onClick={() => navigate("/")}>
              {" "}
              <img src={language === "Bangla" ? logoen : logobn} className="" />
            </a>
          </div>
          <div className="right">
            <div
              className="help"
              onClick={() => handleLanguage()}
              style={{ cursor: "pointer" }}
            >
              {/* <i className="fa fa-question-circle"></i> */}
              {language === "Bangla" ? "বাং" : "ইং"}
            </div>
            <div className="user" onClick={() => handleDashboard()}>
              {isLoggedIn === "false" ? (
                <i className="fa fa-user"></i>
              ) : (
                userName.charAt(0)
              )}
            </div>
          </div>
        </div>
        <div className="header_bottom">
          <div
            className="header_bottom_left"
            onMouseOver={() => setIsCategoryHover(true)}
            onMouseLeave={() => setIsCategoryHover(false)}
          >
            <div className="categories">
              <i className="fa fa-bars"></i>
              <a>{language === "Bangla" ? "Categories" : "ক্যাটাগরি"}</a>
              <i className="fa fa-arrow-down"></i>
            </div>
            {/* ==========Hover categories  for pc=============*/}
            {isCategoryHover && (
              <div className="hover_categories ">
                <ul>
                  {categoryList &&
                    categoryList !== null &&
                    categoryList.length > 0 &&
                    categoryList.map((item, index) => (
                      <li>
                        <a onClick={() => hanldeAllProduct(item._id)}>
                          {/* <img src={categoryIcon} /> */}
                          <CatLogo catName={item.categoryName} />
                          <span>
                            {language === "Bangla"
                              ? item.categoryName
                              : item.categoryNameBn}
                          </span>
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            )}

            {/* ==========Hover categories  ==============*/}
          </div>
          <div className="header_bottom_right">
            <div className="left">
              <ul>
                <li>
                  <a>Populars</a>
                </li>
                <li>
                  <a>Hatbar</a>
                </li>
                <li>
                  <a>Offers</a>
                </li>
              </ul>
            </div>

            <div className="right">
              <ul>
                <li>
                  <a>50% Offers</a>
                </li>
                <li>
                  <a>40% Offers</a>
                </li>
                <li>
                  <a>30% Offers</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* header boottom design for mobile  */}
        <div className="header_bottom_mobile">
          <InputGroup className="search_bar_topNav">
            <FormControl
              placeholder={
                language === "Bangla" ? "type product name" : "পন্যের নাম লিখুন"
              }
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              // value={search}
              // onChange={(e) => setSearch(e.target.value)}
              // onKeyPress={(event) => {
              //   if (event.key === "Enter") {
              //     handleSearch(search);
              //   }
              // }}
            />
            <InputGroup.Text
              className="search_group_btn"
              // onClick={() => handleSearch(search)}
            >
              <i className="fa fa-search"></i>{" "}
              <span>{language === "Bangla" ? "Search" : "খুজুন"}</span>
            </InputGroup.Text>
          </InputGroup>
        </div>
      </div>
      {/* for mobile categories  */}
      {isMobileCategory && (
        <div className="mobile_category">
          <ul>
            {categoryList &&
              categoryList !== null &&
              categoryList.length > 0 &&
              categoryList.map((item, index) => (
                <li>
                  <a onClick={() => hanldeAllProduct(item._id)}>
                    {/* <img src={categoryIcon} /> */}
                    <CatLogo catName={item.categoryName} />
                    <label>
                      {language === "Bangla"
                        ? item.categoryName
                        : item.categoryNameBn}
                    </label>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
