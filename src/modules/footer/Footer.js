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
                <h6>
                  {language === "Bangla" ? "Customer Services" : "গ্রাহক সেবা"}
                </h6>
              </li>
              <li>
                <a>
                  {language === "Bangla" ? "Panahar Store" : "নিজস্ব দোকান"}
                </a>
              </li>
              <li>
                <a>
                  {" "}
                  {language === "Bangla"
                    ? "Frequently Asked Questions"
                    : "প্রশ্ন ও উত্তর"}
                </a>
              </li>
              <li>
                <a>
                  {" "}
                  {language === "Bangla" ? "Terms and Conditions" : "শর্তাবলী"}
                </a>
              </li>
              <li>
                <a>
                  {" "}
                  {language === "Bangla" ? "Provacy Policy" : "গোপনীয়তা নীতি"}
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li>
                <h6>{language === "Bangla" ? "Panahar" : "পানাহার"}</h6>
              </li>
              <li>
                <a>
                  {language === "Bangla" ? "About Panahar" : "পানাহার সম্পর্কে"}
                </a>
              </li>
              <li>
                <a>
                  {language === "Bangla"
                    ? "Shipping and Delivery"
                    : "শিপিং এবং ডেলিভারি"}
                </a>
              </li>
              <li>
                <a>{language === "Bangla" ? "Customer Care" : "গ্রাহক সেবা"}</a>
              </li>
              <li>
                <a>{language === "Bangla" ? "Career" : "কর্মজীবন"}</a>
              </li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li>
                <h6>{language === "Bangla" ? "Contact Us" : "যোগাযোগ করুন"}</h6>
              </li>
              <li>
                {language === "Bangla"
                  ? "Mograbazar, Bagerhat"
                  : "মগরাবাজার, বাগেরহাট"}
              </li>
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
            <h6 className="follow_us">
              {language === "Bangla" ? "Follow Us" : "আমাদের অনুসরণ করুন"}
            </h6>
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
            <h6 className="follow_us mt-1">
              {language === "Bangla"
                ? "Download Our Mobile Apps"
                : "অ্যাপস ডাউনলোড করুন"}
            </h6>
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
              &copy;
              {language === "Bangla"
                ? "2022 All right reserved by Panahar"
                : "2022 সমস্ত অধিকার পানাহার দ্বারা সংরক্ষিত"}{" "}
              ।।{" "}
              <span style={{ fontSize: 8 }}>Developed By Nurislam Mridha</span>
            </span>
            {/* <span>Design & Developed By Mridha Tech</span> */}
          </h6>
        </div>
      </div>
    </>
  );
};

export default Footer;
