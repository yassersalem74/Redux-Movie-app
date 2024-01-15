import MoviesList from "./component/MoviesList";
import NavBar from "./component/NavBar";
import "./main.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./component/movieDetails";

function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <BrowserRouter basename="/Redux-Movie-app">
          <Routes>
            <Route path="/" element={<MoviesList />} />
            {/* // (:) => thats variable */}
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
