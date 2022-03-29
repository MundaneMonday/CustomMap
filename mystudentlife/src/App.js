import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useState, useEffect } from "react";
import Login from "./components/login/Login";
import LogOut from "./components/logout/logout";
import { Auth } from "./components/login/auth";
import { getUserFragments } from "./components/login/api";
import GetMap from "./components/Map/Map";
import Emergency from "./components/Emergency/Emergency";
import Mood from "./components/moodTracker/Mood";
import Assessment from "./components/assessment/Assessment";
import Article from "./components/article/Article";
import "./App.css";
import "leaflet/dist/leaflet.css";
import axios from 'axios'
import qs from 'qs'
import UserProfile from "./components/profile/userProfile";


function App() {
  const [Username, setUsername] = useState("");
  const [Email,setEmail] = useState("")
  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function setUserInfo() {
    await timeout(1000);
    try {
      // Get the user's info, see:
      // https://docs.amplify.aws/lib/auth/advanced/q/platform/js/#identity-pool-federation
      const currentAuthenticatedUser = await Auth.currentAuthenticatedUser();

      // If that didn't throw, we have a user object, and the user is authenticated
      console.log("The user is authenticated");

      // Get the user's username
      const username = currentAuthenticatedUser.username;
      const currentUser = await Auth.currentSession()
      const email = currentUser.getIdToken().payload.email
      // Get the user's Identity Token, which we'll use later with our
      // microservce. See discussion of various tokens:
      // https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-with-identity-providers.html
      
      setUsername(username);
      setEmail(email)
      // Return a simplified "user" object
      console.log(Username);
      console.log(Email)
      
     
    } catch (err) {
      console.log(err);
      // Unable to get user, return `null` instead
      
    }
  }

  var data = qs.stringify({
    'username': Username,
    'email': Email  
  });
  var config = {
    method: 'post',
    url: 'https://murmuring-garden-88441.herokuapp.com/api/profiles',
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: data
  };
  useEffect(() => {
  
    
    setUserInfo();
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
  
    
  });

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand>
            <b>MyStudentLife</b>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Nav className="container-fluid">
          {Username && (
            <LinkContainer to={`/userprofile/${Username}`}>
              <Nav.Link>Your Profile {/* Links to User Profile*/}</Nav.Link>
            </LinkContainer>
          )}
          {Username && (
            <LinkContainer to="/assessment">
              <Nav.Link>Assessment{/*Links to Assessment */}</Nav.Link>
            </LinkContainer>
          )}
          {Username && (
            <LinkContainer to="/mood">
              <Nav.Link>Mood Tracker{/* Links to Mood Tracker*/}</Nav.Link>
            </LinkContainer>
          )}

          {Username && (
            <LinkContainer to="/journals">
              <Nav.Link>Journals{/*Links to Journals */}</Nav.Link>
            </LinkContainer>
          )}
          {Username && (
            <LinkContainer to="/articles">
              <Nav.Link>Articles{/* Links to Articles*/}</Nav.Link>
            </LinkContainer>
          )}

          {Username && (
            <LinkContainer to="/meditation">
              <Nav.Link>Meditation {/*Links to Articles */}</Nav.Link>
            </LinkContainer>
          )}

          {Username && (
            <LinkContainer to="/favourites">
              <Nav.Link>Favourites{/* Links to Favourites List */}</Nav.Link>
            </LinkContainer>
          )}
          {Username && (
            <LinkContainer to="/clinics">
              <Nav.Link> Search For Clinics</Nav.Link>
            </LinkContainer>
          )}
          {Username && (
            <LinkContainer to="/emergency">
              <Nav.Link>Emergency {/*Links to Emergency */}</Nav.Link>
            </LinkContainer>
          )}

          <LinkContainer to={Username ? "/logout" : "/login"}>
            <Nav.Link>
              {Username ? "Logout" : "Login"} {/*Links to Login */}
            </Nav.Link>
          </LinkContainer>
          {Username && (
            <Nav.Item className="ml auto">{<b>Welcome {Username}</b>}</Nav.Item>
          )}
        </Nav>
      </Navbar>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route exact path="/" />
        {Username && <Route path={'/userprofile/:username'} element={<UserProfile/>}/>}
        {Username && <Route path="/mood" element={<Mood />} />}
        {Username && <Route path="/articles" element={<Article />} />}
        {Username && <Route path="/assessment" element={<Assessment />} />}
        {/* Mood contains Monthly Assessment*/}
        {Username && <Route path="/journals" />}
        {Username && <Route path="/logout" element={<LogOut />} />}
        {Username && <Route path="/favourites" />}
        {Username && <Route path="/emergency" element={<Emergency />} />}
        {Username && <Route path="/meditation" />}
        {Username && <Route path="/clinics" element={<GetMap />} />}
      </Routes>
    </>
  );
}

export default App;
