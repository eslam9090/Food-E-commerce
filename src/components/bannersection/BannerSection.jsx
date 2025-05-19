import BreadCrumb from "../breadcrumb/BreadCrumb";
import styles from "./BannerSection.module.css";
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
