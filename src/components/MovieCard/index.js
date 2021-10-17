import React, { useEffect } from 'react'

import './MovieCard.css';

import { Link } from 'react-router-dom';

export const MovieCard = ({ id, title, poster_path, genres }) => {

      const IMG_API = "https://image.tmdb.org/t/p/w500/";


      return (
            <Link to={`/movies/${id}`} className="movie-card">
                  <img className="movie-card__img" src={`${IMG_API}${poster_path}`} alt={title} />
                  {/* <Link to={`/${id}`} >Ver detalles</Link> */}
            </Link>
      )
}
