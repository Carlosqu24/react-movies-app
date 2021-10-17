import React, { useState, createContext } from 'react';


const initialState = {}
const initialWatchList = [];

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
      const [movieToSearch, setMovieToSearch] = useState({});
      const [watchList, setWatchList] = useState(initialWatchList);

      const deleteWatchListMovie = (id) => {
            const newData = watchList.filter(item => item.id != id)

            setWatchList(newData);

            alert('Movie deleted')
      };

      const value = { 
            movieToSearch, 
            setMovieToSearch,
            watchList,
            setWatchList,
            deleteWatchListMovie
      };

      return (
            <GlobalContext.Provider value={value}>
                  { children }
            </GlobalContext.Provider>
      )
}
