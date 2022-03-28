import { Auth} from "./auth";



function Login(){  
    
    return(
        
   Auth.federatedSignIn().then(cred =>{
       console.log(cred);
       return Auth.currentAuthenticatedUser();
   }).then(user =>{
    
   
       
        
        
   }).catch(err =>{
       console.log(err)
   })
    
    )

}

export default Login;