import { useSelector } from "react-redux";
import BannerSection from "../../components/bannersection/BannerSection";
import Card from "../../components/singleCard/Card";
import styles from "./wishlist.module.css";
const WishList = () => {
  const { wishListProducts } = useSelector((state) => state.products);

  return (
    <div>
      <BannerSection />
      <div className="padding-container">
        <div className={styles.wishlist_container}>
          {wishListProducts.length > 0 ? (
            wishListProducts.map((product) => (
              <Card key={product.documentId} product={product} />
            ))
          ) : (
            <h2 className="no_product">Your Wishlist is empty</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishList;
