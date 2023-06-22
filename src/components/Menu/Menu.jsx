import { Link } from "react-router-dom";
import styles from "./Menu.module.scss";
import displayGridIcon from "@/assets/images/icons/display-grid.svg";
import penIcon from "@/assets/images/icons/pen.svg";

function Menu() {
  const menu = [
    {
      link: "/",
      text: "Список",
      icon: displayGridIcon,
      background: "#FFCE89",
      color: "#000",
    },
    {
      link: "add-note",
      text: "Запись",
      icon: penIcon,
      background: "#61b15a",
      color: "#fff",
    },
  ];
  return (
    <div className={styles.menu}>
      {menu.map((item) => (
        <Link
          key={item.link}
          to={item.link}
          style={{ backgroundColor: item.background, color: item.color }}
          className={styles.link}
        >
          <img className={styles.icon} src={item.icon} alt="" />
          {item.text}
        </Link>
      ))}
    </div>
  );
}
export default Menu;
