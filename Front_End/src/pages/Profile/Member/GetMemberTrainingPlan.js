import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "../ride.css";

function GetMemberTrainingPlan() {
 
  const [training,setTraining]=useState([])
  const [add,setAdd]=useState(false)

  useEffect(()=>{

    axios.get("http://localhost:8080/getallplan")
      .then((response) => {
        setTraining(response.data);
        setAdd(true)

      })
      .catch((error) => {
        console.log(error);
      })

  },[])
  return (
    <div>
    {add && training.map((plan,index)=>(<div id='ride' key={index} style={{'textAlign':'center'}}>
      <div className="card">
        <div className="card-body">
          <h5 className='btn btn-dark btn-lg btn-block'><b>DAY :&nbsp;{plan.day}</b></h5>
        </div>
        <ul className="list-group list-group-flush">
          
          <li className="list-group-item"><b>Work-Out</b> :{plan.workout}</li>
          <li className="list-group-item"><b>Diet</b>:{plan.diet}</li>
          
        </ul>
      </div>
    </div>))}
    </div>
  )
}
export default GetMemberTrainingPlan;