import { useContext, useState } from 'react';
import PostsList from '@/features/posts-list';
import Header from '@/layout/header/Header.tsx';
import { Context } from '@/main.tsx';
import { observer } from 'mobx-react-lite';

const Index = observer(() => {
  const { store } = useContext(Context);

  return (
    <div>
      <Header />
      <PostsList posts={store.postStore.posts} />
    </div>
  );
});

export default Index;
