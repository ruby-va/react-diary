import $api from '@/services/shared/my-axios.ts';
import { MoodTypes } from '@/types';
import { PostResponse } from '@/types/response/post-response.ts';
import { AxiosResponse } from 'axios';
import { IPost } from '@/types/IPost.ts';

export default class PostService {
  static async getAllPosts(): Promise<AxiosResponse<PostResponse[]>> {
    return $api.get('/posts/all');
  }

  static async getFilteredPosts(
    mood: MoodTypes,
    searchString: string,
  ): Promise<AxiosResponse<PostResponse[]>> {
    return $api.get(`/posts/filtered?mood=${mood}&searchString=${searchString}`);
  }

  static async createPost(data: IPost): Promise<AxiosResponse<PostResponse>> {
    const { title, content, image = null, date, author, mood } = data;
    return $api.post<PostResponse>('/posts/create', {
      title,
      content,
      mood,
      image,
      author,
      date,
    });
  }
}
