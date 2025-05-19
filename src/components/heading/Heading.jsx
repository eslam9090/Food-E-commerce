import styles from "./heading.module.css";
// eslint-disable-next-line react/prop-types
const Heading = ({ title, subTitle }) => {
  return (
    <div className={styles.heading}>
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default Heading;
