import React, { useEffect, useState } from 'react'
import axios from 'axios';
//import User from './images/user.jpg'
import { ReactSession } from 'react-client-session';
function Member() {
  const [member, setMember] = useState("");
ThirdPage();
function ThirdPage() {
 
  const id = ReactSession.get("userId");
 useEffect(() => {
     axios.get("http://localhost:8080/getmember/" +id)
     .then((response) => { 
      setMember(response.data)  
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
        <h1 className="card-title">{member.fullname}</h1>
        </div>
        <ul className="list-group list-group-flush">
        <li className="list-group-item"><b>Login_id </b>:{member.loginid}</li>
        <li className="list-group-item"><b>Username </b>:{member.username}</li>
        <li className="list-group-item"><b>Role </b>:{member.role}</li>
          <li className="list-group-item"><b>Gender </b>:{member.gender}</li>
          <li className="list-group-item"><b>Height </b>:{member.height}</li>
          <li className="list-group-item"><b>Chest_Size </b>:{member.chest}</li>
          <li className="list-group-item"><b>Weight </b>:{member.weight}</li>
          <li className="list-group-item"><b>Waist_size </b>:{member.waist}</li>
          <li className="list-group-item"><b>Status </b>:{member.status}</li>
          <li className="list-group-item"><b>Email </b>: {member.email}</li>
          <li className="list-group-item"><b>Contact No </b>: {member.contactno}</li>
        </ul>
        <div className="card-body">
          <a href="/updatemember" className="btn btn-dark btn-lg btn-block"><b>Update Profile</b></a>
          <a href="/getmembertrainingplan" className="btn btn-dark btn-lg btn-block"><b>GetTrainingPlan</b></a>
          <a href="/gettrainerinfo" className="btn btn-dark btn-lg btn-block"><b>GetTrainerInfo</b></a>
        </div>
      </div>

    </div>
    </center>
  )
}

export default Member