import styles from './style.module.scss';
import PostPreview from '@/components/post-preview';
import { IPost } from '@/types/IPost.ts';

interface Props {
  posts: IPost[];
}

const Index = ({ posts }: Props) => {
  console.log(posts);
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
