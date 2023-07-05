// import Menu from '@/components/Menu/Menu';
import logo from '@/assets/images/logo.svg';

import styles from './styles.module.scss';
import { useContext, useState } from 'react';
import Select from '@/components/ui/my-select';

type Props = {
  isSearchBar?: boolean;
};

const options = [
  {
    value: 'cry',
    title: 'Плачет',
  },
  {
    value: 'pensive',
    title: 'Задумчивый',
  },
  {
    value: 'happy',
    title: 'Счастливый',
  },
  {
    value: 'calm',
    title: 'Спокойный',
  },
];

const Index = (props: Props) => {
  const { isSearchBar = true } = props;
  const isAuth = true;

  const [mood, setMood] = useState('');
  const handleMoodSelect = (value: string) => {
    setMood(value);
  };
  const selectedMood = options.find((item) => item.value === mood);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const logout = () => {
    console.log('logout');
  };

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
                {/*<SearchBar className={styles.menuSearch} />*/}

                <Select
                  mode="rows"
                  options={options}
                  selected={selectedMood || null}
                  onChange={handleMoodSelect}
                  placeholder="Выберите настроение"
                  className={styles.menuSelect}
                />
              </>
            )}

            {/*<Menu />*/}
          </div>

          <div className="user">
            {isAuth ? (
              <button onClick={() => logout()}>Выйти</button>
            ) : (
              <button onClick={() => setIsModalOpen(true)}>Войти</button>
            )}
          </div>
          {/*<AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />*/}
        </div>
      </div>
    </header>
  );
};

export default Index;
