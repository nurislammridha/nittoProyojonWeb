import React from "react";
import Modal from "react-bootstrap/Modal";
import productImg from "../../../asset/image/product/bike.png";
import productImg1 from "../../../asset/image/product/product1.jpg";
import productImg2 from "../../../asset/image/product/product2.jpg";
import productImg3 from "../../../asset/image/product/banner1.jpg";

const OrderProducts = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Product List
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d_product">
            {[1, 2, 3, 4, 5, 6, 8, 8, 8, 8].map((item, index) => (
              <>
                <div className="d_single_product">
                  <div className="d_img">
                    <img src={productImg} />
                  </div>
                  <div className="d_content">hello product my product</div>
                  <div className="d_price">
                    <del>$123</del>
                    <span>$123</span>
                  </div>
                </div>
                <div className="d_single_product">
                  <div className="d_img">
                    <img src={productImg1} />
                  </div>
                  <div className="d_content">hello product my product</div>
                  <div className="d_price">
                    <del>$123</del>
                    <span>$123</span>
                  </div>
                </div>
                <div className="d_single_product">
                  <div className="d_img">
                    <img src={productImg2} />
                  </div>
                  <div className="d_content">hello product my product</div>
                  <div className="d_price">
                    <del>$123</del>
                    <span>$123</span>
                  </div>
                </div>
                <div className="d_single_product">
                  <div className="d_img">
                    <img src={productImg3} />
                  </div>
                  <div className="d_content">hello product my product</div>
                  <div className="d_price">
                    <del>$123</del>
                    <span>$123</span>
                  </div>
                </div>
              </>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <a onClick={props.onHide}>Close</a>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default OrderProducts;
