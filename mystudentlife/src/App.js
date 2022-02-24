import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar,Form,FormControl,Button } from 'react-bootstrap'
import { Route,Routes, useNavigate } from "react-router-dom"
import { LinkContainer } from 'react-router-bootstrap'
import { useState, useEffect } from 'react'
import Login from './components/login/Login'
import LogOut from './components/logout/logout'
import Register from './components/register/Register'
import { Auth } from "./components/login/auth"
import { getUserFragments } from './components/login/api'
import './App.css';
import Mood from './components/moodTracker/Mood'
import Article from './components/article/Article'

function App() {
 
 
  
  const [Username,setUsername] = useState("");
  const [validated, setValidated] = useState(false);

 const [searchString, setSearchString ] = useState("");
 let navigateClinic = useNavigate();

 function handleSubmit(e){
  
  
  const postalCodeRegex = new RegExp(/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVXY][ -]?\d[ABCEGHJKLMNPRSTVXY]\d$/i);
  e.preventDefault();
  if(postalCodeRegex.test(searchString)){
    console.log('regex successful')
    navigateClinic(`/clinics?postalcode=${searchString}`, {replace: true});
    
    setValidated(true);
    

  }else{
    e.stopPropagation();
    setSearchString("");
    console.log('regex fail')
  }
  
  
 }

  function timeout(ms){
    return new Promise((resolve)=> setTimeout(resolve,ms));
  }
 
  function handleChangePostalCode(e){
    
       setSearchString(e.target.value)
       
    
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
  
  
    
  })


  return (
    <>
     <Navbar bg="primary"  variant="dark" expand="lg">
    <LinkContainer to="/">
    <Navbar.Brand><b>MyStudentLife</b></Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
    <Nav className="container-fluid">
    <Form validated={validated} onSubmit={handleSubmit} className='d-flex'>
    <FormControl type="text" placeholder="e.g A1A 1A1" className="mr-sm-2" value={searchString}
   onChange={handleChangePostalCode} required/>
   <span className="border border-dark"><Button type="submit" variant="primary">Search Clinics</Button></span>
   <Form.Control.Feedback type="invalid" > 
            Invalid Postal Code
          </Form.Control.Feedback>
    </Form>
    
    <LinkContainer to="/userprofile"> 
    <Nav.Link>Your Profile {/* Links to User Profile*/}</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/articles"> 
    <Nav.Link>Articles{/* Links to Articles*/}</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/mood"> 
    <Nav.Link>Mood Tracker{/* Links to Mood Tracker*/}</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/meditation"> 
    <Nav.Link>Meditation {/*Links to Articles */}</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/assessment">
    <Nav.Link>Assessment{/*Links to Assessment */}</Nav.Link> 
    </LinkContainer>
    <LinkContainer to="/journals">
    <Nav.Link>Journals{/*Links to Journals */}</Nav.Link>
    </LinkContainer>
    <LinkContainer to={Username ? '/logout' : '/login' } >
    <Nav.Link>{Username ? 'Logout' : 'Login' } {/*Links to Login */}</Nav.Link> 
    </LinkContainer>
    <LinkContainer to="/favourites">
      <Nav.Link>Favourites{/* Links to Favourites List */}</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/emergency"> 
    <Nav.Link>Emergency {/*Links to Emergency */}</Nav.Link>
    </LinkContainer>
    <Nav.Item className="ml auto">
    {Username ? <b>Welcome {Username}</b> : '' } 
        </Nav.Item>
    </Nav>
     
    
    </Navbar> 
    {searchString}
    <Routes>
    <Route path = "/"/>
    <Route path = "/userprofile"/>
    <Route path = "/mood" element = {<Mood/>}/>
    <Route path = "/articles" element = {<Article/>}/>
    <Route path = "/assessment"/>
    <Route path = "/journals"/>
    <Route path = "/clinics"/>
    <Route path = "/login" element = {<Login/>}/>
    <Route path = "/logout" element = {<LogOut/>}/>
     {/*Routes to Login Component */} 
     <Route path = "/register" element = {<Register/>}/>
     <Route path = "/favourites"/>
     <Route path = "/emergency"></Route>
     <Route path = "/meditation"></Route>

  </Routes>

    </>
  )
}

export default App
