import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="user_dashboard">
        <div className="left">
          <div className="up">
            <h4>Hello Nurislam Mridha</h4>
          </div>
          <div className="down">
            <ul>
              <li className="d_active">
                <a>Your Order List</a>
              </li>
              <li>
                <a>Your Account</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="d_header">
            <p>Personal Information</p>
            <a className="btn btn-outline-success">Change Information</a>
          </div>
          <div className="user_info">
            <div className="d_info">
              <div>
                <h5>Full Name</h5>
                <input
                  className="form-control"
                  disabled
                  value={"Nurislam Mridha"}
                />
              </div>
              <div>
                <h5>Nick Name</h5>
                <input
                  className="form-control"
                  disabled
                  value={"Nurislam Mridha"}
                />
              </div>
            </div>
            <div className="d_info">
              <div>
                <h5>Profession</h5>
                <input
                  className="form-control"
                  disabled
                  value={"Nurislam Mridha"}
                />
              </div>
              <div>
                <h5>Active Phone Number</h5>
                <input
                  className="form-control"
                  disabled
                  value={"Nurislam Mridha"}
                />
              </div>
            </div>
            <div className="d_info">
              <div>
                <h5>Villeage</h5>
                <input
                  className="form-control"
                  disabled
                  value={"Nurislam Mridha"}
                />
              </div>
              <div>
                <h5>Area</h5>
                <input
                  className="form-control"
                  disabled
                  value={"Nurislam Mridha"}
                />
              </div>
            </div>
            <div className="d_info">
              <div>
                <h5>Found Description</h5>
                <input
                  className="form-control"
                  disabled
                  value={"Nurislam Mridha"}
                />
              </div>
              <div>
                <h5>Gender</h5>
                <input
                  className="form-control"
                  disabled
                  value={"Nurislam Mridha"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
