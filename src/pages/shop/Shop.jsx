import BannerSection from "../../components/bannersection/BannerSection";
import Categories from "../../components/categories/Categories";
import Heading from "../../components/heading/Heading";

const Shop = () => {
  return (
    <>
      <BannerSection />
      <Heading title={"Shop by category"} subTitle={"Shop by category"} />
      <Categories />
    </>
  );
};

export default Shop;
