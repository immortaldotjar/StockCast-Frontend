import { createContext, useState } from 'react';
import axios from 'axios';

export const TwelveDataContext = createContext();

const TwelveDataProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState({});
  const API_KEY = import.meta.env.VITE_API_KEY_TWELVE_DATA;

  const searchTicker = async (symbol) => {
    try {
      const response = await axios.get(`https://api.twelvedata.com/stocks?symbol=${symbol}&apikey=${API_KEY}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching ticker data:", error);
      setSearchResults({ status: "error", message: error.message });
    }
  };

  return (
    <TwelveDataContext.Provider value={{ searchTicker, searchResults }}>
      {children}
    </TwelveDataContext.Provider>
  );
};

export default TwelveDataProvider;
