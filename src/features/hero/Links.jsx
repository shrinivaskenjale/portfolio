import styles from "./Links.module.css";
import { AiFillMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
const Links = () => {
  return (
    <ul className={styles.links}>
      <li>
        <a href="https://github.com/shrinivaskenjale?tab=repositories">
          <AiFillGithub />
        </a>
      </li>
      <li>
        <a href="#">
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
