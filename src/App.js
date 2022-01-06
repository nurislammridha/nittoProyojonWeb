import "../src/asset/css/main.css";
import { Button, FormControl, InputGroup, Nav, Navbar } from "react-bootstrap";
import phoneIcon from "./asset/image/icon/phone.svg";
import downloadIcon from "./asset/image/icon/download.svg";
import profileIcon from "./asset/image/icon/profile.svg";
import categoryIcon from "./asset/image/icon/categoryIcon.png";
import searchIcon from "./asset/image/icon/search.svg";
import logo from "./asset/image/logo/logo.png";
import slider1 from "./asset/image/smallSlider/slider1.jpg";
import slider2 from "./asset/image/smallSlider/slider2.jpg";
import slider3 from "./asset/image/smallSlider/slider3.jpg";
import slider4 from "./asset/image/smallSlider/slider4.jpg";
import slider5 from "./asset/image/smallSlider/slider5.jpg";
import slider6 from "./asset/image/smallSlider/slider6.jpg";
import ts1 from "./asset/image/largeSlider/banner1.jpg";
import ts2 from "./asset/image/largeSlider/banner2.jpg";
import ts3 from "./asset/image/largeSlider/banner3.jpg";
import ts4 from "./asset/image/largeSlider/banner1.jpg";
import ts5 from "./asset/image/largeSlider/banner2.jpg";
import ts6 from "./asset/image/largeSlider/banner3.jpg";
import productImg from "./asset/image/product/bike.png";
import facebook from "./asset/image/icon/facebook.png";
import twitter from "./asset/image/icon/twitter.png";
import linkedin from "./asset/image/icon/linkedin.png";
import youtube from "./asset/image/icon/youtube.png";
import instagram from "./asset/image/icon/instagram.png";
import appStore from "./asset/image/icon/appStore.png";
import googlePlay from "./asset/image/icon/googlePlay.png";
import shoppingBag from "./asset/image/icon/shoppingBag.jpg";
import deletesvg from "./asset/image/icon/delete.svg";
import plus from "./asset/image/icon/plus.svg";
import minus from "./asset/image/icon/minus.svg";
import categoryImage from "./asset/image/product/categoryImage.jpg";
// Owl Carousel....
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
function App() {
  let option = {
    responsive: {
      0: {
        items: 1,
      },

      600: {
        items: 2,
      },

      1000: {
        items: 3,
      },
      1300: {
        items: 3,
      },
    },
  };
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
      <div className="body">
        <div className="cat_banner">
          <div className="category">
            <ul>
              <li>
                <a>
                  <img src={categoryIcon} />
                  <label>Fish</label>
                </a>
              </li>
              <li>
                <a>
                  <img src={categoryIcon} />
                  <label>carry</label>
                </a>
              </li>
              <li>
                <a>
                  <img src={categoryIcon} />
                  <label>Panio</label>
                </a>
              </li>
              <li>
                <a>
                  <img src={categoryIcon} />
                  <label>Biscuits</label>
                </a>
              </li>
              <li>
                <a>
                  <img src={categoryIcon} />
                  <label>Mosola</label>
                </a>
              </li>
              <li>
                <a>
                  <img src={categoryIcon} />
                  <label>Bekary</label>
                </a>
              </li>
              <li>
                <a>
                  <img src={categoryIcon} />
                  <label>Oil</label>
                </a>
              </li>
              <li>
                <a>
                  <img src={categoryIcon} />
                  <label>Household</label>
                </a>
              </li>
              <li>
                <a>
                  <img src={categoryIcon} />
                  <label>Daily needs</label>
                </a>
              </li>
              <li>
                <a>
                  <img src={categoryIcon} />
                  <label>Chal dal</label>
                </a>
              </li>
              <li>
                <a>
                  <img src={categoryIcon} />
                  <label>Piaj and rosun</label>
                </a>
              </li>
              <li>
                <a>
                  <img src={categoryIcon} />
                  <label>Poultry</label>
                </a>
              </li>
              <li>
                <a>
                  <img src={categoryIcon} />
                  <label>Meat</label>
                </a>
              </li>
              <li>
                <a>
                  <img src={categoryIcon} />
                  <label>Baby</label>
                </a>
              </li>
              <li>
                <a>
                  <img src={categoryIcon} />
                  <label>Old Products</label>
                </a>
              </li>
            </ul>
          </div>
          <div className="banner">
            <Carousel>
              <div>
                <img src={ts1} />
                {/* <p className="legend">Legend 1</p> */}
              </div>
              <div>
                <img src={ts2} />
              </div>
              <div>
                <img src={ts3} />
              </div>
              <div>
                <img src={ts4} />
              </div>
              <div>
                <img src={ts5} />
              </div>
              <div>
                <img src={ts6} />
              </div>
            </Carousel>
          </div>
        </div>
        <div className="border_top">
          <p></p>
        </div>
        <div className="product_list">
          {[1, 2, 3, 4, 54, 5, 6, 6].map((item, index) => (
            <div className="category_product">
              <div className="category_name">Cha & Cigarate</div>
              <div className="product_parent">
                <div className="category_img">
                  <a>
                    {" "}
                    <img src={categoryImage} />
                    <a className="btn view_all">View All</a>
                  </a>
                </div>
                <div className="single_product">
                  <div className="product_img">
                    <img src={productImg} />
                  </div>
                  <div className="product_content">
                    <div className="product_title text-muted">
                      ACI salt white 1Kg white 1Kg
                    </div>
                    <div className="product_price">
                      <del className="mrp">$123</del>
                      <div className="discount">$123</div>
                    </div>
                  </div>
                  <div className="add_cart">
                    <a className="btn btn-outline-success d-block">
                      Add to Card
                    </a>
                  </div>
                </div>
                <div className="single_product">
                  <div className="product_img">
                    <img src={productImg} />
                  </div>
                  <div className="product_content">
                    <div className="product_title text-muted">
                      ACI salt white 1Kg white 1Kg
                    </div>
                    <div className="product_price">
                      <del className="mrp">$123</del>
                      <div className="discount">$123</div>
                    </div>
                  </div>
                  <div className="add_cart">
                    {" "}
                    <a className="btn btn-outline-success d-block">
                      Add to Card
                    </a>
                  </div>
                </div>
                <div className="single_product">
                  <div className="product_img">
                    <img src={productImg} />
                  </div>
                  <div className="product_content">
                    <div className="product_title text-muted">
                      ACI salt white 1Kg white 1Kg
                    </div>
                    <div className="product_price">
                      <del className="mrp">$123</del>
                      <div className="discount">$123</div>
                    </div>
                  </div>
                  <div className="add_cart">
                    {" "}
                    <a className="btn btn-outline-success d-block">
                      Add to Card
                    </a>
                  </div>
                </div>
                <div className="single_product">
                  <div className="product_img">
                    <img src={productImg} />
                  </div>
                  <div className="product_content">
                    <div className="product_title text-muted">
                      ACI salt white 1Kg white 1Kg
                    </div>
                    <div className="product_price">
                      <del className="mrp">$123</del>
                      <div className="discount">$123</div>
                    </div>
                  </div>
                  <div className="add_cart">
                    {" "}
                    <a className="btn btn-outline-success d-block">
                      Add to Card
                    </a>
                  </div>
                </div>
                <div className="single_product">
                  <div className="product_img">
                    <img src={productImg} />
                  </div>
                  <div className="product_content">
                    <div className="product_title text-muted">
                      ACI salt white 1Kg white 1Kg{" "}
                    </div>
                    <div className="product_price">
                      <del className="mrp">$123</del>
                      <div className="discount">$123</div>
                    </div>
                  </div>
                  <div className="add_cart">
                    {" "}
                    <a className="btn btn-outline-success d-block">
                      Add to Card
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer">
        <div className="footer_top">
          {/* <div className="row"> */}
          <div className="">
            <ul>
              <li>
                <h6>Customer Services</h6>
              </li>
              <li>
                <a>NittoProyojon Store</a>
              </li>
              <li>
                <a>Frequently Asked Questions</a>
              </li>
              <li>
                <a>Terms and Conditions</a>
              </li>
              <li>
                <a>Provacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li>
                <h6>NittoProyojon</h6>
              </li>
              <li>
                <a>About NittoProyojon</a>
              </li>
              <li>
                <a>Shipping and Delivery</a>
              </li>
              <li>
                <a>Customer Care</a>
              </li>
              <li>
                <a>Careers</a>
              </li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li>
                <h6>Contact Us</h6>
              </li>
              <li>Mograbazar, Bagerhat</li>
              <li>
                <a>
                  <i className="fa fa-phone"></i>+8801753109207
                </a>
              </li>
              <li>
                <a>
                  <i className="fa fa-envelope"></i>info@nittoProyojon.com
                </a>
              </li>
              <li>
                <a>
                  <i className="fa fa-rss"></i>blog.nittoProyojon.com
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h6 className="follow_us">Follow Us</h6>
            <div className="social_icon">
              <a>
                <img src={facebook} />
              </a>
              <a>
                <img src={instagram} />
              </a>
              <a>
                <img src={linkedin} />
              </a>
              <a>
                <img src={youtube} />
              </a>
              <a>
                <img src={twitter} />
              </a>
            </div>
            <h6 className="follow_us mt-1">Download Our Mobile Apps</h6>
            <div className="app_store">
              <a>
                <img src={appStore} />
              </a>
              <a>
                {" "}
                <img src={googlePlay} />
              </a>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="footer_bottom">
          <h6 className="text-center">
            <span className="text-center">
              &copy; 2022 All right reserved by NittoProyojon
            </span>
            {/* <span>Design & Developed By Mridha Tech</span> */}
          </h6>
        </div>
      </div>
      <div className="cart_sm">
        <div className="top">0 Items</div>
        <div className="middle">
          <img src={shoppingBag} />
        </div>
        <div className="bottom">$1238</div>
      </div>
      <div className="cart_lg d-none">
        <div className="top">
          <div>
            <img src={shoppingBag} />
            <span>8 Items</span>
          </div>
          <div className="cross">
            <a>
              {" "}
              <i className="fa fa-times"></i>
            </a>
          </div>
        </div>
        <div className="middle">
          <ul className="">
            {[1, 2, 3, 4, 5, 6, 7, 7, 3].map((item, index) => (
              <li>
                <div className="single_cart">
                  <div className="cart_img">
                    <img src={productImg} alt="image" />
                  </div>
                  <div className="cart_title">
                    <h6>
                      Aci Salt 1kg asci salt 1 kg example products example
                    </h6>
                    <span>$40X3 = $123</span>
                  </div>
                  <div className="cart_counter">
                    <div className="cart_counter_inner">
                      <div className="cart_increase">
                        <a>
                          {" "}
                          <img src={plus} />
                        </a>
                      </div>
                      <div className="cart_counter_number">2</div>
                      <div className="cart_increase">
                        <a>
                          <img src={minus} />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="cart_close">
                    <a>
                      <img src={deletesvg} alt="" />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bottom">
          <a className="btn btn-success btn-sm">Order Now</a>{" "}
          <span>Total $1234</span>
        </div>
      </div>
    </>
  );
}

export default App;
