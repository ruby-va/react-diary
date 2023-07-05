import logo from '@/assets/images/logo.svg';

import styles from './styles.module.scss';
import { useContext, useState } from 'react';
import MoodSelect from '@/components/ui/mood-select';
import { MoodTypes } from '@/types';
import Searchbar from '@/components/searchbar';
import MainMenu from '@/components/main-menu';
import AuthModal from '@/features/auth-modal';
import { Context } from '@/main.tsx';
import { observer } from 'mobx-react-lite';

type Props = {
  isSearchBar?: boolean;
};

interface SelectOption {
  readonly label: string;
  readonly value: MoodTypes;
}

const options: SelectOption[] = [
  {
    value: 'cry',
    label: 'Плачет',
  },
  {
    value: 'pensive',
    label: 'Задумчивый',
  },
  {
    value: 'happy',
    label: 'Счастливый',
  },
  {
    value: 'calm',
    label: 'Спокойный',
  },
];

const Index = observer((props: Props) => {
  const { isSearchBar = true } = props;
  const { store } = useContext(Context);

  const [mood, setMood] = useState<SelectOption | null>({
    value: 'cry',
    label: 'Плачет',
  });
  const handleMoodSelect = (option: SelectOption | null) => {
    console.log(mood);
    setMood(option);
  };

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
                <Searchbar className={styles.menuSearch} />

                <MoodSelect
                  options={options}
                  onChange={handleMoodSelect}
                  className={styles.menuSelect}
                  value={mood}
                  isSearchable={false}
                />
              </>
            )}

            <MainMenu />
          </div>

          <div className="user">
            {store.authStore.isAuth ? (
              <button onClick={() => store.authStore.logout()}>Выйти</button>
            ) : (
              <button onClick={() => setIsModalOpen(true)}>Войти</button>
            )}
          </div>
          <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      </div>
    </header>
  );
});

export default Index;
