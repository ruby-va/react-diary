import styles from './styles.module.scss';

import MoodIcon from '@/components/ui/mood-icon';
import { IPost } from '@/types/IPost.ts';

const Index = ({ content, mood, title, image, date }: IPost) => {
  return (
    <article
      className={styles.entry}
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      <div className={styles.mood}>
        <MoodIcon emotion={mood} size={18} />
      </div>
      <div className={styles.content}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.date}>{date}</span>
        </div>
        <div className={styles.text}>{content.substring(0, 30) + '...'}</div>
      </div>
    </article>
  );
};

export default Index;
