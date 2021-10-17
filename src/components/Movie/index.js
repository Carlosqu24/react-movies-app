import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import './Movie.css';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../../context/GlobalContext';


export const Movie = () => {
      const [details, setDetails] = useState({});

      const { watchList, setWatchList } = useContext(GlobalContext)

      const { id } = useParams();

      const IMG_API = "https://image.tmdb.org/t/p/w500/";

      const getMovieDetails = async (id) => {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=47c12a2829b0418590ccde156ec0f744&language=en-US`);

            setDetails(response.data);
      };

      useEffect(() => {
            // console.log(id);

            getMovieDetails(id);
      }, []);

      const handleClick = (details) => {

            setWatchList([
                  ...watchList,
                  details
            ]);

            alert('Movie added')
      };

      return (
            <div className="movie">
                  <img
                        className="movie__poster"
                        src={`${IMG_API}${details.poster_path}`}
                        alt=""
                  />
                  <div className="movie__details">
                        <h3 className="movie__name">{details.title}</h3>
                        <p>{details.overview}</p>
                        <p className="movie__release-date">Release date: {details.release_date}</p>
                        <p className="movie__rating">Rating: {details.vote_average}/10</p>
                        <p className="movie__rating">Runtime: {details.runtime} minutes</p>
                        <p className="movie__rating">Revenue: ${details.revenue}</p>

                        <div className="movie-actions">
                              <Link to="/" className="movie__link" >
                                    Back
                              </Link>
                              <button className="button button--add-to-watchlist" onClick={() => handleClick(details)}>
                                    Add to watchList
                              </button>
                        </div>
                  </div>
            </div>
      )
}
