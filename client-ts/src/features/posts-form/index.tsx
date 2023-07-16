import styles from './styles.module.scss';
import { FormEvent, useContext, useState } from 'react';
import MyButton from '@/components/ui/my-button';

import { Context } from '@/main';
import { observer } from 'mobx-react-lite';

import MyInput from '@/components/ui/my-input';
import ImageSelector from '@/components/image-selector';
import MoodSelect from '@/components/ui/mood-select';
import { IPostImage } from '@/types/IPostImage.ts';
import { MoodOption } from '@/types';
import { MoodVariants as options } from '@/constants/mood-variants.ts';
import MyTextarea from '@/components/ui/my-textarea';
import { IPost } from '@/types/IPost.ts';

const Index = observer(() => {
  const { store } = useContext(Context);

  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const [mood, setMood] = useState<MoodOption | null>({ value: 'cry', label: 'Плачет' });
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<IPostImage>();

  const handleSubmit = (e: FormEvent<EventTarget>) => {
    e.preventDefault();

    if (!title || !date || !image || !description || !mood) {
      console.log('error fill all inputs');
      return;
    }

    const data: IPost = {
      title,
      content: description,
      date,
      mood: mood.value,
      image: image.filename,
      author: store.authStore.user.id,
    };

    store.postStore.CreatePost(data);
  };

  const getImage = (image: IPostImage) => {
    console.log(image);
    setImage(image);
  };

  return (
    <div className="container">
      {store.postStore.isLoading && <h1>Отправка формы...</h1>}
      <div className={styles.grid}>
        <form className={styles.formInfo} onSubmit={handleSubmit}>
          <MyInput
            className={styles.input}
            labelText="Заголовок поста"
            placeholder="Название"
            type="text"
            border={true}
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className={styles.selectWrapper}>
            <MoodSelect
              className={styles.select}
              options={options}
              onChange={(option: MoodOption | null) => setMood(option)}
              value={mood}
              isSearchable={false}
            />
            <MyInput
              className={styles.input}
              labelText="Дата добавления поста, по умолчанию сегодня"
              placeholder="Дата"
              type="date"
              border={true}
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <MyTextarea
            className={styles.textarea}
            labelText="Описание поста"
            placeholder="Описание"
            border={true}
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <MyButton className={styles.btnSubmit} colorType="green">
            Создать
          </MyButton>
        </form>
        <div className={styles.formImage}>
          <ImageSelector getImage={getImage} />
        </div>
      </div>
    </div>
  );
});
export default Index;
