import MyInput from "@/UI/MyInput/MyInput";
import styles from "./CreatePostForm.module.scss";
import { useState } from "react";
import EmotionSelect from "@/UI/EmotionSelect/EmotionSelect";
import SearchBar from "@/components/SearchBar/SearchBar";

const CreatePostForm = () => {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [mood, setMood] = useState();
  const [description, setDescription] = useState();
  const [searchTerm, setSearchTerm] = useState();

  return (
    <div className={styles.grid}>
      <div className={styles.formInfo}>
        <MyInput
          className={styles.input}
          label="Заголовок поста"
          isLabelShown={true}
          placeholder="Название"
          type="text"
          border={true}
          id="Название"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div>
          <EmotionSelect />
          <MyInput
            className={styles.input}
            label="Дата добавления поста, по умолчанию сегодня"
            placeholder="Дата"
            type="date"
            border={true}
            id="login"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.formImage}>
        <SearchBar />
      </div>
    </div>
  );
};
export default CreatePostForm;
