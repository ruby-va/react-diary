import pensiveIcon from "@/assets/images/emotions/pensive.png";
import calmIcon from "@/assets/images/emotions/calm.png";
import happyIcon from "@/assets/images/emotions/happy.png";
import cryIcon from "@/assets/images/emotions/cry.png";
import placeholderIcon from "@/assets/images/emotions/smile-mouth-open.png";

import styles from "./EmotionIcon.module.scss";

function EmotionIcon(props) {
  const { emotion = "placeholder", size, ...otherDefaultProps } = props;

  const iconsMap = {
    calm: calmIcon,
    happy: happyIcon,
    pensive: pensiveIcon,
    cry: cryIcon,
    placeholder: placeholderIcon,
  };

  return (
    <img
      className={styles.icon}
      {...otherDefaultProps}
      width={size}
      height={size}
      src={iconsMap[emotion]}
      alt=""
    />
  );
}
export default EmotionIcon;
