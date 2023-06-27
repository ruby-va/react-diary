import Modal from "@/components/Modal/Modal";
import styles from "./AuthModal.module.scss";
import MyInput from "@/components/MyInput/MyInput";
import { useState } from "react";

const AuthModal = (props) => {
  const { isOpen, onClose } = props;
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const registerForm = {
    title: "Зарегистрироваться",
    btnText: "Регистрация",
    formHandler: (e) => {
      e.preventDefault();
      const register = async () => {
        try {
          const rawResponse = await fetch(
            "http://localhost:5001/api/auth/registration",
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ password, username: login }),
            }
          );
          const content = await rawResponse.json();
          console.log(content);
        } catch (error) {
          console.log(error);
        }
      };

      register();
    },
  };

  const loginForm = {
    title: "Войдите в систему",
    btnText: "Войти",
    formHandler: (e) => {
      e.preventDefault();

      const loginFetch = async () => {
        try {
          const rawResponse = await fetch(
            "http://localhost:5001/api/auth/login",
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                password,
                username: login,
              }),
            }
          );
          const content = await rawResponse.json();
          console.log(content);
        } catch (error) {
          console.log(error);
        }
      };

      loginFetch();
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
          value={login}
          onChange={(e) => setLogin(e.target.value)}
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
export default AuthModal;
