import React from "react";
import { Form, Card, Button, Nav, Navbar, Container } from "react-bootstrap";

function Mood() {
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
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label="Perfect"
                />

                <Form.Check type={type} id={`default-${type}`} label="Good" />
                <Form.Check type={type} id={`default-${type}`} label="Ok" />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label="Not Good"
                />
                <Form.Check type={type} id={`default-${type}`} label="Awful" />
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
