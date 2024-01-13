import React from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import Paginationn from "./pagination";
import NoData from "./noData";



const MoviesList = ({ movies , getPage , pageCount}) => {
  return (
    <Row className="mt-3">
      {
        movies.length >= 1 ? (movies.map((mov) =>{
            return (<CardMovie mov={mov.id} movi={mov} />)
        })) : <NoData />
      }
    {movies.length >1 ? ( <Paginationn getPage={getPage} pageCount={pageCount} />) : null}

    </Row>
  );
};

export default MoviesList;
