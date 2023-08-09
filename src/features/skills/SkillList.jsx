import Skill from "./Skill";
import {
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNodedotjs,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiRedux,
} from "react-icons/si";
import styles from "./SkillList.module.css";

const SkillList = () => {
  return (
    <ul className={styles.skillList}>
      {data.map((skill) => (
        <Skill key={skill.label} skill={skill} />
      ))}
    </ul>
  );
};

export default SkillList;

const data = [
  {
    icon: <SiHtml5 />,
    label: "HTML",
  },
  {
    icon: <SiCss3 />,
    label: "CSS",
  },
  {
    icon: <SiJavascript />,
    label: "JavaScript",
  },
  {
    icon: <SiReact />,
    label: "React",
  },
  {
    icon: <SiReactrouter />,
    label: "React Router",
  },
  {
    icon: <SiRedux />,
    label: "Redux Toolkit",
  },
  {
    icon: <SiReactquery />,
    label: "React Query",
  },
  {
    icon: <SiReacthookform />,
    label: "React Hook Form",
  },
  {
    icon: <SiNodedotjs />,
    label: "Node.js",
  },
  {
    icon: <SiExpress />,
    label: "Express",
  },
  {
    icon: <SiMongodb />,
    label: "MongoDB",
  },
  {
    icon: <SiMongoose />,
    label: "Mongoose",
  },
];
