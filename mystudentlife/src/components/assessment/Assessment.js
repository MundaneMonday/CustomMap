import {useState, useEffect} from "react";
import { Form, Card, Button, Nav, Navbar, Container } from "react-bootstrap";

function Assessment() {
  const [Frequency,setFrequency] = useState({Question1 : "", Question2: "", Question3: "", Question4: "",Question5: ""});

  const handleChange = e =>{
  
  setFrequency(prevState => ({...prevState, Question1 : e.target.value}));
  }

  const handleChange2 = e =>{
  
    setFrequency(prevState => ({...prevState, Question2 : e.target.value}));
    }

  const handleChange3 = e =>{
  
      setFrequency(prevState => ({...prevState, Question3 : e.target.value}));
      }
  const handleChange4 = e =>{
  
        setFrequency(prevState => ({...prevState, Question4 : e.target.value}));
        }
  const handleChange5 = e =>{
  
          setFrequency(prevState => ({...prevState, Question5 : e.target.value}));
          }
  return (
    <>
      <Navbar bg="dark" class="text-center" variant="dark">
        <h3 class="text-white bg-dark">Monthly Assessment</h3>
      </Navbar>

      <br />

      <h5 class="text-center">
        <b>
          The questions below ask about anxiety and worrying.<br></br>
          In the last month, have you experienced any of the following symptoms?
          If so, how often?
        </b>
      </h5>
      <Card class="text-center">
        <p class="card-header">
          I was very anxious, worried or scared about a lot of things in my
          life.{" "}
        </p>
        <div class="card-body">
          <Form class="text-center">
            {["radio"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Group >
                <Form.Check 
                value="never"
                type={type} 
                id={`default-${type}`} 
                label="Never"
                onChange={handleChange} 
                checked={Frequency.Question1 === "never"}
                />

                <Form.Check
                value="sometimes"
                  type={type}
                  id={`default-${type}`}
                  label="Sometimes"
                  onChange={handleChange}
                  checked={Frequency.Question1 === "sometimes"}
                />
                <Form.Check 
                value="often"
                type={type} 
                id={`default-${type}`} 
                label="Often" 
                onChange={handleChange}
                checked={Frequency.Question1 === "often"}
                />
                <Form.Check
                  value="constantly"
                  type={type}
                  id={`default-${type}`}
                  label="Constantly"
                  onChange={handleChange}
                checked={Frequency.Question1 === "constantly"}
                />
                </Form.Group>
              </div>
            ))}
          </Form>
        </div>
      </Card>

      <Card class="text-center">
        <p class="card-header">
          I had trouble sleeping - I could not fall or stay asleep, and/or
          didn't feel well-rested when I woke up.{" "}
        </p>
        <div class="card-body">
          <Form class="text-center">
            {["radio"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Group >
                <Form.Check 
                value="never"
                type={type} 
                id={`default-${type}`} 
                label="Never"
                onChange={handleChange2} 
                checked={Frequency.Question2 === "never"}
                />

                <Form.Check
                value="sometimes"
                  type={type}
                  id={`default-${type}`}
                  label="Sometimes"
                  onChange={handleChange2}
                  checked={Frequency.Question2 === "sometimes"}
                />
                <Form.Check 
                value="often"
                type={type} 
                id={`default-${type}`} 
                label="Often" 
                onChange={handleChange2}
                checked={Frequency.Question2 === "often"}
                />
                <Form.Check
                  value="constantly"
                  type={type}
                  id={`default-${type}`}
                  label="Constantly"
                  onChange={handleChange2}
                checked={Frequency.Question2 === "constantly"}
                />
                </Form.Group>
              </div>
            ))}
          </Form>
        </div>
      </Card>

      <Card class="col-md-8 offset-md-2">
        <p class="card-header">
          {" "}
          I felt restless, agitated, frantic, or tense.{" "}
        </p>
        <div class="card-body">
          <Form>
            {["Radio"].map((type) => (
              <div class="text-center" key={`default-${type}`} className="mb-3">
                <Form.Group>
                <Form.Check
                  class="text-center"
                  value="never"
                  type={type}
                  id={`default-${type}`}
                  label="Never"
                  onChange={handleChange3} 
                checked={Frequency.Question3 === "never"}
                />

                <Form.Check
                  class="text-center"
                  value="sometimes"
                  type={type}
                  id={`default-${type}`}
                  label="Sometimes"
                  onChange={handleChange3} 
                checked={Frequency.Question3 === "sometimes"}
                />
                <Form.Check
                  class="text-center"
                  value="often"
                  type={type}
                  id={`default-${type}`}
                  label="Often"
                  onChange={handleChange3} 
                  checked={Frequency.Question3 === "often"}
                />
                <Form.Check
                  class="text-center"
                  value="constantly"
                  type={type}
                  id={`default-${type}`}
                  label="Constantly"
                  onChange={handleChange3} 
                  checked={Frequency.Question3 === "constantly"}
                />
                </Form.Group>
              </div>
            ))}
          </Form>
        </div>
      </Card>

      <Card class="text-center">
        <p class="card-header">
          My heart would skip beat, was pounding, or my heart rate increased.{" "}
        </p>
        <div class="card-body">
        <Form>
            {["Radio"].map((type) => (
              <div class="text-center" key={`default-${type}`} className="mb-3">
                <Form.Group>
                <Form.Check
                  class="text-center"
                  value="never"
                  type={type}
                  id={`default-${type}`}
                  label="Never"
                  onChange={handleChange4} 
                checked={Frequency.Question4 === "never"}
                />

                <Form.Check
                  class="text-center"
                  value="sometimes"
                  type={type}
                  id={`default-${type}`}
                  label="Sometimes"
                  onChange={handleChange4} 
                checked={Frequency.Question4 === "sometimes"}
                />
                <Form.Check
                  class="text-center"
                  value="often"
                  type={type}
                  id={`default-${type}`}
                  label="Often"
                  onChange={handleChange4} 
                  checked={Frequency.Question4 === "often"}
                />
                <Form.Check
                  class="text-center"
                  value="constantly"
                  type={type}
                  id={`default-${type}`}
                  label="Constantly"
                  onChange={handleChange4} 
                  checked={Frequency.Question4 === "constantly"}
                />
                </Form.Group>
              </div>
            ))}
          </Form>
        </div>
      </Card>

      <Card class="text-center">
        <p class="card-header"> I had cold or hot flashes. </p>
        <div class="card-body">
        <Form>
            {["Radio"].map((type) => (
              <div class="text-center" key={`default-${type}`} className="mb-3">
                <Form.Group>
                <Form.Check
                  class="text-center"
                  value="never"
                  type={type}
                  id={`default-${type}`}
                  label="Never"
                  onChange={handleChange5} 
                checked={Frequency.Question5 === "never"}
                />

                <Form.Check
                  class="text-center"
                  value="sometimes"
                  type={type}
                  id={`default-${type}`}
                  label="Sometimes"
                  onChange={handleChange5} 
                checked={Frequency.Question5 === "sometimes"}
                />
                <Form.Check
                  class="text-center"
                  value="often"
                  type={type}
                  id={`default-${type}`}
                  label="Often"
                  onChange={handleChange5} 
                  checked={Frequency.Question5 === "often"}
                />
                <Form.Check
                  class="text-center"
                  value="constantly"
                  type={type}
                  id={`default-${type}`}
                  label="Constantly"
                  onChange={handleChange5} 
                  checked={Frequency.Question5 === "constantly"}
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

export default Assessment;
