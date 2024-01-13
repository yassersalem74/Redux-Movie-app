import React from "react";
import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
const CardMovie = ({ movi }) => {
  return (
    <Col xs="12" sm="6" md="4" lg="3" className="my-1">

      <Link to={`/movie/${movi.id}`}>

      <div className="card">
        <img
          src={`https://image.tmdb.org/t/p/w500/` + movi.poster_path}
          className="card__image"
          alt="hu"
        />
        <div className="card__overlay">
          <div className="overlay__text text-center w-100 p-2">
            <div className="d-flex justify-content-center">
              <div className="main-title px-1"> Name : </div>
              <div className="px-1"> {movi.original_title}</div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="main-title px-1"> Date : </div>
              <div className="px-1"> {movi.release_date}</div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="main-title px-1">Votes : </div>
              <div className="px-1"> {movi.vote_count}</div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="main-title px-1">Rate : </div>
              <div className="px-1"> {movi.vote_average}</div>
            </div>
          </div>
        </div>
      </div>
         
      </Link>

    </Col>
  );
};

export default CardMovie;
