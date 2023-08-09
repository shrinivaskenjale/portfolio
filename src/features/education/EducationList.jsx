import EducationItem from "./EducationItem";
import styles from "./EducationList.module.css";
import { FaCertificate } from "react-icons/fa6";
const EducationList = () => {
  return (
    <ul className={styles.educationList}>
      {data.map((ed) => (
        <EducationItem key={ed.degree} details={ed} />
      ))}
    </ul>
  );
};

export default EducationList;

const data = [
  {
    degree: "B.Tech in Computer Engineering",
    university: "Dr. Babasaheb Ambedkar Technological University",
    marks: "9.40 CGPA",
    badge: <FaCertificate />,
  },
  {
    degree: "HSC",
    university: "State Board",
    marks: "87.54%",
    badge: "XII",
  },
  {
    degree: "SSC",
    university: "State Board",
    marks: "96.40%",
    badge: "X",
  },
];
