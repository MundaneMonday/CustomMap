import {useState, useEffect} from "react";
import { Form, Card, Button, Nav, Navbar, Container } from "react-bootstrap";

function Mood() {
const [mood,setMood] = useState("");

const handleChange = e =>{
  
  setMood(e.target.value);
}

  return (
    <>
      <Navbar bg="dark" class="text-center" variant="dark">
        <h3 class="text-white bg-dark">Mood Tracker</h3>
      </Navbar>

      <br />

      <h5 class="text-center">
        <b>How are you feeling today?</b>
      </h5>
      <Card class="text-center">
        <div class="card-body">
          <Form class="text-center">
            {["radio"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Group>
                <Form.Check
                  value="perfect"
                  type={type}
                  id={`default-${type}`}
                  label="Perfect"
                  onChange={handleChange}
                  checked={mood === "perfect"}
                />

                <Form.Check
                value="good" 
                type={type} 
                id={`default-${type}`} 
                label="Good" 
                onChange={handleChange}
                checked={mood === "good"}
                />
                <Form.Check
                value="ok" 
                type={type} 
                id={`default-${type}`} 
                label="Ok"
                onChange={handleChange}
                checked={mood === "ok"}
                />
                <Form.Check
                value="notgood"
                type={type}
                id={`default-${type}`}
                label="Not Good"
                onChange={handleChange}
                checked={mood === "notgood"}
                />
                <Form.Check
                value="awful" 
                type={type} 
                id={`default-${type}`} 
                label="Awful" 
                onChange={handleChange}
                checked={mood === "awful"}
                />

                </Form.Group>
                
              </div>
            ))}
          </Form>
        </div>
      </Card>
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <Button class="btn btn-default">Next</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mood;
