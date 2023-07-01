import AuthStore from "@/store/AuthStore";
import PostStore from "@/store/PostStore";

export default class RootStore {
  constructor() {
    this.authStore = new AuthStore();
    this.postStore = new PostStore();
  }
}
