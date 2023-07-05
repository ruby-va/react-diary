import { useContext, useState } from 'react';
import PostsList from '@/features/posts-list';
import { useEffect } from 'react';
import Header from '@/layout/header/Header.tsx';

const Index = () => {
  // const { store } = useContext(Context);
  // console.log(store);

  useEffect(() => {
    // store.postStore.getPosts();
  }, []);

  return (
    <div>
      <Header />
      <PostsList posts={[]} />
    </div>
  );
};

export default Index;
