import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  //save parameters sent in URL
  // so param.id = movie.id
  const param = useParams();

  const [movie, setMovie] = useState([]);

  //get movie by details
  const getMovieDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${param.id}?api_key=d870f89b7bb98b7399f281842bd8003a&language=en`
    );
    setMovie(res.data);
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <div>
      <Row className="justify-content-center">
        {/* Column for Image */}
        <Col xl="3" md="4" xs="12" sm="12" className="mt-4">
          <div className="card-detalis d-flex align-items-center img-cont">
            <img
              className="img-movie w-100 "
              src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
              alt="ascad"
            />
          </div>
        </Col>

        {/* Column for Text */}
        <Col xl="9" md="8" xs="12" sm="12" className="mt-4">
          <div className="card-detalis d-flex flex-column align-items-center justify-content-center text-center mx-auto details-text">
            <div className="d-flex">
              <p className="card-text-details movie-detail-red">
                Movie Name :{" "}
              </p>
              <p className="card-text-details ">{movie.title}</p>
            </div>
            <div className="d-flex">
              <p className="card-text-details movie-detail-red">
                Movie Date :{" "}
              </p>
              <p className="card-text-details px-1 ">{movie.release_date}</p>
            </div>
            <div className="d-flex">
              <p className="card-text-details movie-detail-red">Votes : </p>
              <p className="card-text-details px-1 ">{movie.vote_count}</p>
            </div>
            <div className="d-flex">
              <p className="card-text-details movie-detail-red">Rate : </p>
              <p className="card-text-details px-1 ">{movie.vote_average}</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center pt-3 card-story">
        {/* Column for Story Title */}
        <Col lg="2" md="4" xs="12" className="mt-1">
          <div className=" d-flex flex-column align-items-start">
            <div className="text-end p-4">
              <p className="card-text-title border-bottom story-title">
                Story:
              </p>
            </div>
          </div>
        </Col>

        {/* Column for Story Description */}
        <Col lg="7" md="8" xs="12" className="mt-1">
          <div className=" text-end px-2 text-center">
            <p className="card-text-story">{movie.overview}</p>
          </div>
        </Col>

        {/* Column for Buttons */}
        <Col
          lg="3"
          md="12"
          xs="12"
          className="mt-1 d-flex  flex-lg-column justify-content-center pb-5"
        >
          <Link to="/">
            <button className="btn btn-primary mx-2 movi-buttons">
              {" "}
              Back Home{" "}
            </button>
          </Link>

          <a href={movie.homepage}>
            <button className="btn btn-primary mx-2 movi-buttons">
              {" "}
              Watch Movie
            </button>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetails;
