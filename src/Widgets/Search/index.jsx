import React, { useState, useContext, useEffect } from 'react';
import styles from './index.module.css';
import { TwelveDataContext } from '../../Context/SearchContext.jsx';
import { IoSearch } from "react-icons/io5";

const Search = () => {
  const [input, setInput] = useState('');
  const { searchTicker, searchResults } = useContext(TwelveDataContext);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (input.trim()) {
        searchTicker(input.trim());
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [input]);


  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  const resultArray = searchResults?.status === "ok" ? searchResults.data : [];

  const handleSearch = () => {
    if (input.trim()) {
      searchTicker(input.trim());
    }
  };

  return (
    <div className={styles.search}>
      <div className={styles.input}>
        <span><IoSearch size={15} /></span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search ticker (e.g., AAPL, TSLA)"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {(input.trim() && (resultArray.length > 0)) && (
        <ul
          style={{
            position: "absolute",
            top: "70px",
            left: "110px",
            backgroundColor: "#ffffffff",
            border: "2px solid #000000ff",
            borderRadius: "10px",
            listStyle: "none",
            padding: "0px 30px",
            margin: 0,
            width: "900px",
            maxHeight: "500px",
            overflowY: "scroll",
            color: "black",

          }}>

          {resultArray.length === 0 && <p>No results found.</p>}
          {resultArray.map((item, idx) => (
            <li className={styles.searchList} key={idx}>
              <div className={styles.headName}>{item.name}
                <span className={styles.symbolName}> {item.symbol}</span>
              </div>
              <div className={styles.subName}>
                <span>{item.country} ({item.currency})</span> <span className={styles.typeExchange}>{item.type} • {item.exchange}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
