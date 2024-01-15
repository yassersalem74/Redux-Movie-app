import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import logo from '../images/cinemalogo.jpg'
import { useDispatch } from 'react-redux';
import {getAllMovie , getAMovieSearch} from "../redux/actions/movieAction";
 
const NavBar = () => {

  const onSearch = (word) => {
    search(word)
  }


  const dispatch = useDispatch() 
  //search in API
  const search = async (word) => {
    if (word === "") {
      //dipatch getAllMovies() --> movieAction.js --> movieReduce --> update in store --> store update in movieList.js 
      dispatch(getAllMovie());
    } else {
      dispatch(getAMovieSearch(word))
    }
  };




  return (
    
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2 d-flex justify-content-between">
          <Col xs="2" lg="1">
            <a href="/Movie-React-app">
              <img className="logo" src={logo} alt="dfs" />
            </a>
          </Col>
          <Col xs="8" lg="4" className=" d-flex align-items-center ">
            <div className="search  w-100">
              <i className="fa fa-search"><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
              <input onChange={(e) => onSearch(e.target.value)} type="text" className="form-control" placeholder="Search any movie..." />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
