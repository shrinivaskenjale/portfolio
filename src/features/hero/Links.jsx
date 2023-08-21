import styles from "./Links.module.css";
import { AiFillMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
const Links = () => {
  return (
    <ul className={styles.links}>
      <li>
        <a
          href="https://github.com/shrinivaskenjale?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/shrinivaskenjale/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </li>
      <li>
        <a href="mailto:sskenjale22@outlook.com">
          <AiFillMail />
        </a>
      </li>
    </ul>
  );
};

export default Links;
