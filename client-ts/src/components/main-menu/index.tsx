import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { mainMenu } from '@/constants/main-menu.ts';

const Index = () => {
  return (
    <div className={styles.menu}>
      {mainMenu.map((item) => (
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
};
export default Index;
