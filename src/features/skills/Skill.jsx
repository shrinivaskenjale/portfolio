import styles from "./Skill.module.css";

const Skill = ({ skill }) => {
  const { icon, label } = skill;
  return (
    <li className={styles.skill}>
      {icon}
      <span>{label}</span>
    </li>
  );
};

export default Skill;
