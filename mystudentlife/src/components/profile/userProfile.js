import {useState, useEffect} from "react";
import {Auth} from "./../login/auth"
import {Card,ListGroup} from 'react-bootstrap'


function UserProfile(){
    
    const [profile,setProfile] = useState([])
    const [Username, setUsername] = useState("");
    
    async function setUserInfo() {
      
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
    
    useEffect(()=>{
        
      setUserInfo();
    

        fetch(`https://murmuring-garden-88441.herokuapp.com/api/profiles/${Username}`).then(response => response.json())
        .then(data => setProfile(data));


    })
        
return(


    <>

<Card style={{marginTop: 50, marginBottom: 50}} >
  <Card.Body>
    <Card.Title>User's Info</Card.Title>
    <ListGroup variant="flush">
    <ListGroup.Item>Username: {profile.username} <br></br></ListGroup.Item>
    <ListGroup.Item>Email: {profile.email} <br></br></ListGroup.Item>
    <ListGroup.Item>Name: {profile.name}</ListGroup.Item>
  </ListGroup>
  </Card.Body>
</Card>
    
    
    
    
 
    
    
    </>
)




}

export default UserProfile;