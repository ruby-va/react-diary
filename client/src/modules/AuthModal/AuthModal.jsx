import Modal from "@/components/Modal/Modal";
import styles from "./AuthModal.module.scss";
import MyInput from "@/UI/MyInput/MyInput";
import { useContext, useState } from "react";

import { Context } from "@/main";
import { observer } from "mobx-react-lite";

const AuthModal = (props) => {
  const { store } = useContext(Context);
  const { isOpen, onClose } = props;
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerForm = {
    title: "Зарегистрироваться",
    btnText: "Регистрация",
    formHandler: (e) => {
      e.preventDefault();
      store.registration(userEmail, password);
    },
  };

  const loginForm = {
    title: "Войдите в систему",
    btnText: "Войти",
    formHandler: (e) => {
      e.preventDefault();
      store.login(userEmail, password);
    },
  };

  const { title, btnText, formHandler } = isLoginForm
    ? loginForm
    : registerForm;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form className="authModal" onSubmit={formHandler}>
        <h1>{title}</h1>

        <MyInput
          className={styles.input}
          label="Логин"
          isLabelShown={true}
          placeholder="Введите логин"
          type="text"
          border={true}
          id="login"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <MyInput
          className={styles.input}
          label="Пароль"
          isLabelShown={true}
          placeholder="Введите пароль"
          type="password"
          border={true}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className={styles.btn}>
          {btnText}
        </button>

        {isLoginForm ? (
          <div className={styles.formChanger}>
            <span>Ещё нет аккаунта?</span>
            <button type="button" onClick={() => setIsLoginForm(false)}>
              Регистрация
            </button>
          </div>
        ) : (
          <div className={styles.formChanger}>
            <span>Уже есть аккаунт?</span>
            <button type="button" onClick={() => setIsLoginForm(true)}>
              Войти
            </button>
          </div>
        )}
      </form>
    </Modal>
  );
};
export default observer(AuthModal);
