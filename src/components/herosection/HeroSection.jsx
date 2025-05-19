import styles from "./HeroSection.module.css";
const HeroSection = () => {
  return (
    <div className="padding-container">
      <div className={styles.hero_section}>
        <div className={styles.hero_section_content}>
          <h2>Crafting your Exceptional Dining Reservations</h2>
          <p>
            Reservation is a step into a world of gastronomic wonder. Reserve
            your table today and let us paint your culinary dreams into reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
