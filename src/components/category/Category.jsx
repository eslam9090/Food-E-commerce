/* eslint-disable react/prop-types */

import styles from "./category.module.css";
const Category = ({ category, onClick, activeCat }) => {
  function handelClicks() {
    onClick();
  }
  return (
    <div className={styles.category}>
      <div
        className={`${styles.category_img} ${
          category.CategoryName === activeCat ? styles.active_cat : ""
        }`}
        onClick={() => handelClicks()}
      >
        <img
          src={"http://localhost:1337" + category.CategoryImage.url}
          alt="category-image"
        />
      </div>
      <div className={styles.category_text}>
        <h3>{category.CategoryName}</h3>
      </div>
    </div>
  );
};

export default Category;
