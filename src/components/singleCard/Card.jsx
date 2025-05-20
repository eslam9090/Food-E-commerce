/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import styles from "./card.module.css";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addToCart,
  addToWishlist,
} from "../../reduxToolkit/slices/getAllProducts";
import { useEffect, useState } from "react";

const Card = ({ product }) => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/wishlist") {
      setFav(true);
    }
  }, [location.pathname]);

  const [fav, setFav] = useState(false);
  const dispatch = useDispatch();
  function handelAddToCart(documentId) {
    dispatch(addToCart(documentId));
  }
  function handelAddToFav(documentId) {
    dispatch(addToWishlist(documentId));
    setFav(!fav);
  }

  return (
    <div className={styles.card}>
      {product.feature && <div className={styles.newFeature}>New</div>}
      <div className={styles.card_image}>
        <img
          src={
            "https://food-e-commerce-backend-strapi-production.up.railway.app" +
            product.image.url
          }
          alt=""
        />
        <div
          className={`${styles.fav} ${fav ? styles.activeFav : ""}`}
          onClick={() => handelAddToFav(product.documentId)}
        >
          <IoIosHeart
            className={`${styles.fav_icon} ${fav ? styles.activeFavIcone : ""}`}
          />
        </div>
      </div>
      <div className={styles.price_rate}>
        <div className={styles.price}>
          <p className="price">
            {product.price} {product.price_formatting}
          </p>
        </div>
        <div className={styles.rate}>
          <FaStar className={styles.star} />
          <span>{product.rate}</span>
        </div>
      </div>
      <div className={styles.product_name}>
        <Link to={`/shop/${product.documentId}`}>{product.productName}</Link>
      </div>
      <div className={styles.pieces}>
        <div className={styles.piece_1}>
          <FaRegCheckCircle className={styles.check} />
          <p>{product.pieces} pieces</p>
        </div>
        <div className={styles.piece_2}>
          <FaRegCheckCircle className={styles.check} />
          <p>{product.type}</p>
        </div>
      </div>
      <div className={styles.add_cart}>
        <button onClick={() => handelAddToCart(product.documentId)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
