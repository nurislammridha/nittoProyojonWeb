import React from "react";
import Modal from "react-bootstrap/Modal";

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
                    <div className="d_content">
                      {language === "Bangla"
                        ? item.productName
                        : item.productNameBn}
                    </div>
                    <h6 className="text-center d_quantity">
                      {language === "Bangla" ? "Quantity" : "পন্যের সংখ্যা"}:{" "}
                      {language === "Bangla" ? item.quantity : item.quantityBn}
                    </h6>
                    <div className="d_price">
                      <del>
                        &#2547;
                        {language === "Bangla"
                          ? item.productMRP
                          : item.productMRPBn}
                      </del>
                      <span>
                        &#2547;
                        {language === "Bangla"
                          ? item.discountPrice
                          : item.discountPriceBn}
                      </span>
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
