import styles from "./MyButton.module.scss";

const MyButton = (props) => {
  const { colorType = "green", children, className } = props;
  const btnStyles = {
    green: {
      background: "#61b15a",
      color: "#fff",
    },
    orange: {
      background: "#FFCE89",
      color: "#000",
    },
  };

  return (
    <button
      className={`${styles.btn} ${className}`}
      style={{
        backgroundColor: btnStyles[colorType].background,
        color: btnStyles[colorType].color,
      }}
    >
      {children}
    </button>
  );
};
export default MyButton;
