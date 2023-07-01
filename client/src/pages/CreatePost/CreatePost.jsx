import CreatePostForm from "@/modules/CreatePostForm/CreatePostForm.jsx";
import Header from "@/modules/Header/Header";

const CreatePost = () => {
  return (
    <>
      <Header isSearchBar={false} />
      <CreatePostForm />;
    </>
  );
};
export default CreatePost;
