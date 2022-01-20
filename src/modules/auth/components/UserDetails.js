import React from "react";
import Select from "react-select";
import Form from "react-bootstrap/Form";
const UserDetails = () => {
  const options = [
    { label: "Bagmara", value: "Bagmara" },
    { label: "Bagmara", value: "Bagmara" },
    { label: "Bagmara", value: "Bagmara" },
    { label: "Bagmara", value: "Bagmara" },
  ];
  // const
  return (
    <>
      <div className="middle_vrhr user_details">
        <div className="vrhr_card">
          <div>
            <h6>Your Full Name</h6>
            <input
              className="form-control mt-2"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mt-2">
            <h6>Your Nick Name</h6>
            <input
              className="form-control mt-2"
              placeholder="Enter your nick name"
            />
          </div>
          <div className="mt-2">
            <h6>Your Profession</h6>
            <input
              className="form-control mt-2"
              placeholder="Enter your profession"
            />
          </div>
          <div className="mt-2">
            <h6>Selectn Your Village</h6>
            <Select options={options} />
          </div>
          <div className="mt-2">
            <h6>Select, Which area near your village?</h6>
            <Select options={options} />
          </div>
          <div className="mt-3 gender_align">
            <h6 className="">Select Your Gender:</h6>
            <Form.Group className="" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Male" />
            </Form.Group>
            <Form.Group className="" controlId="formBasicCheckbox2">
              <Form.Check type="checkbox" label="Female" />
            </Form.Group>
          </div>
          <div className="mt-3">
            <h6>How we found you easily?</h6>
            <textarea
              className="form-control"
              placeholder="Short brief about your self or your location or both"
            />
          </div>
          <div className="mt-3 d-flex justify-content-end">
            <a className="btn btn-outline-success btn-sm ">SUBMIT</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
