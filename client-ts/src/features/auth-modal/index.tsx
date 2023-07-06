import styles from './styles.module.scss';
import { FormEvent, useContext, useState } from 'react';
import MyInput from '@/components/ui/my-input';
import Modal from '@/components/ui/modal';
import { Context } from '@/main.tsx';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Index = ({ isOpen, onClose }: Props) => {
  const { store } = useContext(Context);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerForm = {
    title: 'Зарегистрироваться',
    btnText: 'Регистрация',
    formHandler: async (e: FormEvent<EventTarget>) => {
      e.preventDefault();
      await store.authStore.registration(userEmail, password);
      if (store.authStore.isAuth) {
        onClose();
      }
    },
  };

  const loginForm = {
    title: 'Войдите в систему',
    btnText: 'Войти',
    formHandler: async (e: FormEvent<EventTarget>) => {
      e.preventDefault();
      await store.authStore.login(userEmail, password);
      if (store.authStore.isAuth) {
        onClose();
      }
    },
  };

  const { title, btnText, formHandler } = isLoginForm ? loginForm : registerForm;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form className="authModal" onSubmit={formHandler}>
        <h1>{title}</h1>

        <MyInput
          wrapperClassName={styles.input}
          labelText="Логин"
          isLabelShown={true}
          placeholder="Введите логин"
          type="text"
          border={true}
          id="login"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <MyInput
          wrapperClassName={styles.input}
          labelText="Пароль"
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

export default Index;
