import React, { useEffect, useState } from 'react'
import { ReactSession } from 'react-client-session';

import axios from 'axios';
import "../ride.css";

function GetAllMemberbyid() {
  const user = ReactSession.get("user");
  const id = user.tid
  const [member,setMember]=useState([])
  const [add,setAdd]=useState(false)

  useEffect(()=>{

    axios.get("http://localhost:8080/getallmemberbytrainerid/"+id)
      .then((response) => {
        setMember(response.data);
        setAdd(true)

      })
      .catch((error) => {
        console.log(error);
      })

  },[])
  return (
    <div>
    {add && member.map((info,index)=>(<div id='ride' key={index} style={{'textAlign':'center'}}>
      <div className="card">
        <div className="card-body">
          <h5 className='btn btn-dark btn-lg btn-block'><b>Member Info</b></h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Fullname</b> :{info.fullname}</li>
          <li className="list-group-item"><b>Trainer Id</b>:{info.tid}</li>
          <li className="list-group-item"><b>Chest</b>:{info.chest}</li>
          <li className="list-group-item"><b>Height</b>:{info.height}</li>
          <li className="list-group-item"><b>Waist</b>:{info.waist}</li>
          <li className="list-group-item"><b>Weight</b>:{info.weight}</li>
          <li className="list-group-item"><b>Contact No</b>:{info.contactno}</li>
          <li className="list-group-item"><b>E-Mail</b>:{info.email}</li>
          <li className="list-group-item"><b>Status</b> : {info.status}</li>
        </ul>
      </div>
    </div>))}
    </div>
  )
}
export default GetAllMemberbyid;