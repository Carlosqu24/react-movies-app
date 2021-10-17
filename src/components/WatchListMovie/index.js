import React, { useContext } from 'react'

import './WatchListMovie.css'

import { GlobalContext } from '../../context/GlobalContext'

export const WatchListMovie = ({ movie, imageUrl }) => {
      const { watchList, deleteWatchListMovie } = useContext(GlobalContext)

      return (
            <div className="watchlist-movie">
                  <div className="watchlist-movie__overlay">
                        <button onClick={() => deleteWatchListMovie(movie.id)} className="watchlist-movie__delete">Delete</button>
                  </div>
                  <img className="watchlist-movie__img" src={imageUrl} alt="" />
            </div>
      )
}
