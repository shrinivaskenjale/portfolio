import styles from "./Button.module.css";

const Button = ({
  className,
  children,
  to,
  type = "primary",
  linkType = "internal",
}) => {
  if (to) {
    return (
      <a
        target={linkType === "external" ? "_blank" : "_self"}
        to={to}
        className={`${styles.button} ${styles[type]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`${styles.button} ${styles[type]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;

// todo - add accessibilty
