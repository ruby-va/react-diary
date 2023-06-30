import CreatePostForm from "@/modules/CreatePostForm/CreatePostForm.jsx";
import Header from "@/modules/Header/Header";

const CreatePost = () => {
  return (
    <div className="container">
      <Header isSearchBar={false} />
      <CreatePostForm />;
    </div>
  );
};
export default CreatePost;
