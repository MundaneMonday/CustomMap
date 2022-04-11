import CanvasJSReact from './../assets/canvasjs.stock.react';
import {useState, useEffect} from "react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Home(){
const [Assessment,setAssessment] = useState([])
const [Counter,setCounter] = useState({Never: 0, Sometimes: 0, Often: 0, Constantly: 0})
   
const assessmentURL = "https://murmuring-garden-88441.herokuapp.com/api/assessments"
      const FetchAssessment = async()=> {
        try{
          const response = await fetch(assessmentURL);
          const json = await response.json()
         setAssessment(json)
       


        }catch (error) {
         console.log(error);
        }
      }
      

         Counter.Never = Assessment.filter(element => element.answers[0] == "never").length
         Counter.Sometimes = Assessment.filter(element => element.answers[0] == "sometimes").length
         Counter.Often = Assessment.filter(element => element.answers[0] == "often").length
         Counter.Constantly = Assessment.filter(element => element.answers[0] == "constantly").length

        

    const options = {
        title: {
          text: "Assessment.questions[0]"
        },
        data: [{				
                  type: "column",
                  dataPoints: [
                      { label: "never",  y: Counter.Never  },
                      { label: "sometimes", y: Counter.Sometime  },
                      { label: "often", y:  Counter.Often  },
                      { label: "constantly",  y: Counter.Constantly  }
                      
                  ]
         }]
     }

     useEffect(()=>{
         FetchAssessment();
         
     },[])

    return(

        <div>
        <CanvasJSChart options = {options}
            /* onRef = {ref => this.chart = ref} */
        />
      </div>
    )

}

export default Home;