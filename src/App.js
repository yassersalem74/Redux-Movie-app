import MoviesList from "./component/MoviesList";
import NavBar from "./component/NavBar";
import "./main.css";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./component/movieDetails";

function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setpageCount] = useState(0);

  //get all movies by axios
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=d870f89b7bb98b7399f281842bd8003a&language=en"
    );
    setMovies(res.data.results);
    setpageCount(res.data.total_pages);
  };

  //pages pagination
  //get current page
  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=d870f89b7bb98b7399f281842bd8003a&language=en&page=${page}`
    );
    setMovies(res.data.results);
    setpageCount(res.data.total_pages);
  };

  // just one time when the first component rendering
  useEffect(() => {
    getAllMovies();
  }, []);

  //search in API
  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=d870f89b7bb98b7399f281842bd8003a&query=${word}&language=en`
      );
      setMovies(res.data.results);
      setpageCount(res.data.total_pages);
    }
  };

  return (
    <div>
      <NavBar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/"  element={<MoviesList movies={movies} getPage={getPage}  pageCount={pageCount}  /> } />
            {/* // (:) => thats variable */}
            <Route path="/movie/:id" element={ <MovieDetails />} />
             
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
