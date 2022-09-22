import React, { useState } from 'react'
import axios from 'axios';
import { ReactSession } from 'react-client-session';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
function Admin() {
 // const [userId, setUserId] = useState("");
  const [admin, setAdmin] = useState("");
  
  const id=ReactSession.get("userId");
//  const user= ReactSession.get("user");
  

  ThirdPage();
   function ThirdPage() {
    useEffect(() => {
        axios.get("http://localhost:8080/getadmin/" +id)
        .then((response) => { 
          setAdmin(response.data)  
          ReactSession.set("user", response.data);
        }).catch((error) => { console.log(error); })
    },[])
  }



  return (
    <center>
      <div id='ride'>
        <div className="card">
          <div className="card-body">
            <img src={'#'} style={{ 'borderRadius': '50%', 'height': '400px', 'width': '350px' }} />
            <h1 className="card-title">{admin.fullname}</h1>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>role </b>:{admin.role}</li>
            <li className="list-group-item"><b>username </b>:{admin.username}</li>
            <li className="list-group-item"><b>status </b>:{admin.status}</li>
            <li className="list-group-item"><b>Email </b>: {admin.email}</li>
            <li className="list-group-item"><b>Contact No </b>: {admin.contactno}</li>
          </ul>
          <div className="card-body">
            <a href="/updateadmin" className="btn btn-dark btn-lg btn-block"><b>Update Profile</b></a>
            <a href="/getalltrainer" className="btn btn-dark btn-lg btn-block"><b>GetAllTrainer</b></a>
            <a href="/getallmember" className="btn btn-dark btn-lg btn-block"><b>GetAllMember</b></a>
            <a href="/gettrainingplan" className="btn btn-dark btn-lg btn-block"><b>GetTrainingPlan</b></a>
            <a href="/getalladmin" className="btn btn-dark btn-lg btn-block"><b>GetAllAdmin</b></a>
            <a href="/getallpaymentdetail" className="btn btn-dark btn-lg btn-block"><b>GetAllPayments</b></a>
          </div>
        </div>

      </div>
    </center>
  )
}

export default Admin