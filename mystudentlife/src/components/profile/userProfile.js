import {useState, useEffect} from "react";
import {Card,ListGroup,Table,Pagination} from 'react-bootstrap'
import { Auth } from "./../login/auth";

function UserProfile(){
    const [Username, setUsername] = useState("");
    const [Profile,setProfile] = useState([])
    const [Email,setEmail] = useState("")
    const [MoodHistory,setMoodHistory] = useState([])
    const [page,setPage] = useState(1)
    const MAXPERPAGE = 20;
    
  
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
      const email = currentUser.getIdToken().payload.email
     
      //set the user's infos
      setUsername(username);
      setEmail(email)
      
     
    } catch (err) {
      console.log(err);
     
    }
  }
    function PreviousPage(){
      if(page > 1)
  setPage(Page => Page - 1);
  
  }  
  
  function NextPage(){
    if (page > 0 && ((page) * (MAXPERPAGE)) < MoodHistory.length){
  setPage(Page => Page + 1);
  
    }
  } 
  
    
       const FetchProfile = async() =>{
        const profileURL = `https://murmuring-garden-88441.herokuapp.com/api/profiles/${Username}/${Email}`
         try{
         const response = await fetch(profileURL);
         const json = await response.json()
        setProfile(json)
        return Profile;
       }catch (error) {
        console.log(error);
       }
      }

      const FetchMoodHistory = async()=>{
        const MoodHistoryURL = `https://murmuring-garden-88441.herokuapp.com/api/moods/${Username}`
        try{
          const response = await fetch(MoodHistoryURL);
          const json = await response.json()
         setMoodHistory(json.reverse())
         return MoodHistory;
        }catch (error) {
         console.log(error);
        }
      }  

      
    useEffect(()=>{
    setUserInfo()
      if(Username && Email){
      FetchProfile()
    
      }
      if(Profile){
        FetchMoodHistory()
      }
        
    },[Username,Email])
        
return(


    <>

<Card style={{marginTop: 50, marginBottom: 50}} >
  <Card.Body>
    <Card.Title>User's Info</Card.Title>
    <ListGroup variant="flush">
    <ListGroup.Item>Username: {Profile?.username} <br></br></ListGroup.Item>
    <ListGroup.Item>Email: {Profile?.email} <br></br></ListGroup.Item>
    <ListGroup.Item>Name: {Profile?.name}</ListGroup.Item>
  </ListGroup>
  <Card.Title>Mood History</Card.Title>
  <Table striped bordered hover>
  <thead>
    <tr>
      
      <th>Date/Time</th>
      <th>Mood</th>
    </tr>
  </thead>
  <tbody>
  {
    
      MoodHistory.slice((page-1)*MAXPERPAGE,page*MAXPERPAGE).map((moodEntry)=>{
       return <tr key={moodEntry._id}>
      <td><b>{moodEntry.date_time}</b></td>
      <td>{moodEntry.mood} </td>
      
    </tr>
      })
    }
  </tbody>
</Table>
  </Card.Body>
</Card>
    
    
<Pagination>
                        <Pagination.Prev onClick={ PreviousPage} />
                        <Pagination.Item>{page}</Pagination.Item>
                        <Pagination.Next onClick={NextPage} />
            </Pagination>  
    
 
    
    
    </>
)




}

export default UserProfile;