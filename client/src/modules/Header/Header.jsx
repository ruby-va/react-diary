import Menu from "@/components/Menu/Menu";
import logo from "@/assets/images/logo.svg";
import SearchBar from "@/components/SearchBar/SearchBar";
import EmotionSelect from "@/UI/EmotionSelect/EmotionSelect";

import styles from "./Header.module.scss";
import { useContext, useState } from "react";
import AuthModal from "@/modules/AuthModal/AuthModal";

import { Context } from "@/main";
import { observer } from "mobx-react-lite";

const Header = observer((props) => {
  const { isSearchBar = true } = props;
  const { store } = useContext(Context);

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
            {isSearchBar && (
              <>
                <SearchBar className={styles.menuSearch} />
                <EmotionSelect className={styles.menuSelect} />
              </>
            )}

            <Menu />
          </div>

          <div className="user">
            {store.authStore.isAuth ? (
              <button onClick={() => store.authStore.logout()}>Выйти</button>
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
});

export default Header;
