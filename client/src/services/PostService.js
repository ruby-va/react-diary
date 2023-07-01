import $api from "@/http";

export default class PostService {
  static async getAllPosts() {
    return $api.get("/posts/all");
  }

  static async getFilteredPosts(mood, searchString) {
    return $api.post("/posts/all", { mood, searchString });
  }

  static async createPost(mood, searchString) {
    return $api.post("/posts/all", { mood, searchString });
  }
}
