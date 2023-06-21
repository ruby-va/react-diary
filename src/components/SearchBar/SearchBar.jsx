import { useState } from "react";

function SearchBar() {
  const [value, setValue] = useState();

  return (
    <div className="searchBar">
      <label htmlFor="">Поиск</label>
      <input type="text" placeholder="Поиск" />
    </div>
  );
}
export default SearchBar;
