import { useParams } from "react-router-dom";
import BannerSection from "../../components/bannersection/BannerSection";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  getSingleProducts,
} from "../../reduxToolkit/slices/getAllProducts";
import { useEffect } from "react";
import styles from "./productDetails.module.css";
import Heading from "../../components/heading/Heading";
const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleProducts(id));
  }, [dispatch, id]);

  const { singelProduct } = useSelector((state) => state.products);

  return (
    <div>
      <BannerSection />
      <Heading
        title={`${singelProduct.productName}`}
        subTitle={"Product Details"}
      />
      <div className="padding-container">
        <div className={styles.product_details_wrapper}>
          <div className={styles.product_details_img}>
            <img
              src={
                "https://food-e-commerce-backend-strapi-production.up.railway.app" +
                singelProduct.image?.url
              }
              alt="img"
            />
          </div>
          <div className={styles.product_details_info}>
            <h4>{singelProduct.productName}</h4>
            <p>{singelProduct.description}</p>
            <p>
              {singelProduct.price}
              {singelProduct.price_formatting}
            </p>
            <button
              onClick={() => dispatch(addToCart(singelProduct.documentId))}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
