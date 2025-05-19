import { useSelector } from "react-redux";
import styles from "./checkout.module.css";
const Checkout = () => {
  const { totalAmountState } = useSelector((state) => state.products);

  return (
    <div>
      <div className={styles.cart_total}>
        <div className={styles.cart_total_details}>
          <div className={styles.total_desc}>
            <p>Total</p>
            <p>Shipping</p>
          </div>
          <div className={styles.total_price}>
            <p>{totalAmountState} EGP</p>
            <p>50 EGP</p>
          </div>
        </div>
        <div className={styles.cart_total_btn}>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
