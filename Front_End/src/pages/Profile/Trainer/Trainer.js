import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ReactSession } from 'react-client-session';
function Trainer() {
  const user=ReactSession.get("user");
  const [trainer, setTrainer] = useState("")
  const id =  ReactSession.get('userId')
  console.log(user);

  ThirdPage();
  function ThirdPage() {
   useEffect(() => {
       axios.get("http://localhost:8080/gettrainer/" +id)
       .then((response) => { 
        setTrainer(response.data)  
         ReactSession.set("user", response.data);
       }).catch((error) => { console.log(error); })
   },[])
 }
  return (
    <center>
    <div id='ride'>
      <div className="card">
        <div className="card-body">
        <img src={'#'} style={{'borderRadius':'50%','height':'400px','width':'350px'}} />
        <h1 className="card-title">{trainer.fullname}</h1>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>role </b>:{trainer.role}</li>
            <li className="list-group-item"><b>username </b>:{trainer.username}</li>
            <li className="list-group-item"><b>status </b>:{trainer.status}</li>
            <li className="list-group-item"><b>fees </b>:{trainer.fees}</li>
            <li className="list-group-item"><b>work exp </b>:{trainer.workexp}</li>
            <li className="list-group-item"><b>speciality </b>:{trainer.speciality}</li>
            <li className="list-group-item"><b>Email </b>: {trainer.email}</li>
            <li className="list-group-item"><b>Contact No </b>: {trainer.contactno}</li>
          </ul>
        <div className="card-body">
          <a href="/updatetrainer" className="btn btn-dark btn-lg btn-block"><b>Update Profile</b></a>
          <a href="/getallmemberbyid" className="btn btn-dark btn-lg btn-block"><b>GetMemberInfo</b></a>
          <a href="/gettrainingplan" className="btn btn-dark btn-lg btn-block"><b>GetTrainingPlan</b></a>
          <a href="/createtrainingplan" className="btn btn-dark btn-lg btn-block"><b>CreateTrainingPlan</b></a>
          
        </div>
      </div>

    </div>
    </center>
  )
}

export default Trainer