import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ImgHTMLAttributes,
  ButtonHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}
export interface InputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}
export interface TextAreaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}
export interface LabelProps
  extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {}

export interface ImageProps
  extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {}

export type MoodTypes = 'calm' | 'pensive' | 'happy' | 'cry' | 'all';

export interface IMoodIcon extends ImageProps {
  size: number;
  emotion: MoodTypes;
}

export interface MoodOption {
  readonly label: string;
  readonly value: MoodTypes;
}
