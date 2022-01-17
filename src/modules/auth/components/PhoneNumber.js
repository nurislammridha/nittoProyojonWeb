import React from "react";

const PhoneNumber = () => {
  return (
    <>
      <div className="middle_vrhr">
        <div className="vrhr_card">
          <div>
            <h6>Your Active Phone Number</h6>
            <input
              className="form-control mt-3"
              placeholder="Enter your active phonr number"
            />
          </div>
          <div className="mt-4 clearfix">
            <a className="float-right btn btn-outline-success btn-sm ">
              SUBMIT
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhoneNumber;
