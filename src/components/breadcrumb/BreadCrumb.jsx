import { Link, useLocation } from "react-router-dom";
import styles from "./BreadCrumb.module.css";

const BreadCrumb = () => {
  const location = useLocation(); // Use React Router's useLocation instead of window.location
  const pathnames = location.pathname.split("/").filter((item) => item !== "");

  return (
    <div className={styles.breadcrumb}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((item, index) => {
          const isLast = index === pathnames.length - 1;
 
          return (
            <li key={index}>
              <span className={styles.slash}>-</span>
              {isLast ? (
                <span className={styles.unclickable}>{item}</span>
              ) : (
                <Link to={`/${item}`}>{item}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BreadCrumb;
