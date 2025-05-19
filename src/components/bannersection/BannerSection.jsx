import BreadCrumb from "../breadcrumb/BreadCrumb";
import styles from "./bannersection.module";
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
