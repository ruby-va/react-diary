import Modal from "@/components/Modal/Modal";
import styles from "./AuthModal.module.scss";
import MyInput from "@/components/MyInput/MyInput";

const AuthModal = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="authModal">
        <h1>Войдите в систему</h1>

        <MyInput
          className={styles.input}
          label="Логин"
          isLabelShown={true}
          placeholder="Введите логин"
          type="text"
          border={true}
          id="login"
        />
        <MyInput
          className={styles.input}
          label="Пароль"
          isLabelShown={true}
          placeholder="Введите пароль"
          type="password"
          border={true}
          id="password"
        />

        <button type="submit" className={styles.btn}>
          Войти
        </button>
      </div>
    </Modal>
  );
};
export default AuthModal;
