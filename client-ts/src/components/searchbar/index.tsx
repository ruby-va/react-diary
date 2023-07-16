import { ChangeEvent, useState } from 'react';

import styles from './styles.module.scss';
import MyInput from '@/components/ui/my-input';

interface Props {
  className: string;
  searchValue: string;
  setSearchValue: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Index = ({
  className,
  searchValue,
  setSearchValue,
  ...otherDefaultProps
}: Props) => {
  console.log('className', className);

  return (
    <MyInput
      wrapperClassName={`${styles.searchInput} ${className}`}
      value={searchValue}
      placeholder="Поиск"
      onChange={setSearchValue}
      labelText="Поиск записей"
      id="search"
      {...otherDefaultProps}
    />
  );
};
export default Index;
