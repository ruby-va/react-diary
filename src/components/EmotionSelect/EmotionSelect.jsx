import Select from "react-select";
import EmotionIcon from "../EmotionIcon/EmotionIcon";
import styles from "./EmotionSelect.module.scss";

function EmotionSelect() {
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

  const handleChange = (selectedValue) => {
    console.log(selectedValue);
  };

  return (
    <Select
      styles={colourStyles}
      options={options}
      onChange={handleChange}
      getOptionLabel={(e) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <EmotionIcon title={e.text} emotion={e.value} size={24} />
          {/* <span style={{ marginLeft: 5 }}>{e.text}</span> */}
        </div>
      )}
      placeholder={<EmotionIcon size={24} emotion="placeholder" />}
    >
      fff
    </Select>
  );
  //   return (
  //     <div>
  //       <EmotionIcon emotion="pensive" />
  //     </div>
  //   );
}
export default EmotionSelect;
