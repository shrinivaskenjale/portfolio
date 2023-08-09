import Container from "../../ui/Container";
import Heading from "../../ui/Heading";
import styles from "./Education.module.css";
import EducationList from "./EducationList";

const Education = () => {
  return (
    <section className={styles.education}>
      <Container className={styles.educationContainer}>
        <Heading>Education</Heading>
        <EducationList />
      </Container>
    </section>
  );
};

export default Education;
