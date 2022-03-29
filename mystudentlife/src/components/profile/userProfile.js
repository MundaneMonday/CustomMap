import {useState, useEffect} from "react";
import {Auth} from "./../login/auth"
import { useParams } from 'react-router-dom';


function UserProfile(){
    
    const [profile,setProfile] = useState([])
  
    
    let {username} = useParams();
    
    useEffect(()=>{
        
      
    

        fetch(`https://murmuring-garden-88441.herokuapp.com/api/profiles/${username}`).then(response => response.json())
        .then(data => setProfile(data));


    })
        
return(


    <>
    Username: {profile.username}
    Email: {profile.email}
    
 
    
    
    </>
)




}

export default UserProfile;