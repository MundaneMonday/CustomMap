import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar} from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useState, useEffect } from "react";
import Login from "./components/login/Login";
import LogOut from "./components/logout/logout";
import { Auth } from "./components/login/auth";
import GetMap from "./components/Map/Map";
import Emergency from "./components/Emergency/Emergency";
import Mood from "./components/moodTracker/Mood";
import Assessment from "./components/assessment/Assessment";
import Article from "./components/article/Article";
import AdminHome from "./components/Home/AdminHome";
import "./App.css";
import "leaflet/dist/leaflet.css";
import axios from 'axios'
import qs from 'qs'
import UserProfile from "./components/profile/userProfile";
import logo from "./unnamed.png"


function App() {
  const [Username, setUsername] = useState("");
  const [Email,setEmail] = useState("")
  const [Name,setName] = useState("")
  const [Profile,setProfile] = useState([])
  const [Roles,setRoles] = useState([])
  
  async function setUserInfo() {
      
    try {
      // Get the user's info, see:
      // https://docs.amplify.aws/lib/auth/advanced/q/platform/js/#identity-pool-federation
      
      const currentUser = await Auth.currentSession()
      // If that didn't throw, we have a user object, and the user is authenticated
    
            // Get the user's Identity Token, which we'll use later with our
      // microservce. See discussion of various tokens:
      // https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-with-identity-providers.html
      const name = currentUser.getIdToken().payload.name
      const email = currentUser.getIdToken().payload.email
      
      const username = currentUser.getIdToken().payload["cognito:username"]
      const userRoles = currentUser.getIdToken().payload["cognito:groups"];
      
      console.log(userRoles)
      //set the user's infos
      setUsername(username);
      setEmail(email)
      setName(name)
      setRoles(userRoles);
      
     
    } catch (err) {
      console.log(err);
     
    }
  }
//POST user data
  var data = qs.stringify({
    'username': Username,
    'email': Email,
    'name': Name,

  });
  var config = {
    method: 'post',
    url: 'https://murmuring-garden-88441.herokuapp.com/api/profiles',
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: data
  };

  const FetchProfile = async() =>{
    const profileURL = `https://murmuring-garden-88441.herokuapp.com/api/profiles/${Username}/${Email}`
    try{
    const response = await fetch(profileURL);
    const json = await response.json()
   
   setProfile(json)
   
  }catch (error) {
   console.log(error);
  }
 }
  //if the Authenticated User doesn't have a profile in the database, then create one
  if(!Profile){
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  useEffect(() => {
    
    //first set the User's info according to the Authenticated status 
    setUserInfo();
    //if User is authenticated, GET the user from the database
    if(Username && Email){
      //GET user data
  
    
      FetchProfile();
    }
  
    
  },[Username,Email]);

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">

        {Roles?.some(element => element === "Staff" || element === "admin") ? <LinkContainer to="/"> 
          <Navbar.Brand>
          <div className="img-wrapper">
              <img
        src= {logo}
        width="120"
        height="50"
        className="hover-zoom"
        alt="React Bootstrap logo" 
      />
      </div>
          </Navbar.Brand>
        </LinkContainer> :
        <Navbar.Brand >
          <div className="img-wrapper">
              <img
        src= {logo}
        width="120"
        height="50"
        className="hover-zoom"
        alt="React Bootstrap logo" 
      />
      </div>  
          </Navbar.Brand> }
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Nav className="container-fluid">
          {Username && (
            <LinkContainer to={`/userprofile`}>
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
              <Nav.Link>Resources{/* Links to Articles*/}</Nav.Link>
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
        {Roles?.some(
          (element) => element === "Staff" || element === "admin"
        ) ? (
          <Route exact path="/" element={<AdminHome />} />
        ) : Username ? (
          <Route exact path={"/"} element={<UserProfile />} />
        ) : (
          <Route exact path={"/"} />
        )}
        {Username && <Route path={"/userprofile"} element={<UserProfile />} />}
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