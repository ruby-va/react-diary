import { makeAutoObservable } from 'mobx';
import PostService from '@/services/api/post-service.ts';
import { MoodTypes } from '@/types';
import { IPost } from '@/types/IPost.ts';

export default class PostStore {
  posts: IPost[] = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setPosts(posts: IPost[]) {
    this.posts = posts;
  }

  setLoading(bool: boolean) {
    this.isLoading = bool;
  }

  async getPosts(mood: MoodTypes = 'happy', searchTerm = '') {
    this.setLoading(true);
    try {
      const response = await PostService.getFilteredPosts(mood, searchTerm);
      this.setPosts(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      this.setLoading(false);
    }
  }

  async CreatePost(data: IPost) {
    this.setLoading(true);
    try {
      const response = await PostService.createPost(data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        this.setLoading(false);
      }, 500);
    }
  }
}
