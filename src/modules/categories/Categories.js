import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import categoryIcon from "../../asset/image/icon/categoryIcon.png";
import { GetCategoryList } from "./_redux/CategoryAction";
const Categories = () => {
  const categoryList = useSelector((state) => state.categoryInfo.categoryList);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hanldeAllProduct = () => {
    navigate("/all-products");
  };
  useEffect(() => {
    dispatch(GetCategoryList());
  }, []);
  console.log(`categoryList`, categoryList);
  return (
    <>
      <div className="category">
        <ul>
          {categoryList &&
            categoryList !== null &&
            categoryList.length > 0 &&
            categoryList.map((item, index) => (
              <li>
                <a onClick={() => hanldeAllProduct()}>
                  <img src={categoryIcon} />
                  <label>{item.categoryName}</label>
                </a>
              </li>
            ))}
        </ul>
      </div>
      {/* for mobile categories  */}
      {/* <div className="mobile_category d-none">
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
      </div> */}
    </>
  );
};

export default Categories;
