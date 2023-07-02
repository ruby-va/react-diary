import axios from "axios";
import { makeAutoObservable } from "mobx";
import PostService from "@/services/PostService";

export default class PostStore {
  posts = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setPosts(posts) {
    this.posts = posts;
  }

  setLoading(bool) {
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

  async CreatePost(data) {
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
