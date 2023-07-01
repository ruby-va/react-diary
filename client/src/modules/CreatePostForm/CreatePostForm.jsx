import MyInput from "@/UI/MyInput/MyInput";
import styles from "./CreatePostForm.module.scss";
import { useState } from "react";
import EmotionSelect from "@/UI/EmotionSelect/EmotionSelect";
import SearchBar from "@/components/SearchBar/SearchBar";
import MyButton from "@/UI/MyButton/MyButton";
import MyTextarea from "@/UI/MyTextarea/MyTextarea";

const CreatePostForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const [mood, setMood] = useState({ value: "cry", text: "Плачет" });
  const [description, setDescription] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, date, mood, description, searchTerm);
  };

  return (
    <div className="container">
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
          <SearchBar
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
export default CreatePostForm;
