import styles from './style.module.scss';
import { IPost } from '@/types';
import PostPreview from '@/components/post-preview';

interface Props {
  posts: IPost[];
}

const Index = (props: Props) => {
  const { posts } = props;

  return (
    <section className={styles.entries}>
      <div className="container">
        <div className={styles.entriesGrid}>
          {posts.map((entry) => (
            <PostPreview key={entry.id} {...entry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Index;
