import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { TbMenu } from "react-icons/tb";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, wishListProducts } = useSelector(
    (state) => state.products
  );

  return (
    <div className={styles.navbar}>
      <div className="container">
        <div className={styles.navbar_container}>
          <div className="logo">
            <Link to="/">
              <img
                width={"70px"}
                src="/public/assets/images/logo.png"
                alt="logo"
              />
            </Link>
          </div>
          <ul
            className={`${styles.nav_links} ${
              isOpen ? styles.active_menu : ""
            }`}
          >
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/"
                onClick={() => setIsOpen(false)}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/about"
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/shop"
                onClick={() => setIsOpen(false)}
              >
                SHOP
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/contact"
                onClick={() => setIsOpen(false)}
              >
                contact
              </NavLink>
            </li>
          </ul>
          <div className={styles.icons}>
            <Link to="/wishlist" className={styles.heart_icon}>
              <FaHeart />
              <span>{wishListProducts.length}</span>
            </Link>
            <Link to="/cart" className={styles.cart_icon}>
              <FaShoppingCart />
              <span>{cartItems.length}</span>
            </Link>
            <div className={`${styles.mobile_menu}`}>
              {isOpen ? (
                <IoClose onClick={() => setIsOpen(false)} width={32} />
              ) : (
                <TbMenu onClick={() => setIsOpen(true)} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
