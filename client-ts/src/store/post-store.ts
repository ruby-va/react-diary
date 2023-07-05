import axios from 'axios';
import { makeAutoObservable } from 'mobx';
import PostService from '@/services/api/post-service.ts';
import { IPost } from '@/types';

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

  async getPosts() {
    this.setLoading(true);
    try {
      const response = await PostService.getAllPosts();
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
