import Line from "./Line";
import styles from "./Heading.module.css";

const Heading = ({ children, align = "center", className }) => {
  return (
    <div className={`${styles.heading} ${styles[align]} ${className}`}>
      <h2>{children}</h2>
      <Line />
    </div>
  );
};

export default Heading;
