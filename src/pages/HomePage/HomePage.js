import React from 'react'


// COMPONENTS
import { Hero } from '../../components/Hero/index'
import { MoviesList } from '../../components/MoviesList'
import { SearchBar } from '../../components/SearchBar'

export const HomePage = () => {
      return (
            <>
                  <Hero />
                  <MoviesList/>
            </>
      )
}
