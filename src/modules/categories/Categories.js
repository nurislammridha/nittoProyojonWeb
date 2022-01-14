import React from "react";
import { useNavigate } from "react-router-dom";
import categoryIcon from "../../asset/image/icon/categoryIcon.png";
const Categories = () => {
  const navigate = useNavigate();
  const hanldeAllProduct = () => {
    navigate("/all-products");
  };
  return (
    <>
      <div className="category">
        <ul>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 23, 3].map((item, index) => (
            <li>
              <a onClick={() => hanldeAllProduct()}>
                <img src={categoryIcon} />
                <label>Fish & carry </label>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* for mobile categories  */}
      <div className="mobile_category d-none">
        <ul>
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 5, 4, 3, 3, 3, 3, 3, 4, 3, 4, 3, 4, 3,
            4, 3, 4, 3, 3,
          ].map((item, index) => (
            <li>
              <a>
                <img src={categoryIcon} />
                <label>Fish & carry </label>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Categories;
