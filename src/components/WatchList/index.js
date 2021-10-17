import React, { useContext } from 'react'

import './WatchList.css'

// CONTEXT
import { GlobalContext } from '../../context/GlobalContext'

// COMPONENTS
import { WatchListMovie } from '../WatchListMovie'

export const WatchList = () => {

      const { watchList, setWatchList } = useContext(GlobalContext)

      return (
            <div className="watchlist-container">
                  {
                        watchList.map(movie => (
                              <WatchListMovie 
                                    key={movie.id}
                                    movie={movie}
                                    poster_path={movie.poster_path}
                                    imageUrl={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                              />
                        ))
                  }
            </div>
      )
}
