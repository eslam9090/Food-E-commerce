import BannerSection from "../../components/bannersection/BannerSection";
import Heading from "../../components/heading/Heading";
import styles from "./contact.module.css";
const Contact = () => {
  return (
    <>
      <BannerSection />
      <Heading title={"Contact Us"} subTitle={"Contact Us"} />
      <div className="padding-container">
        <div className={styles.contact_wrapper}>
          <form action="#">
            <div className={styles.form_group}>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Subject" />
            </div>

            <textarea cols="30" rows="10" placeholder="Message"></textarea>
            <button className={styles.contact_btn}>Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
