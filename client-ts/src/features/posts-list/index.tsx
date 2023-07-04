import styles from './style.module.scss';
import { FC } from 'react';
import { IPostPreview } from '@/types';
import PostPreview from '@/components/post-preview';

interface Props {
  posts: IPostPreview[];
}

const Index: FC<Props> = (props) => {
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
