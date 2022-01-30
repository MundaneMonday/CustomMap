import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

function App() {
  return (
    <>
     <Navbar bg="primary"  variant="dark" expand="lg">
    <LinkContainer to="/">
    <Navbar.Brand><b>MyStudentLife</b></Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <LinkContainer to="/"> 
    <Nav.Link>Home{/* Routes to Home*/}</Nav.Link>
    </LinkContainer>

    <LinkContainer to="/userprofile"> 
    <Nav.Link>Your Profile {/* Routes to User Profile*/}</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/mood"> 
    <Nav.Link>Articles{/* Routes to Mood Tracker*/}</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/articles"> 
    <Nav.Link>Meditation {/*Routes to Articles */}</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/assessment">
    <Nav.Link>Assessment{/*Routes to Assessment */}</Nav.Link> 
    </LinkContainer>
    <LinkContainer to="/journals">
    <Nav.Link>Journals{/*Routes to Journals */}</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/clinics">
    <Nav.Link>Search Clinic{/*Routes to Search Clinics */}</Nav.Link> 
    </LinkContainer>
    </Nav>
    </Navbar.Collapse>
    </Navbar>


    
    </>
  );
}

export default App;
