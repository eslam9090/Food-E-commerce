import { useSelector } from "react-redux";
import BannerSection from "../../components/bannersection/BannerSection";
import CartItems from "../../components/cartItems/CartItems";
import Checkout from "../../components/checkout/Checkout";
import styles from "./cart.module.css";
const Cart = () => {
  const { cartItems } = useSelector((state) => state.products);
  return (
    <>
      <BannerSection />
      <div className="padding-container">
        <div className={styles.cart_items_container}>
          <div className={styles.cart_items}>
            {cartItems.length > 0 ? (
              cartItems.map((item) => <CartItems key={item.id} item={item} />)
            ) : (
              <h2 className="no_product">No Items in Cart</h2>
            )}
          </div>

          <Checkout />
        </div>
      </div>
    </>
  );
};

export default Cart;
