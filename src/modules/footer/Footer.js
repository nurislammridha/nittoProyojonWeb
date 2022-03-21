import React from "react";
import facebook from "../../asset/image/icon/facebook.png";
import twitter from "../../asset/image/icon/twitter.png";
import linkedin from "../../asset/image/icon/linkedin.png";
import youtube from "../../asset/image/icon/youtube.png";
import instagram from "../../asset/image/icon/instagram.png";
import appStore from "../../asset/image/icon/appStore.png";
import googlePlay from "../../asset/image/icon/googlePlay.png";
import { useSelector } from "react-redux";
const Footer = () => {
  const language = useSelector((state) => state.categoryInfo.language);
  return (
    <>
      <div className="footer">
        <div className="footer_top">
          {/* <div className="row"> */}
          <div className="">
            <ul>
              <li>
                <h6>Customer Services</h6>
              </li>
              <li>
                <a>Panahar Store</a>
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
                <h6>Panahar</h6>
              </li>
              <li>
                <a>About Panahar</a>
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
                  <i className="fa fa-envelope"></i>info@panahar.com
                </a>
              </li>
              <li>
                <a>
                  <i className="fa fa-rss"></i>blog.panahar.com
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
              &copy; 2022 All right reserved by Panahar ।।{" "}
              <span style={{ fontSize: 10 }}>Developed By Nurislam Mridha</span>
            </span>
            {/* <span>Design & Developed By Mridha Tech</span> */}
          </h6>
        </div>
      </div>
    </>
  );
};

export default Footer;
