import $api from '@/services/shared/my-axios.ts';
import { MoodTypes } from '@/types';
import { AxiosResponse } from 'axios';
import { IPostImage } from '@/types/IPostImage.ts';

export default class ImageService {
  static async getAllImages(): Promise<AxiosResponse<IPostImage[]>> {
    return $api.get<IPostImage[]>('/images/all');
  }

  static async getFilteredImages(mood: MoodTypes, searchString: string) {
    return $api.post('/posts/all', { mood, searchString });
  }

  static async createImage(mood: MoodTypes, searchString: string) {
    return $api.post('/posts/all', { mood, searchString });
  }
}
