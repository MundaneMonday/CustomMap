import CanvasJSReact from './../assets/canvasjs.react';
import {useState, useEffect} from "react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function AdminHome(){

const [Counter,setCounter] = useState([{Never: 0, Sometimes: 0, Often: 0, Constantly: 0, Question: ""}])
const [Counter1,setCounter1] = useState([{Never: 0, Sometimes: 0, Often: 0, Constantly: 0, Question: ""}])
const [Counter2,setCounter2] = useState([{Never: 0, Sometimes: 0, Often: 0, Constantly: 0, Question: ""}])
const [Counter3,setCounter3] = useState([{Never: 0, Sometimes: 0, Often: 0, Constantly: 0, Question: ""}])
const [Counter4,setCounter4] = useState([{Never: 0, Sometimes: 0, Often: 0, Constantly: 0, Question: ""}])

const [MoodTally,setMoodTally]= useState([{Perfect: 0, Good: 0, Ok: 0, Awful: 0}])
   
//GET assessments for the current month
const assessmentURL = "https://murmuring-garden-88441.herokuapp.com/api/assessments/currentMonth"
      const FetchAssessment = async()=> {
        try{
          const response = await fetch(assessmentURL);
          const json = await response.json()
         
         setCounter({
          Never: json.filter(element => element.answers[0] === "never").length, 
         Sometimes: json.filter(element => element.answers[0] === "sometimes").length,
         Often: json.filter(element => element.answers[0] === "often").length,
         Constantly: json.filter(element => element.answers[0] === "constantly").length, 
          Question: json[0].questions[0]
        })


        setCounter1({
          Never: json.filter(element => element.answers[1] === "never").length, 
         Sometimes: json.filter(element => element.answers[1] === "sometimes").length,
         Often: json.filter(element => element.answers[1] === "often").length,
         Constantly: json.filter(element => element.answers[1] === "constantly").length, 
          Question: json[0].questions[1]
        })


        setCounter2({
          Never: json.filter(element => element.answers[2] === "never").length, 
         Sometimes: json.filter(element => element.answers[2] === "sometimes").length,
         Often: json.filter(element => element.answers[2] === "often").length,
         Constantly: json.filter(element => element.answers[2] === "constantly").length, 
          Question: json[0].questions[2]
        })

        setCounter3({
          Never: json.filter(element => element.answers[3] === "never").length, 
         Sometimes: json.filter(element => element.answers[3] === "sometimes").length,
         Often: json.filter(element => element.answers[3] === "often").length,
         Constantly: json.filter(element => element.answers[3] === "constantly").length, 
          Question: json[0].questions[3]
        })


        setCounter4({
          Never: json.filter(element => element.answers[4] === "never").length, 
         Sometimes: json.filter(element => element.answers[4] === "sometimes").length,
         Often: json.filter(element => element.answers[4] === "often").length,
         Constantly: json.filter(element => element.answers[4] === "constantly").length, 
          Question: json[0].questions[4]
        })

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
         
        }catch (error) {
         console.log(error);
        }
      }

      

    const options = {
        title: {
          text: Counter.Question
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

     const options1 = {
      title: {
        text: Counter1.Question
      },theme: "light2",
      axisX: {
          title:"Frequency"
         },
         axisY: {
          title:"Total Frequency of all students"
         },
      data: [{				
                type: "bar",
                dataPoints: [
                    { label: "never",  y: Counter1.Never  },
                    { label: "sometimes", y: Counter1.Sometime  },
                    { label: "often", y:  Counter1.Often  },
                    { label: "constantly",  y: Counter1.Constantly  }
                    
                ],
                
       }]
   }

   
   const options2 = {
    title: {
      text: Counter2.Question
    },theme: "light3",
    axisX: {
        title:"Frequency"
       },
       axisY: {
        title:"Total Frequency of all students"
       },
    data: [{				
              type: "bar",
              dataPoints: [
                  { label: "never",  y: Counter2.Never  },
                  { label: "sometimes", y: Counter2.Sometime  },
                  { label: "often", y:  Counter2.Often  },
                  { label: "constantly",  y: Counter2.Constantly  }
                  
              ],
              
     }]
 }



 const options3 = {
  title: {
    text: Counter3.Question
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
                { label: "never",  y: Counter3.Never  },
                { label: "sometimes", y: Counter3.Sometime  },
                { label: "often", y:  Counter3.Often  },
                { label: "constantly",  y: Counter3.Constantly  }
                
            ],
            
   }]
}


const options4 = {
  title: {
    text: Counter4.Question
  },theme: "light4",
  axisX: {
      title:"Frequency"
     },
     axisY: {
      title:"Total Frequency of all students"
     },
  data: [{				
            type: "bar",
            dataPoints: [
                { label: "never",  y: Counter4.Never  },
                { label: "sometimes", y: Counter4.Sometime  },
                { label: "often", y:  Counter4.Often  },
                { label: "constantly",  y: Counter4.Constantly  }
                
            ],
            
   }]
}



     const optionsGlobal = {
      title: {
        text: ` How are most Canadian Students Feeling in General during ${new Date().toLocaleString('en-us', { month: 'long' })} ${new Date().getFullYear()}?`
      },theme: "light1", 
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
       <br/>
       <br/>
        <div>
        <CanvasJSChart options = {options}
        />
         <br/>
        <hr/>
        <br/>
         <CanvasJSChart options = {options1}
        />
         <br/>
        <hr/>
        <br/>
         <CanvasJSChart options = {options2}
        />
         <br/>
        <hr/>
        <br/>
         <CanvasJSChart options = {options3}
        />
         <br/>
        <hr/>
        <br/>
         <CanvasJSChart options = {options4}
        />
        <br/>
        <hr/>
        <br/>
        <CanvasJSChart options = {optionsGlobal}
        />

        <p>This license of CanvasJS only allows this app to be used for non-commercial purposes</p>
      </div>
    
      </>
    )

}

export default AdminHome;