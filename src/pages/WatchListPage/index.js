import React, { useContext } from 'react'

import './WatchListPage.css'

// COMPONENTS
import { WatchList } from '../../components/WatchList';

export const WatchListPage = () => {

      return (
            <div className='watchlist'>
                  <h2>My Watchlist</h2>
                        <WatchList />
            </div>
      )
}
