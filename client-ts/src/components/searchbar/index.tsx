import { ChangeEvent, useState } from 'react';

import styles from './styles.module.scss';
import MyInput from '@/components/ui/my-input';

interface Props {
  className: string;
}

const Index = ({ className, ...otherDefaultProps }: Props) => {
  const [searchValue, setSearchValue] = useState('');

  console.log('className', className);

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  return (
    <MyInput
      wrapperClassName={`${styles.searchInput} ${className}`}
      value={searchValue}
      placeholder="Поиск"
      onChange={searchHandler}
      labelText="Поиск записей"
      id="search"
      {...otherDefaultProps}
    />
  );
};
export default Index;
