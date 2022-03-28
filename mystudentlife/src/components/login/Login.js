import { Auth} from "./auth";
import axios from 'axios'


function Login(){  
    
    return(
        
   Auth.federatedSignIn().then(cred =>{
       console.log(cred);
       return Auth.currentAuthenticatedUser();
   }).then(user =>{
        //POST username
        axios.post(`https://murmuring-garden-88441.herokuapp.com/api/profiles?username=${user.username}`)
   }).then((response)=>{
       console.log(response);
   }).catch(err =>{
       console.log(err)
   })
    
    )

}

export default Login;