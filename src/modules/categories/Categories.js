import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import categoryIcon from "../../asset/image/icon/categoryIcon.png";
import { GetCategoryList } from "./_redux/CategoryAction";
const Categories = () => {
  const categoryList = useSelector((state) => state.categoryInfo.categoryList);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hanldeAllProduct = (id) => {
    navigate(`/all-products/${id}`);
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
                <a onClick={() => hanldeAllProduct(item._id)}>
                  <img src={categoryIcon} />
                  <label>{item.categoryName}</label>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Categories;
