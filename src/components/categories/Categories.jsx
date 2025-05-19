import { useEffect, useState } from "react";
import { getCategories } from "../../reduxToolkit/slices/getAllProducts";
import Category from "../category/Category";
import Card from "../singleCard/Card";
import styles from "./categories.module.css";
import { useDispatch, useSelector } from "react-redux";
const Categories = () => {
  const { categories, allProducts } = useSelector((state) => state.products);
  const [showCategory, setShowCategory] = useState(allProducts);
  const [activeCat, setActiveCat] = useState(null);

  function filteredCategory(CategoryName) {
    const getProductCategories = allProducts?.filter(
      (product) => product?.category?.CategoryName === CategoryName
    );
    setShowCategory(getProductCategories);
    setActiveCat(CategoryName);
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <>
      <div className={styles.categories}>
        {categories.map((category) => (
          <Category
            key={category.id}
            category={category}
            activeCat={activeCat}
            onClick={() => filteredCategory(category.CategoryName)}
          />
        ))}
      </div>
      <div className="padding-container">
        <div className={styles.products_category}>
          {showCategory.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
