import Container from "../../ui/Container";
import Heading from "../../ui/Heading";
import SkillList from "./SkillList";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section className={styles.skills}>
      <Container className={styles.skillsContainer}>
        <Heading>Tech Stack</Heading>
        <SkillList />
      </Container>
    </section>
  );
};

export default Skills;
