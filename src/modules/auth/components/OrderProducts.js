import React from "react";
import Modal from "react-bootstrap/Modal";
import productImg from "../../../asset/image/product/bike.png";
import productImg1 from "../../../asset/image/product/product1.jpg";
import productImg2 from "../../../asset/image/product/product2.jpg";
import productImg3 from "../../../asset/image/product/banner1.jpg";
import { useSelector } from "react-redux";

const OrderProducts = (props) => {
  const { orderProducts } = props;
  const language = useSelector((state) => state.categoryInfo.language);
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
            {language === "Bangla" ? "Product List" : "পন্যের তালিকা"}
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
                      {language === "Bangla" ? "Quantity" : "পন্যের সংখ্যা"}:{" "}
                      {item.quantity}
                    </h6>
                    <div className="d_price">
                      <del>&#2547;{item.productMRP}</del>
                      <span>&#2547;{item.discountPrice}</span>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <a className="btn btn-success btn-sm" onClick={props.onHide}>
            {language === "Bangla" ? "Close" : "বন্ধ করুন"}
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default OrderProducts;
