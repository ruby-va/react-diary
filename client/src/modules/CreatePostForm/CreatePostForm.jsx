import MyInput from "@/UI/MyInput/MyInput";
import styles from "./CreatePostForm.module.scss";
import { useContext, useState } from "react";
import EmotionSelect from "@/UI/EmotionSelect/EmotionSelect";
import MyButton from "@/UI/MyButton/MyButton";
import MyTextarea from "@/UI/MyTextarea/MyTextarea";
import ImageFinder from "@/components/ImageFinder/ImageFinder";

import { Context } from "@/main";
import { observer } from "mobx-react-lite";
import PostService from "@/services/PostService";

const CreatePostForm = observer(() => {
  const { store } = useContext(Context);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const [mood, setMood] = useState({ value: "cry", text: "Плачет" });
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title,
      content: description,
      date,
      mood: mood.value,
      image,
      author: store.authStore.user.id,
    };

    store.postStore.CreatePost(data);
  };

  const getImage = (image) => {
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
            label="Заголовок поста"
            placeholder="Название"
            type="text"
            border={true}
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className={styles.selectWrapper}>
            <EmotionSelect
              className={styles.select}
              value={mood}
              onChange={setMood}
            />
            <MyInput
              className={styles.input}
              label="Дата добавления поста, по умолчанию сегодня"
              placeholder="Дата"
              type="date"
              border={true}
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <MyTextarea
            fieldClassName={styles.textarea}
            label="Описание поста"
            placeholder="Описание"
            type="text"
            border={true}
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <MyButton className={styles.btnSubmit}>Создать</MyButton>
        </form>
        <div className={styles.formImage}>
          <ImageFinder getImage={getImage} />
        </div>
      </div>
    </div>
  );
});
export default CreatePostForm;
