import CanvasJSReact from './../assets/canvasjs.react';
import {useState, useEffect} from "react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function AdminHome(){

const [Counter,setCounter] = useState([{Never: 0, Sometimes: 0, Often: 0, Constantly: 0}])
const [Question,setQuestion] = useState("")
const [MoodTally,setMoodTally]= useState([{Perfect: 0, Good: 0, Ok: 0, Awful: 0}])
   
//GET assessments for the current month
const assessmentURL = "https://murmuring-garden-88441.herokuapp.com/api/assessments/currentMonth"
      const FetchAssessment = async()=> {
        try{
          const response = await fetch(assessmentURL);
          const json = await response.json()
         
         setQuestion(json[0].questions[0])
         setCounter({
          Never: json.filter(element => element.answers[0] === "never").length, 
         Sometimes: json.filter(element => element.answers[0] === "sometimes").length,
         Often: json.filter(element => element.answers[0] === "often").length,
         Constantly: json.filter(element => element.answers[0] === "constantly").length })

        }catch (error) {
         console.log(error);
        }
      }

//GET all moods
const MoodURL = "https://murmuring-garden-88441.herokuapp.com/api/moods"
      const FetchMoods = async()=> {
        try{
          const response = await fetch(MoodURL);
          const json = await response.json()
         
         setMoodTally({
          Perfect: json.filter(element => element.mood === "perfect").length, 
         Good: json.filter(element => element.mood === "good").length,
         Ok: json.filter(element => element.mood === "ok").length,
         Awful: json.filter(element => element.mood === "awful").length })
          console.log(MoodTally)
        }catch (error) {
         console.log(error);
        }
      }

      

    const options = {
        title: {
          text: Question
        },theme: "light1",
        axisX: {
            title:"Frequency"
           },
           axisY: {
            title:"Total Frequency of all students"
           },
        data: [{				
                  type: "bar",
                  dataPoints: [
                      { label: "never",  y: Counter.Never  },
                      { label: "sometimes", y: Counter.Sometime  },
                      { label: "often", y:  Counter.Often  },
                      { label: "constantly",  y: Counter.Constantly  }
                      
                  ],
                  
         }]
     }

     const options2 = {
      title: {
        text: ` Mood Swings for ${new Date().toLocaleString('en-us', { month: 'long' })} ${new Date().getFullYear()}`
      },theme: "light1",
      axisX: {
          title:"Mood Swings"
         },
         axisY: {
          title:"Total Mood Frequency of all students"
         },
      data: [{				
                type: "pie",
                dataPoints: [
                    { label: "Perfect",  y: MoodTally.Perfect  },
                    { label: "Good", y: MoodTally.Good  },
                    { label: "Ok", y:  MoodTally.Ok  },
                    { label: "Awful",  y: MoodTally.Awful  }
                    
                ],
                
       }]
   }

     useEffect(()=>{
         FetchAssessment();
         FetchMoods();
         
     },[])

    return(
       <>
        <div>
        <CanvasJSChart options = {options}
        />
        <CanvasJSChart options = {options2}
        />

        <p>This license of CanvasJS only allows this app to be used for non-commercial purposes</p>
      </div>
    
      </>
    )

}

export default AdminHome;