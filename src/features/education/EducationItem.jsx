import Badge from "./Badge";
import styles from "./EducationItem.module.css";
const EducationItem = ({ details }) => {
  const { degree, university, marks, badge } = details;
  return (
    <li className={styles.educationItem}>
      <Badge>{badge}</Badge>
      <div className={styles.content}>
        <h4>{degree}</h4>
        <div>{university}</div>
        <div className={styles.marks}>{marks}</div>
      </div>
    </li>
  );
};

export default EducationItem;
