import BreadCrumb from "../breadcrumb/BreadCrumb";
import styles from "./bannersection.module.css"; // Adjust the path as necessary
const BannerSection = () => {
  return (
    <div className="padding-container">
      <div className={styles.main_banner}>
        <BreadCrumb />
      </div>
    </div>
  );
};

export default BannerSection;
