import React from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import Paginationn from "./pagination";
import NoData from "./noData";
import { useEffect , useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovie } from './../redux/actions/movieAction';


const MoviesList = () => {

  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch()

  // just one time when the first component rendering
  useEffect(() => {
     //get movies from API and store it in reducer
    dispatch(getAllMovie());
  }, []);
  
  //store data that i get  in "dataMovies"
  const dataMovies = useSelector((state) =>state.movies)

  useEffect(() => {
    setMovies(dataMovies)
  } ,[dataMovies])



  return (
    <Row className="mt-3">
      {
        movies.length >= 1 ? (movies.map((mov) =>{
            return (<CardMovie mov={mov.id} movi={mov} />)
        })) : <NoData />
      }
    {movies.length >1 ? ( <Paginationn />) : null}

    </Row>
  );
};

export default MoviesList;
