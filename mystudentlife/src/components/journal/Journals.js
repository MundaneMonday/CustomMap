import React from "react";

import { Form, Card, Navbar, Button } from "react-bootstrap";

function Journals() {
  return (
    <div>
      <Navbar bg="dark" class="text-center" variant="dark">
        <h3 class="text-white bg-dark">Journals</h3>
      </Navbar>

      <Card>
        <Card.Body>
          <Card.Title>
            <b>Write a Journal</b>
          </Card.Title>

          <Card.Text>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Journal Title</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Journal</Form.Label>
                <Form.Control as="textarea" rows={10} />
              </Form.Group>
            </Form>
          </Card.Text>
          <Button type="submit">Submit</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title>
            <b>Record a Journal</b>
          </Card.Title>

          <Card.Text>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Journal Title</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload your journal</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Form>
          </Card.Text>
          <Button type="submit">Submit</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Journals;
