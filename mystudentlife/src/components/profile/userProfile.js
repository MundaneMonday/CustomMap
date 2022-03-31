import {useState, useEffect} from "react";
import {Auth} from "./../login/auth"
import {Card,ListGroup} from 'react-bootstrap'
import { useNavigate, useParams } from "react-router-dom";

function UserProfile(){
    
    const [profile,setProfile] = useState([])
    const [MoodHistory,setMoodHistory] = useState([])

    let {username} = useParams()
    
    useEffect(()=>{
    
      const profileURL = `https://murmuring-garden-88441.herokuapp.com/api/profiles/${username}`

      const MoodHistoryURL = `https://murmuring-garden-88441.herokuapp.com/api/moods/${username}`
       const FetchProfile = async() =>{
         try{
         const response = await fetch(profileURL);
         const json = await response.json()
        setProfile(json)
       }catch (error) {
        console.log(error);
       }
      }

      const FetchMoodHistory = async()=>{
        try{
          const response = await fetch(MoodHistoryURL);
          const json = await response.json()
         setMoodHistory(json)
        }catch (error) {
         console.log(error);
        }
      }
      FetchProfile()
      FetchMoodHistory()

      return
    },[])
        
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
  <Card.Title>Mood History</Card.Title>
  <ListGroup variant="flush">

    {
      MoodHistory.map((moodEntry)=>{
        return <ListGroup.Item> {moodEntry.mood} <br></br></ListGroup.Item>
      })
    }
    
    
  </ListGroup>
  </Card.Body>
</Card>
    
    
    
    
 
    
    
    </>
)




}

export default UserProfile;