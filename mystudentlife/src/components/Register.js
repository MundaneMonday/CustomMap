import { Form, Button } from 'react-bootstrap';
import React from "react";
import {Link} from 'react-router-dom'

function Register(){
  

    return(
        <Form>
        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formUserName">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="User Name" />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
      We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword1">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword2">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
        <Link to ="/">
        <Button>Cancel</Button> 
        </Link>
        
      </Form> 

    );

    
}

export default Register;