import Header from '@/layout/header/Header.tsx';
import PostsForm from '@/features/posts-form';

const Index = () => {
  return (
    <>
      <Header isSearchBar={false} />
      <PostsForm />;
    </>
  );
};
export default Index;
