import React, { useState, useContext } from 'react'

import './SearchBar.css'

import { GlobalContext } from '../../context/GlobalContext';

export const SearchBar = () => {
      const [search, setSearch] = useState();

      const { movieToSearch, setMovieToSearch } = useContext(GlobalContext);

      const handleChange = (e) => setSearch(e.target.value);

      const handleClick = (e) => {
            setMovieToSearch(search);
      };

      return (
            <div className="search-bar">
                  <input 
                        className="search-input"
                        type="text" 
                        placeholder="Write the movie to search"
                        onChange={handleChange}
                  />

                  <button
                        type="submit"
                        onClick={handleClick}
                        className="search-btn">
                        Search
                  </button>
            </div>
      )
}
