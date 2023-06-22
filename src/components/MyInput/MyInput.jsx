import styles from "./MyInput.module.scss";

function MyInput(props) {
  const {
    label,
    value,
    type,
    placeholder,
    onChange,
    isLabelShown = false,
    className,
  } = props;
  return (
    <div className={`${styles.inputWrapper} ${className}`}>
      {label && (
        <label htmlFor="input-field" className={!isLabelShown && "sr-only"}>
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        name={name}
        className={styles.input}
        id="input-field"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
export default MyInput;
