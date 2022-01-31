import { Form, Button } from 'react-bootstrap';
import React from "react";
import {Link, useNavigate} from 'react-router-dom'
function Login(){


    let history = useNavigate();
    return(
        
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username/Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Link to="/forgot">Forgot Password?</Link>
  <br></br>
  <Button variant="primary" type="submit">
    Login
  </Button>
  <Link to ="/register">
        <Button>Register</Button> 
        </Link>
</Form>

        

    );

}

export default Login;