import { Auth} from "../login/auth";
import {React} from "react"
import {Navigate} from 'react-router-dom'

function LogOut(){  
    
    return(
        
   Auth.signOut()
    
    )

}

export default LogOut