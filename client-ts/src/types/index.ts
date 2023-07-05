import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ImgHTMLAttributes,
} from 'react';

export interface InputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}
export interface LabelProps
  extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {}

export interface ImageProps
  extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {}

export interface IPost {
  id: string;
  title: string;
  image: string;
  date: string;
  author: string;
  content: string;
  mood: MoodTypes;
}

export type MoodTypes = 'calm' | 'pensive' | 'happy' | 'cry' | 'default';

export interface IMoodIcon extends ImageProps {
  size: number;
  emotion: MoodTypes;
}
