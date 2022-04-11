import CanvasJSReact from './../assets/canvasjs.stock.react';
import {useState, useEffect} from "react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Home(){
const [Assessment,setAssessment] = useState([])
const [Counter,setCounter] = useState({Never: 0, Sometimes: 0, Often: 0, Constantly: 0})
const [Question,setQuestion] = useState("")
   
const assessmentURL = "https://murmuring-garden-88441.herokuapp.com/api/assessments/currentMonth"
      const FetchAssessment = async()=> {
        try{
          const response = await fetch(assessmentURL);
          const json = await response.json()
         setAssessment(json)
         setQuestion(json[0].questions[0])
         setCounter({Never: json.filter(element => element.answers[0] == "never").length, Sometimes: json.filter(element => element.answers[0] == "sometimes").length,Often: json.filter(element => element.answers[0] == "often").length,Constantly: json.filter(element => element.answers[0] == "constantly").length })
        
         Counter.Constantly = json.filter(element => element.answers[0] == "constantly").length


        }catch (error) {
         console.log(error);
        }
      }
      

      

        

    const options = {
        title: {
          text: Question
        },axisX: {
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

     useEffect(()=>{
         FetchAssessment();
         
         
     })

    return(

        <div>
        <CanvasJSChart options = {options}
            /* onRef = {ref => this.chart = ref} */
        />
      </div>
    )

}

export default Home;