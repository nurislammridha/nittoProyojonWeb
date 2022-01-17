import React from "react";

const Password = () => {
  return (
    <>
     <div className="middle_vrhr">
        <div className="vrhr_card">
          <div>
            <h6>Your Password</h6>
            <input
              className="form-control mt-3"
              placeholder="Enter your active phonr number"
            />
          </div>
          <div className="mt-3">
            <h6>Confirm Password</h6>
            <input
              className="form-control mt-3"
              placeholder="Enter your active phonr number"
            />
          </div>
          <div className="mt-3 d-flex justify-content-end">
            <a className="btn btn-outline-success btn-sm ">
              SUBMIT
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Password;
