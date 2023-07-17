import logo from '@/assets/images/logo.svg';

import styles from './styles.module.scss';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import MoodSelect from '@/components/ui/mood-select';
import { MoodOption } from '@/types';
import Searchbar from '@/components/searchbar';
import MainMenu from '@/components/main-menu';
import AuthModal from '@/features/auth-modal';
import { Context } from '@/main.tsx';
import { observer } from 'mobx-react-lite';
import { MoodVariants } from '@/constants/mood-variants.ts';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from '@/hooks/useDebounce.ts';

type Props = {
  isSearchBar?: boolean;
  isMenu?: boolean;
};

const options: MoodOption[] = [
  {
    value: 'all',
    label: 'Все',
  },
  ...MoodVariants,
];

const Index = observer(({ isMenu = true, isSearchBar = true }: Props) => {
  const { store } = useContext(Context);
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mood, setMood] = useState<MoodOption | null>({
    value: 'all',
    label: 'Все',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(getFilteredPosts, 500);

  function getFilteredPosts() {
    store.postStore.getPosts(mood?.value, searchTerm);
  }

  useEffect(() => {
    debouncedSearch();
  }, [mood, searchTerm]);

  const handleMoodSelect = (option: MoodOption | null) => {
    setMood(option);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const logout = async () => {
    await store.authStore.logout();
    navigate('/');
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
                <Searchbar
                  className={styles.menuSearch}
                  searchValue={searchTerm}
                  setSearchValue={handleSearch}
                />

                <MoodSelect
                  options={options}
                  onChange={handleMoodSelect}
                  className={styles.menuSelect}
                  value={mood}
                  isSearchable={false}
                />
              </>
            )}

            {isMenu && <MainMenu />}
          </div>

          <div className="user">
            {store.authStore.isAuth ? (
              <button onClick={() => logout()}>Выйти</button>
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
