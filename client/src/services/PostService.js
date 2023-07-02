import $api from "@/http";

export default class PostService {
  static async getAllPosts() {
    return $api.get("/posts/all");
  }

  static async getFilteredPosts(mood, searchString) {
    return $api.post("/posts/all", { mood, searchString });
  }

  static async createPost(data) {
    const { title, content, image = null, date, author, mood } = data;
    return $api.post("/posts/create", {
      title,
      content,
      mood,
      image,
      author,
      date,
    });
  }
}
