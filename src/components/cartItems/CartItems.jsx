/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import styles from "./cartItems.module.css";
import {
  decrementQty,
  incrementQty,
  totlalAmount,
} from "../../reduxToolkit/slices/getAllProducts";
import { useEffect } from "react";
const CartItems = ({ item }) => {

  const dispatch = useDispatch();
  function handelIncrement(id) {
    dispatch(incrementQty(id));
    dispatch(totlalAmount());
  }
  useEffect(() => {
    dispatch(totlalAmount());
  }, [dispatch]);
  function handelDecrement(id) {
    dispatch(decrementQty(id));
    dispatch(totlalAmount());
  }
  return (
    <>
      <div className={styles.cart_item}>
        <div className={styles.cart_item_image}>
          <img src={"http://localhost:1337" + item.image.url} alt="product" />
        </div>
        <div className={styles.cart_item_details}>
          <h3>{item.productName}</h3>
          <p>
            {" "}
            {item.price}
            {item.price_formatting}
          </p>
          <div className={styles.cart_peices_qty}>
            <div className={styles.cart_peices}>
              <p>{item.pieces} pieces</p>
              <p>{item.type}</p>
            </div>
            <div className={styles.cart_qty}>
              <button onClick={() => handelDecrement(item.documentId)}>
                -
              </button>
              <p>{item.quantity}</p>
              <button onClick={() => handelIncrement(item.documentId)}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;
