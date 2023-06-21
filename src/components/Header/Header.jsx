import EmotionSelect from "../EmotionSelect/EmotionSelect";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.scss";
import logo from "@/assets/images/logo.svg";

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <div className={styles.logo}>
            <img src={logo} alt="Логотип" />
            <span>Дневник</span>
          </div>

          <div className={styles.menu}>
            <SearchBar />
            <EmotionSelect />
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
