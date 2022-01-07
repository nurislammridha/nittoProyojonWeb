import React from "react";
import logo from "../../asset/image/logo/logo.png";
import categoryIcon from "../../asset/image/icon/categoryIcon.png";
import { FormControl, InputGroup } from "react-bootstrap";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header_top">
          <div className="d-flex justify-content-between">
            <div className="left">
              <a
                className=""
                href="https://play.google.com/store/apps/details?id=com.ghuriexpress.ghuri"
                target="_blank"
              >
                {" "}
                <i className="fa fa-download"></i>
                <span className="">NittoProyojon App</span>
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
                <img src={logo} className="" />
              </div>
            </div>
            <div className="col-sm-7 m-0 pl-2">
              <InputGroup className="search_bar_topNav">
                <FormControl
                  placeholder="Search For..."
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
                  <i className="fa fa-search"></i> <span>Search</span>
                </InputGroup.Text>
              </InputGroup>
            </div>
            <div className="col-sm-3 m-0 p-0">
              <div className="row m-0 p-0">
                <div className="col-sm-6 m-0 p-0">
                  <div className="help text-center">
                    <i className="fa fa-question-circle"></i>
                    <span>Help</span>
                  </div>
                </div>
                <div className="col-sm-6 m-0 p-0">
                  <div className="profile text-center">
                    <i className="fa fa-user"></i>
                    <label className="ml-2">Login</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_bottom">
          <div className="header_bottom_left">
            <div className="categories">
              <i className="fa fa-bars"></i>
              <a>Categories</a>
              <i className="fa fa-arrow-down"></i>
            </div>
            {/* ==========Hover categories  =============*/}
            <div className="hover_categories d-none">
              <ul>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 3, 4, 5, 6, 3, 4, 6].map(
                  (item, index) => (
                    <li>
                      <a>
                        <img src={categoryIcon} />
                        <span>Fish and carry</span>
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
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
      </div>
    </>
  );
};

export default Header;
