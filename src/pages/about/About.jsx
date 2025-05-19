import BannerSection from "../../components/bannersection/BannerSection";
import Heading from "../../components/heading/Heading";
import styles from "./about.module.css";
const About = () => {
  return (
    <>
      <BannerSection />
      <Heading title={"About Us"} subTitle={"About Us"} />
      <div className="padding-container">
        <div className={styles.about_wrapper}>
          <div className={styles.about_img}>
            <img src="../../../public/assets/images/cooking.png" alt="about" />
          </div>

          <div className={styles.about_text}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus cumque labore libero, deserunt voluptate temporibus
              excepturi. Laborum magni obcaecati, quia atque, pariatur cumque
              nostrum dolorum veritatis corrupti numquam magnam nemo?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus cumque labore libero, deserunt voluptate temporibus
              excepturi. Laborum magni obcaecati, quia atque, pariatur cumque
              nostrum dolorum veritatis corrupti numquam magnam nemo?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus cumque labore libero, deserunt voluptate temporibus
              excepturi. Laborum magni obcaecati, quia atque, pariatur cumque
              nostrum dolorum veritatis corrupti numquam magnam nemo?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus cumque labore libero, deserunt voluptate temporibus
              excepturi. Laborum magni obcaecati, quia atque, pariatur cumque
              nostrum dolorum veritatis corrupti numquam magnam nemo?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
