import React from "react";
import categoryIcon from "../../asset/image/icon/categoryIcon.png";
const Categories = () => {
  return (
    <>
      <div className="category">
        <ul>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 23, 3].map((item, index) => (
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
