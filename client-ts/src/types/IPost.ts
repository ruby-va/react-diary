import { MoodTypes } from '@/types/index.ts';

export interface IPost {
  id: string;
  title: string;
  content: string;
  image: string | null;
  mood: MoodTypes;
  author: string;
}
