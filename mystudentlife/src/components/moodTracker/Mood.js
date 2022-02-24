import React from "react";
import { Form, Card, Button, Nav, Navbar,Container  } from 'react-bootstrap';

function Mood(){
  

    return(<>


<Navbar bg="dark" class="text-center" variant="dark">


     <h3 class="text-white bg-dark">Monthly Assessment</h3>
   
  </Navbar>

  <br />
     
     <h5 class="text-center"><b>The questions below ask about anxiety and worrying.<br></br>
In the last month, have you experienced any of the following symptoms? If so, how often?</b></h5>
        <Card class="text-center">
        <p class="card-header">I was very anxious, worried or scared about a lot of things in my life. </p>
        <div class="card-body">
        <Form class="text-center">
        {['checkbox'].map((type) => (
            
          <div  key={`default-${type}`} className="mb-3">
            <Form.Check 
              type={type}
              id={`default-${type}`}
              label="Never"
            />

            <Form.Check 
              type={type}
              id={`default-${type}`}
              label="Sometimes"
            />
            <Form.Check 
              type={type}
              id={`default-${type}`}
              label="Often"
            />
            <Form.Check
              type={type}
              id={`default-${type}`}
              label="Constantly"
            />
    
          </div>
        ))}
      </Form>
      </div>
      </Card>

      
      <Card class="text-center">
        <p class="card-header">I had trouble sleeping - I could not fall or stay asleep, and/or didn't feel well-rested when I woke up. </p>
        <div class="card-body">
        <Form class="text-center">
        {['checkbox'].map((type) => (
            
          <div class="text-center" key={`default-${type}`} className="mb-3">
            <Form.Check 
              type={type}
              id={`default-${type}`}
              label="Never"
            />

            <Form.Check
              type={type}
              id={`default-${type}`}
              label="Sometimes"
            />
            <Form.Check 
              type={type}
              id={`default-${type}`}
              label="Often"
            />
            <Form.Check 
              type={type}
              id={`default-${type}`}
              label="Constantly"
            />
          </div>
        ))}
      </Form>
      </div>
      </Card>

      <Card class="col-md-8 offset-md-2">
        <p class="card-header"> I felt restless, agitated, frantic, or tense. </p>
        <div class="card-body">
        <Form>
        {['checkbox'].map((type) => (
            
          <div class="text-center" key={`default-${type}`} className="mb-3">
            <Form.Check  class="text-center"
              type={type}
              id={`default-${type}`}
              label="Never"
            />

            <Form.Check class="text-center"
              type={type}
              id={`default-${type}`}
              label="Sometimes"
            />
            <Form.Check class="text-center"
              type={type}
              id={`default-${type}`}
              label="Often"
            />
            <Form.Check class="text-center"
              type={type}
              id={`default-${type}`}
              label="Constantly"
            />
          </div>
        ))}
      </Form>
      </div>
      </Card>

            
      <Card class="text-center">
        <p class="card-header">My heart would skip beat, was pounding, or my heart rate increased. </p>
        <div class="card-body">
        <Form class="text-center">
        {['checkbox'].map((type) => (
            
          <div class="text-center" key={`default-${type}`} className="mb-3">
            <Form.Check 
              type={type}
              id={`default-${type}`}
              label="Never"
            />

            <Form.Check
              type={type}
              id={`default-${type}`}
              label="Sometimes"
            />
            <Form.Check 
              type={type}
              id={`default-${type}`}
              label="Often"
            />
            <Form.Check 
              type={type}
              id={`default-${type}`}
              label="Constantly"
            />
          </div>
        ))}
      </Form>
      </div>
      </Card>

      <Card class="text-center">
        <p class="card-header"> I had cold or hot flashes.  </p>
        <div class="card-body">
        <Form class="text-center">
        {['checkbox'].map((type) => (
            
          <div class="text-center" key={`default-${type}`} className="mb-3">
            <Form.Check 
              type={type}
              id={`default-${type}`}
              label="Never"
            />

            <Form.Check
              type={type}
              id={`default-${type}`}
              label="Sometimes"
            />
            <Form.Check 
              type={type}
              id={`default-${type}`}
              label="Often"
            />
            <Form.Check 
              type={type}
              id={`default-${type}`}
              label="Constantly"
            />
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