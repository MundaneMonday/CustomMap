import {useState, useEffect} from "react";
import {Auth} from "./../login/auth"


function UserProfile(){

    const [profile,setProfile] = useState([])
    const [username,setUsername] = useState("")
    
    useEffect(()=>{
        async function setUserInfo() {
            try{
        const currentAuthenticatedUser = await Auth.currentAuthenticatedUser();
        const username = currentAuthenticatedUser.username;
        setUsername(username);
        return currentAuthenticatedUser;
            }catch(err) {
                console.log(err);
                // Unable to get user, return `null` instead
                return null;
              }
        }

        setUserInfo();

        fetch(`https://murmuring-garden-88441.herokuapp.com/api/profiles/${username}`).then(response => response.json())
        .then(data => setProfile(data));


    })
        
return(


    <>
    Username: {profile.username}
    
    
    
    </>
)




}

export default UserProfile;