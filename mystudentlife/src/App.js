import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar} from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import GetMap from "./components/Map/Map";
import "./App.css";
import "leaflet/dist/leaflet.css";


import logo from "./unnamed.png"


function App() {
 
  
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
<LinkContainer to="/"> 
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
        </LinkContainer> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Nav className="container-fluid">


          
            <LinkContainer to="/clinics">
              <Nav.Link> Search For Clinics</Nav.Link>
            </LinkContainer>
          
         
        </Nav>
      </Navbar>

      <Routes>
       
        
        <Route path="/clinics" element={<GetMap />} />
      </Routes>
    </>
  );
}

export default App;