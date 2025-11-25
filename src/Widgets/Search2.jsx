
import styles from '../Widgets/css/search.module.css';
import { IoSearch } from "react-icons/io5";
import React, { useState } from 'react';

const Search2 = ({ onSearch, placeholder }) => {
  const [input, setInput] = useState("");

  const Submit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (trimmedInput === '') {
      onSearch(''); // trigger reset
    } else {
      onSearch(trimmedInput.toUpperCase());
    }
  };
  return (
    <form className={styles.searchContainer} onSubmit={Submit}>
      <IoSearch className={styles.searchIcon} />
      <input
        type="text"
        className={styles.searchInput}
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className={styles.searchBtn}>Search</button>
    </form>
  );
};

export default Search2;
