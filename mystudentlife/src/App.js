import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar,Container } from 'react-bootstrap'
import { Redirect, Route,Routes } from "react-router-dom"
import { LinkContainer } from 'react-router-bootstrap'
import { useState, useEffect, useCallback } from 'react'
import { useHistory } from "react-router-dom"
import Login from './components/login/Login'
import LogOut from './components/logout/logout'
import Register from './components/register/Register'
import { Auth } from "./components/login/auth"
import { getUserFragments } from './components/login/api'

function App() {
 
 
  
  const [Username,setUsername] = useState("");

  function timeout(ms){
    return new Promise((resolve)=> setTimeout(resolve,ms));
  }
 
  

  useEffect(()=>{
    async function getUserName(){
      await timeout(1000);
    try {
      // Get the user's info, see:
      // https://docs.amplify.aws/lib/auth/advanced/q/platform/js/#identity-pool-federation
      const currentAuthenticatedUser = await Auth.currentAuthenticatedUser();
  
      // If that didn't throw, we have a user object, and the user is authenticated
      console.log("The user is authenticated");
      
      // Get the user's username
      const username = currentAuthenticatedUser.username;
  
      // Get the user's Identity Token, which we'll use later with our
      // microservce. See discussion of various tokens:
      // https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-with-identity-providers.html
      
      setUsername(username);
      
      
      // Return a simplified "user" object
      console.log(Username);
      getUserFragments(currentAuthenticatedUser);
    } catch (err) {
      console.log(err);
      // Unable to get user, return `null` instead
      return null;
    } 
  };
  getUserName();
  
  return ()=>{

  }  
    
  },[Username])


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
    <Nav.Link>{Username ? Username + ' is logged in' : 'Login'} {/*Links to Login */}</Nav.Link> 
    </LinkContainer>
    <LinkContainer to={"/logout"}>
    <Nav.Link>{Username ? 'Logout' : ''}{/*Links to Logout */}</Nav.Link> 
    </LinkContainer>
    <LinkContainer to="/register">
    <Nav.Link>Register{/*Links to Register */}</Nav.Link> 
    </LinkContainer>
    </Nav>
    </Navbar.Collapse>
    </Navbar> 
    

  <Routes>
    <Route path = "/"/>

    
    <Route path = "/userprofile"/>
      
    
    <Route path = "/mood"/>
    <Route path = "/articles"/>
    <Route path = "/assessment"/>
    <Route path = "/journals"/>
    <Route path = "/clinics"/>
    <Route path = "/login" element = {<Login/>}/>
    <Route path = "/logout" element = {<LogOut/>}/>
     {/*Routes to Login Component */} 
     <Route path = "/register" element = {<Register/>}/>
     <Route path = "/forgot"/>

  </Routes>

    </>
  )
}

export default App
