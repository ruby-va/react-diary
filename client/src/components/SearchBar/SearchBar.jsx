import { useState } from "react";
import MyInput from "@/components/MyInput/MyInput";

import styles from "./SearchBar.module.scss";

function SearchBar({ className }) {
  const [searchValue, setSearchValue] = useState("");

  console.log("className", className);

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  return (
    <MyInput
      className={`${styles.searchInput} ${className}`}
      value={searchValue}
      placeholder="Поиск"
      onChange={searchHandler}
      label="Поиск записей"
      id="search"
    />
  );
}
export default SearchBar;
