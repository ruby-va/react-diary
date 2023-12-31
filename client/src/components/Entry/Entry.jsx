import EmotionIcon from "@/UI/EmotionIcon/EmotionIcon";
import styles from "./Entry.module.scss";

function Entry(props) {
  const { image, title, content, date, mood } = props;

  return (
    <article
      className={styles.entry}
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      <div className={styles.mood}>
        <EmotionIcon emotion={mood} size={18} text="fsd" />
      </div>
      <div className={styles.content}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.date}>{date}</span>
        </div>
        <div className={styles.text}>{content.substring(0, 30) + "..."}</div>
      </div>
    </article>
  );
}
export default Entry;
