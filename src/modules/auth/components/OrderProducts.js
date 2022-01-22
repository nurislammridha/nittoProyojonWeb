import React from "react";
import Modal from "react-bootstrap/Modal";
import productImg from "../../../asset/image/product/bike.png";
import productImg1 from "../../../asset/image/product/product1.jpg";
import productImg2 from "../../../asset/image/product/product2.jpg";
import productImg3 from "../../../asset/image/product/banner1.jpg";

const OrderProducts = (props) => {
  const { orderProducts } = props;
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
            {orderProducts.length > 0 &&
              orderProducts.map((item, index) => (
                <>
                  <div className="d_single_product">
                    <div className="d_img">
                      <img
                        src={
                          process.env.REACT_APP_IMG_URL +
                          item.productImage.substring(2)
                        }
                      />
                    </div>
                    <div className="d_content">{item.productName}</div>
                    <h6 className="text-center d_quantity">
                      Quantity: {item.quantity}
                    </h6>
                    <div className="d_price">
                      <del>${item.productMRP}</del>
                      <span>${item.discountPrice}</span>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <a className="btn btn-success btn-sm" onClick={props.onHide}>
            Close
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default OrderProducts;
