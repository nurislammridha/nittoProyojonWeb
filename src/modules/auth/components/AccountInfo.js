import React from "react";
import { useSelector } from "react-redux";

const AccountInfo = ({ userInfo, handleLogout }) => {
  const language = useSelector((state) => state.categoryInfo.language);
  return (
    <>
      <div className="d_info">
        <div>
          <h5> {language === "Bangla" ? "Full Name" : "সম্পূর্ন নাম"}</h5>
          <input className="form-control" disabled value={userInfo.fullName} />
        </div>
        <div>
          <h5> {language === "Bangla" ? "Nick Name" : "ডাক নাম"}</h5>
          <input className="form-control" disabled value={userInfo.nickName} />
        </div>
      </div>
      <div className="d_info">
        <div>
          <h5> {language === "Bangla" ? "Profession" : "পেশা"}</h5>
          <input
            className="form-control"
            disabled
            value={userInfo.profession}
          />
        </div>
        <div>
          <h5>
            {" "}
            {language === "Bangla"
              ? "Active Phone Number"
              : "ব্যবহ্রত মোবাইল নাম্বার"}
          </h5>
          <input
            className="form-control"
            disabled
            value={userInfo.phoneNumber}
          />
        </div>
      </div>
      <div className="d_info">
        <div>
          <h5>{language === "Bangla" ? "Village" : "গ্রাম"}</h5>
          <input className="form-control" disabled value={userInfo.village} />
        </div>
        <div>
          <h5>{language === "Bangla" ? "Area" : "এলাকা"}</h5>
          <input
            className="form-control"
            disabled
            value={userInfo.villageArea}
          />
        </div>
      </div>
      <div className="d_info">
        <div>
          <h5>
            {language === "Bangla" ? "Found Description" : "স্পষ্ট বর্ননা"}
          </h5>
          <input
            className="form-control"
            disabled
            value={userInfo.foundDescription}
          />
        </div>
        <div>
          <h5>{language === "Bangla" ? "Gender" : "লিঙ্গ"}</h5>
          <input className="form-control" disabled value={userInfo.gender} />
        </div>
        <div className="logout_mo">
          <a className="btn btn-success d-block" onClick={() => handleLogout()}>
            {language === "Bangla" ? "LOGOUT" : "প্রস্থান"}
          </a>
        </div>
      </div>
    </>
  );
};

export default AccountInfo;
