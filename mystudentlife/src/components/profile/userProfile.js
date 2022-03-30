import {useState, useEffect} from "react";
import {Auth} from "./../login/auth"
import { useParams } from 'react-router-dom';


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
    Username: {profile.username} <br></br>
    Email: {profile.email} <br></br>
    Name: {profile.name}
    
 
    
    
    </>
)




}

export default UserProfile;