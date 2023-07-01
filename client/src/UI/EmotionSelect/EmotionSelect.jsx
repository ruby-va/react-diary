import Select from "react-select";
import EmotionIcon from "@/UI/EmotionIcon/EmotionIcon";

import styles from "./EmotionSelect.module.scss";

function EmotionSelect(props) {
  const options = [
    {
      value: "cry",
      text: "Плачет",
    },
    {
      value: "pensive",
      text: "Задумчивый",
    },
    {
      value: "happy",
      text: "Счастливый",
    },
    {
      value: "calm",
      text: "Спокойный",
    },
  ];

  const { className, onChange, value } = props;

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      width: "100px",
      height: "60px",
      borderRadius: "12px",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        cursor: "pointer",
      };
    },
  };

  return (
    <Select
      styles={colourStyles}
      options={options}
      onChange={(o) => onChange(o)}
      getOptionLabel={(e) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <EmotionIcon title={e.text} emotion={e.value} size={24} />
        </div>
      )}
      placeholder={<EmotionIcon size={24} emotion="placeholder" />}
      className={`${className}`}
      value={value}
    ></Select>
  );
}
export default EmotionSelect;
