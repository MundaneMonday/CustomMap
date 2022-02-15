import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar,Container } from 'react-bootstrap';
import { Redirect, Route,Routes } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import Login from './components/login/Login'
import Register from './components/register/Register'
import { Auth, getUser } from "./components/login/auth";

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
    <Nav.Link>Home{/* Links to Home*/}</Nav.Link>
    </LinkContainer>

    <LinkContainer to="/userprofile"> 
    <Nav.Link>Your Profile {/* Links to User Profile*/}</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/mood"> 
    <Nav.Link>Articles{/* Links to Mood Tracker*/}</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/articles"> 
    <Nav.Link>Meditation {/*Links to Articles */}</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/assessment">
    <Nav.Link>Assessment{/*Links to Assessment */}</Nav.Link> 
    </LinkContainer>
    <LinkContainer to="/journals">
    <Nav.Link>Journals{/*Links to Journals */}</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/clinics">
    <Nav.Link>Search Clinic{/*Links to Search Clinics */}</Nav.Link> 
    </LinkContainer>
    <LinkContainer to="/login">
    <Nav.Link>Login{/*Links to Login */}</Nav.Link> 
    </LinkContainer>
    <LinkContainer to="/logout">
    <Nav.Link>Logout{/*Links to Logout */}</Nav.Link> 
    </LinkContainer>
    <LinkContainer to="/register">
    <Nav.Link>Register{/*Links to Register */}</Nav.Link> 
    </LinkContainer>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
      
  <Routes>
    <Route exact path = "/"/>

    
    <Route exact path = "/userprofile"/>
      
    
    <Route path = "/mood"/>
    <Route path = "/articles"/>
    <Route path = "/assessment"/>
    <Route path = "/journals"/>
    <Route path = "/clinics"/>
    <Route path = "/login" element = {<Login/>}/>
    <Route path = "/logout" element = {Auth.signOut()} />
     {/*Routes to Login Component */} 
     <Route path = "/register" element = {<Register/>}/>
     <Route path = "/forgot"/>

  </Routes>

    </>
  );
}

export default App;
