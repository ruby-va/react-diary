import $api from "@/http";

export default class ImageService {
  static async getAllImages() {
    return $api.get("/images/all");
  }

  static async getFilteredImages(mood, searchString) {
    return $api.post("/posts/all", { mood, searchString });
  }

  static async createImage(mood, searchString) {
    return $api.post("/posts/all", { mood, searchString });
  }
}
