import Menu from "@/components/Menu/Menu";
import logo from "@/assets/images/logo.svg";
import SearchBar from "@/components/SearchBar/SearchBar";
import EmotionSelect from "@/components/EmotionSelect/EmotionSelect";

import styles from "./Header.module.scss";
import { useContext, useState } from "react";
import AuthModal from "@/components/AuthModal/AuthModal";

import { Context } from "@/main";
import { observer } from "mobx-react-lite";

function Header() {
  const { store } = useContext(Context);
  const { isAuth, logout } = store;
  console.log(store);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <div className={styles.logo}>
            <img src={logo} alt="Логотип" />
            <span>Дневник</span>
          </div>

          <div className={styles.menu}>
            <SearchBar className={styles.menuSearch} />
            <EmotionSelect className={styles.menuSelect} />
            <Menu />
          </div>

          <div className="user">
            {isAuth ? (
              <button onClick={() => logout()}>Выйти</button>
            ) : (
              <button onClick={() => setIsModalOpen(true)}>Войти</button>
            )}
          </div>
          <AuthModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </div>
    </header>
  );
}
export default observer(Header);
