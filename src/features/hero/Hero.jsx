import Container from "../../ui/Container";
import Line from "../../ui/Line";
import styles from "./Hero.module.css";
import Links from "./Links";
import { FaReact } from "react-icons/fa";

const Hero = () => {
  return (
    <header className={styles.hero}>
      <Container className={styles.heroContainer}>
        <div className={styles.content}>
          <div>
            <Line />
            <h1>I&apos;m Shrinivas Kenjale</h1>
          </div>
          <h2>
            <span>React Developer</span>
            <FaReact className={styles.reactIcon} />
          </h2>
          {/* <Button to="/projects">View projects</Button> */}
          <Links />
        </div>
        <img
          src="/shrinivas-kenjale.jpg"
          alt="Shrinivas Kenjale"
          className={styles.image}
        />
      </Container>
    </header>
  );
};

export default Hero;
