import styles from "./MyInput.module.scss";

function MyInput(props) {
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
  } = props;
  return (
    <div className={`${styles.inputWrapper} ${className}`}>
      {label && (
        <label htmlFor={id} className={isLabelShown ? undefined : "sr-only"}>
          {label}
        </label>
      )}
      <input
        style={border ? { border: "1px solid black" } : undefined}
        type={type}
        value={value}
        className={styles.input}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
export default MyInput;
