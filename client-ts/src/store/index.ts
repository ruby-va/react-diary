import AuthStore from '@/store/auth-store.ts';
import PostStore from '@/store/post-store.ts';

export default class RootStore {
  authStore;
  postStore;

  constructor() {
    this.authStore = new AuthStore();
    this.postStore = new PostStore();
  }
}
