import styles from "./MyTextarea.module.scss";

const MyTextarea = (props) => {
  const {
    label,
    value,
    type = "text",
    placeholder,
    onChange,
    isLabelShown = false,
    className,
    border = false,
    id,
    fieldClassName,
  } = props;
  return (
    <div className={`${styles.inputWrapper} ${className}`}>
      {label && (
        <label htmlFor={id} className={isLabelShown ? undefined : "sr-only"}>
          {label}
        </label>
      )}
      <textarea
        style={border ? { border: "1px solid black" } : undefined}
        type={type}
        value={value}
        className={`${styles.textarea} ${fieldClassName}`}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </div>
  );
};
export default MyTextarea;
