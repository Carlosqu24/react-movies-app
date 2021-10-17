import React, { useState, useEffect } from 'react'

import './MoviesList.css';

import axios from 'axios';

import { MovieCard } from '../MovieCard/index';

const DISCOVER_MOVIES_API = `https://api.themoviedb.org/3/movie/upcoming?api_key=47c12a2829b0418590ccde156ec0f744&language=en-US&page=1`;
const GENRES_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=47c12a2829b0418590ccde156ec0f744&language=en-US`;
const IMG_API = "https://image.tmdb.org/t/p/w1280";

export const MoviesList = () => {
      const [db, setDb] = useState([]);

      const getPopularMovies = async () => {
            const response = await axios.get(DISCOVER_MOVIES_API);

            setDb(response.data.results);
      };

      useEffect(() => {
          getPopularMovies();
      }, []);


      return (
            <div className="movies-list">
                  <h2 className="movies-list__title">Discover movies</h2>

                  <div className="movies-list-flex">
                        {
                              db.map(movie => (
                                    <MovieCard
                                          key={movie.id}
                                          id={movie.id}
                                          poster_path={movie.poster_path} 
                                          title={movie.title}
                                    />
                              ))
                        }            
                  </div>
            </div>
      )
}
