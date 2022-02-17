import { Auth} from "../login/auth";
import {React} from "react"

function LogOut(){  
    
    return(
        
   Auth.signOut()
    
    )

}

export default LogOut