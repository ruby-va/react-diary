import Menu from "@/components/Menu/Menu";
import logo from "@/assets/images/logo.svg";
import SearchBar from "@/components/SearchBar/SearchBar";
import EmotionSelect from "@/components/EmotionSelect/EmotionSelect";

import styles from "./Header.module.scss";
import { useState } from "react";
import AuthModal from "@/components/AuthModal/AuthModal";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
            {isLoggedIn ? (
              <button onClick={() => console.log("Logout")}>Выйти</button>
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
export default Header;
