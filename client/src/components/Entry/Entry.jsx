import EmotionIcon from "@/UI/EmotionIcon/EmotionIcon";
import styles from "./Entry.module.scss";

function Entry(props) {
  const { image, title, text, date, emotion = "calm" } = props;

  return (
    <article
      className={styles.entry}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.mood}>
        <EmotionIcon emotion={emotion} size={18} text="fsd" />
      </div>
      <div className={styles.content}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.date}>{date}</span>
        </div>
        <div className={styles.text}>{text.substring(0, 30) + "..."}</div>
      </div>
    </article>
  );
}
export default Entry;
