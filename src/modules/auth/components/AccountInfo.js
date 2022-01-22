import React from "react";

const AccountInfo = ({ userInfo, handleLogout }) => {
  return (
    <>
      <div className="d_info">
        <div>
          <h5>Full Name</h5>
          <input className="form-control" disabled value={userInfo.fullName} />
        </div>
        <div>
          <h5>Nick Name</h5>
          <input className="form-control" disabled value={userInfo.nickName} />
        </div>
      </div>
      <div className="d_info">
        <div>
          <h5>Profession</h5>
          <input
            className="form-control"
            disabled
            value={userInfo.profession}
          />
        </div>
        <div>
          <h5>Active Phone Number</h5>
          <input
            className="form-control"
            disabled
            value={userInfo.phoneNumber}
          />
        </div>
      </div>
      <div className="d_info">
        <div>
          <h5>Village</h5>
          <input className="form-control" disabled value={userInfo.village} />
        </div>
        <div>
          <h5>Area</h5>
          <input
            className="form-control"
            disabled
            value={userInfo.villageArea}
          />
        </div>
      </div>
      <div className="d_info">
        <div>
          <h5>Found Description</h5>
          <input
            className="form-control"
            disabled
            value={userInfo.foundDescription}
          />
        </div>
        <div>
          <h5>Gender</h5>
          <input className="form-control" disabled value={userInfo.gender} />
        </div>
        <div className="logout_mo">
          <a className="btn btn-success d-block" onClick={() => handleLogout()}>
            LOGOUT
          </a>
        </div>
      </div>
    </>
  );
};

export default AccountInfo;
