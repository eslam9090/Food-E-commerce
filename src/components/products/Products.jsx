import { Navigation, Scrollbar } from "swiper/modules";
import Heading from "../heading/Heading";
import Card from "../singleCard/Card";
import styles from "./Products.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../reduxToolkit/slices/getAllProducts";

const Products = () => {
  const { allProducts } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <>
      <Heading title="Most Selling" subTitle="Most Selling" />
      <div className={styles.products_container}>
        <Swiper
          modules={[Navigation, Scrollbar]}
          navigation={{
            nextEl: `.${styles.arrow_right}`,
            prevEl: `.${styles.arrow_left}`,
          }}
          slidesPerView={4}
          spaceBetween={20}
          // loop={true}
          breakpoints={{
            300: { slidesPerView: 1.3 },
            600: { slidesPerView: 2.3 },
            800: { slidesPerView: 3.3 },
            1440: { slidesPerView: 4.3 },
          }}
          scrollbar={{
            el: `.${styles.progress}`,
          }}
        >
          {allProducts.length > 0 ? (
            allProducts?.map(
              (product) =>
                product.most_selling && (
                  <SwiperSlide key={product.id}>
                    <Card product={product} />
                  </SwiperSlide>
                )
            )
          ) : (
            <h2 className="no_product">No Product Found</h2>
          )}
        </Swiper>

        <div className={styles.progress_container}>
          <div className={styles.progress}>
            {/* <div className={styles.progress_bar}></div> */}
          </div>
          <div className={styles.arrows}>
            <div className={styles.arrow_left}>
              <FaArrowLeft />
            </div>
            <div className={styles.arrow_right}>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
