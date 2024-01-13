import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import logo from '../images/cinemalogo.jpg'

const NavBar = ({ search }) => {

  const onSearch = (word) => {
    search(word)
  }


  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2 d-flex justify-content-between">
          <Col xs="2" lg="1">
            <a href="/">
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
