import {useState, useEffect} from "react";
import { Form, Card, Button,Navbar } from "react-bootstrap";
import {Auth} from "./../login/auth"
import qs from 'qs'
import axios from 'axios'

function Assessment() {
  const [Frequency,setFrequency] = useState(['']);
  const[username,setUsername] = useState("")
  const[Questions,setQuestion] = useState([""])
  

  Questions[0] = "I was very anxious, worried or scared about a lot of things in my life."
  Questions[1] = "I had trouble sleeping - I could not fall or stay asleep, and/or didn't feel well-rested when I woke up."
  Questions[2] = "I felt restless, agitated, frantic, or tense."
  Questions[3] = "My heart would skip beat, was pounding, or my heart rate increased."
  Questions[4] = "I had cold or hot flashes. "

  const handleChange = (e,name) =>{
    if(e.target.name == name){
      setFrequency(prevState => ({...prevState,  [name]: e.target.value}));
     
    }
  }

          async function setUser() {
            try {
              // Get the user's info, see:
              // https://docs.amplify.aws/lib/auth/advanced/q/platform/js/#identity-pool-federation
              
              const currentUser = await Auth.currentSession()
              // If that didn't throw, we have a user object, and the user is authenticated
            
                    // Get the user's Identity Token, which we'll use later with our
              // microservce. See discussion of various tokens:
              // https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-with-identity-providers.html
           
              
              const username = currentUser.getIdToken().payload["cognito:username"]
              
          
              //set the user's infos
              setUsername(username);
             
              
             
              return currentUser;
             
            } catch (err) {
              console.log(err);
              // Unable to get user, return `null` instead
              return null;
            }
          }
          function handleSubmit(e){
           e.preventDefault()
            var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("username", username);

Object.keys(Frequency).forEach( freq =>{
  if(Frequency[freq] != "")
  urlencoded.append("answers", Frequency[freq] );
})

Object.keys(Questions).map( index =>{
  urlencoded.append("questions", Questions[index] );
})



var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://murmuring-garden-88441.herokuapp.com/api/assessments", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
           
         
            
          }

          useEffect(()=>{
            setUser()
          },[])
  return (
    <>
      <Navbar bg="dark" className="text-center" variant="dark">
        <h3 className="text-white bg-dark">Monthly Assessment</h3>
      </Navbar>

      <br />

      
    
        
        
          <Form className="text-center" onSubmit={handleSubmit}>
          <Card className="text-center">
          <h5 className="text-center">
        <b>
          The questions below ask about anxiety and worrying.<br></br>
          In the last month, have you experienced any of the following symptoms?
          If so, how often?
        </b>
      </h5>
        <p className="card-header">
          {Questions[0]}
        </p>
        <div className="card-body">
            {["radio"].map((type) => (
              <div key="Question1" className="mb-3">
                <Form.Group >
                <Form.Check 
                name="Question1"
                value="never"
                type={type} 
                id={`default-${type}`} 
                label="Never"
                onChange={e=>handleChange(e,"Question1")} 
                checked={Frequency["Question1"] === "never"}
                />

                <Form.Check
                name="Question1"
                value="sometimes"
                  type={type}
                  id={`default-${type}`}
                  label="Sometimes"
                  onChange={e=>handleChange(e,"Question1")}
                  checked={Frequency["Question1"]  === "sometimes"}
                />
                <Form.Check
                name="Question1" 
                value="often"
                type={type} 
                id={`default-${type}`} 
                label="Often" 
                onChange={e=>handleChange(e,"Question1")}
                checked={Frequency["Question1"]  === "often"}
                />
                <Form.Check
                name="Question1"
                  value="constantly"
                  type={type}
                  id={`default-${type}`}
                  label="Constantly"
                  onChange={e=>handleChange(e,"Question1")}
                checked={Frequency["Question1"]  === "constantly"}
                />
                </Form.Group>
              </div>
            ))}
            </div>
            </Card>

            <Card className="text-center">
        <p className="card-header">
        {Questions[1]}
        </p>
        <div className="card-body">
          
            {["radio"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Group >
                <Form.Check
                name="Question2" 
                value="never"
                type={type} 
                id={`default-${type}`} 
                label="Never"
                onChange={e=>handleChange(e,"Question2")} 
                checked={Frequency["Question2"] === "never"}
                />

                <Form.Check
                 name="Question2" 
                value="sometimes"
                  type={type}
                  id={`default-${type}`}
                  label="Sometimes"
                  onChange={e=>handleChange(e,"Question2")}
                  checked={Frequency["Question2"] === "sometimes"}
                />
                <Form.Check 
                 name="Question2" 
                value="often"
                type={type} 
                id={`default-${type}`} 
                label="Often" 
                onChange={e=>handleChange(e,"Question2")}
                checked={Frequency["Question2"] === "often"}
                />
                <Form.Check
                name="Question2" 
                  value="constantly"
                  type={type}
                  id={`default-${type}`}
                  label="Constantly"
                  onChange={e=>handleChange(e,"Question2")}
                checked={Frequency["Question2"] === "constantly"}
                />
                </Form.Group>
              </div>
            ))}
        </div>
      </Card>


      <Card className="text-center">
        <p className="card-header">
          {" "}
       {Questions[2]}
        </p>
        <div className="card-body">
          
            {["Radio"].map((type) => (
              <div className="text-center" key={`default-${type}`} className="mb-3">
                <Form.Group>
                <Form.Check
                name="Question3" 
                  className="text-center"
                  value="never"
                  type={type}
                  id={`default-${type}`}
                  label="Never"
                  onChange={e=>handleChange(e,"Question3")} 
                checked={Frequency["Question3"] === "never"}
                />

                <Form.Check
                name="Question3" 
                  className="text-center"
                  value="sometimes"
                  type={type}
                  id={`default-${type}`}
                  label="Sometimes"
                  onChange={e=>handleChange(e,"Question3")} 
                checked={Frequency["Question3"] === "sometimes"}
                />
                <Form.Check
                name="Question3" 
                  className="text-center"
                  value="often"
                  type={type}
                  id={`default-${type}`}
                  label="Often"
                  onChange={e=>handleChange(e,"Question3")} 
                  checked={Frequency["Question3"] === "often"}
                />
                <Form.Check
                name="Question3" 
                  className="text-center"
                  value="constantly"
                  type={type}
                  id={`default-${type}`}
                  label="Constantly"
                  onChange={e=>handleChange(e,"Question3")} 
                  checked={Frequency["Question3"] === "constantly"}
                />
                </Form.Group>
              </div>
            ))}
        
        </div>
      </Card>

      <Card className="text-center">
        <p className="card-header">
          {Questions[3]}
        </p>
        <div className="card-body">
       
            {["Radio"].map((type) => (
              <div className="text-center" key={`default-${type}`} className="mb-3">
                <Form.Group>
                <Form.Check
                name="Question4" 
                  className="text-center"
                  value="never"
                  type={type}
                  id={`default-${type}`}
                  label="Never"
                  onChange={e=>handleChange(e,"Question4")} 
                checked={Frequency["Question4"] === "never"}
                />

                <Form.Check
                name="Question4" 
                  className="text-center"
                  value="sometimes"
                  type={type}
                  id={`default-${type}`}
                  label="Sometimes"
                  onChange={e=>handleChange(e,"Question4")} 
                checked={Frequency["Question4"] === "sometimes"}
                />
                <Form.Check
                name="Question4" 
                  className="text-center"
                  value="often"
                  type={type}
                  id={`default-${type}`}
                  label="Often"
                  onChange={e=>handleChange(e,"Question4")} 
                  checked={Frequency["Question4"] === "often"}
                />
                <Form.Check
                name="Question4" 
                  className="text-center"
                  value="constantly"
                  type={type}
                  id={`default-${type}`}
                  label="Constantly"
                  onChange={e=>handleChange(e,"Question4")} 
                  checked={Frequency["Question4"] === "constantly"}
                />
                </Form.Group>
              </div>
            ))}
          
        </div>
      </Card>

      <Card className="text-center">
        <p className="card-header"> {Questions[4]}</p>
        <div className="card-body">
       
            {["Radio"].map((type) => (
              <div className="text-center" key={`default-${type}`} className="mb-3">
                <Form.Group>
                <Form.Check
                name="Question5" 
                  className="text-center"
                  value="never"
                  type={type}
                  id={`default-${type}`}
                  label="Never"
                  onChange={e=>handleChange(e,"Question5")} 
                checked={Frequency["Question5"] === "never"}
                />

                <Form.Check
                name="Question5" 
                  className="text-center"
                  value="sometimes"
                  type={type}
                  id={`default-${type}`}
                  label="Sometimes"
                  onChange={e=>handleChange(e,"Question5")} 
                checked={Frequency["Question5"] === "sometimes"}
                />
                <Form.Check
                name="Question5" 
                  className="text-center"
                  value="often"
                  type={type}
                  id={`default-${type}`}
                  label="Often"
                  onChange={e=>handleChange(e,"Question5")} 
                  checked={Frequency["Question5"] === "often"}
                />
                <Form.Check
                name="Question5" 
                  className="text-center"
                  value="constantly"
                  type={type}
                  id={`default-${type}`}
                  label="Constantly"
                  onChange={e=>handleChange(e,"Question5")} 
                  checked={Frequency["Question5"] === "constantly"}
                />
                </Form.Group>
              </div>
            ))}
        
        </div>
      </Card>

      <div className="container">
        <div className="row">
          <div className="col text-center">
          <Button type="submit" variant="success">Submit</Button>
          </div>
        </div>
      </div>
          </Form>
     
    </>
  );
}

export default Assessment;
