import Container from "../../ui/Container";
import Heading from "../../ui/Heading";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <Container className={styles.aboutContainer}>
        <img src="/programmer.svg" alt="prgrammer" className={styles.image} />
        <div className={styles.content}>
          <Heading align="start" className={styles.aboutHeading}>
            About me
          </Heading>
          <p>
            I am a passionate and self-motivated react developer who loves to
            create engaging and user-friendly web applications. I have learned
            react through various online courses and projects, and I am eager to
            apply my skills and knowledge in a professional setting.
          </p>
          <p>
            I have experience in using react hooks, redux, APIs, react query,
            and other popular libraries and frameworks. I am also proficient in
            HTML, CSS, JavaScript, and Git. I enjoy working in a team and
            learning from others, as well as solving problems and overcoming
            challenges. I am looking for a react developer job that will allow
            me to grow and contribute to the success of the company.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default About;
